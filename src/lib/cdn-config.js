// CDN Configuration
// After uploading to Vercel Blob, update CDN_BASE_URL with your blob URL

export function getCdnUrl(path) {
  // Check if CDN is enabled (must be checked at runtime for Vercel)
  const USE_CDN = process.env.NEXT_PUBLIC_USE_CDN === 'true';
  const CDN_BASE_URL = process.env.NEXT_PUBLIC_CDN_URL || '';

  // If CDN is enabled and configured, use CDN URL
  if (USE_CDN && CDN_BASE_URL) {
    return `${CDN_BASE_URL}${path}`;
  }

  // Otherwise, use local path
  return path;
}

// Helper functions for specific asset types
export function getVideoUrl(path) {
  return getCdnUrl(path);
}

export function getImageUrl(path) {
  return getCdnUrl(path);
}
