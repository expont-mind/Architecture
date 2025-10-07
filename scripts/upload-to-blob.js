// Upload script for Vercel Blob Storage
// Run: BLOB_READ_WRITE_TOKEN=your_token node scripts/upload-to-blob.js

import { put } from '@vercel/blob';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_TOKEN) {
  console.error('❌ BLOB_READ_WRITE_TOKEN environment variable is required');
  console.error('Get it from: https://vercel.com/dashboard → Storage → Blob');
  process.exit(1);
}

async function uploadDirectory(localPath, remotePath) {
  const fullPath = join(__dirname, '..', localPath);
  const files = await readdir(fullPath);

  let baseUrl = null;

  for (const file of files) {
    // Skip hidden files
    if (file.startsWith('.')) continue;

    const filePath = join(fullPath, file);
    const fileBuffer = await readFile(filePath);
    const blobPath = `${remotePath}/${file}`;

    console.log(`📤 Uploading ${file} (${(fileBuffer.length / 1024 / 1024).toFixed(2)} MB)...`);

    try {
      const blob = await put(blobPath, fileBuffer, {
        access: 'public',
        token: BLOB_TOKEN,
      });

      // Extract base URL from first upload
      if (!baseUrl) {
        // Example: https://abc123.public.blob.vercel-storage.com/renders/file.mp4
        // Extract: https://abc123.public.blob.vercel-storage.com
        const urlObj = new URL(blob.url);
        baseUrl = `${urlObj.protocol}//${urlObj.host}`;
      }

      console.log(`✅ Uploaded: ${blob.url}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${file}:`, error.message);
    }
  }

  return baseUrl;
}

async function main() {
  console.log('🚀 Starting upload to Vercel Blob...\n');

  // Upload videos
  console.log('📹 Uploading videos (this may take several minutes)...');
  const baseUrl = await uploadDirectory('public/renders', 'renders');

  // Upload images
  console.log('\n🖼️  Uploading images...');
  await uploadDirectory('public/images', 'images');

  console.log('\n✨ Upload complete!\n');

  if (baseUrl) {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📋 NEXT STEPS:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log(`Your CDN URL: ${baseUrl}\n`);
    console.log('1. Create .env.local file:');
    console.log('   cp .env.local.example .env.local\n');
    console.log('2. Update .env.local with:');
    console.log(`   NEXT_PUBLIC_USE_CDN=true`);
    console.log(`   NEXT_PUBLIC_CDN_URL=${baseUrl}\n`);
    console.log('3. Test locally:');
    console.log('   npm run dev\n');
    console.log('4. Deploy to Vercel:');
    console.log('   vercel');
    console.log('   (Add the env vars in Vercel Dashboard)\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  }
}

main().catch(console.error);
