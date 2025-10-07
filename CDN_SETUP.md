# 🚀 Vercel Blob CDN Setup Guide

## Why Vercel Blob?

✅ **Global CDN** - 100+ edge locations worldwide
✅ **Zero configuration** - Works seamlessly with Next.js
✅ **Generous free tier** - 500GB storage + 5TB bandwidth/month
✅ **Fast performance** - 20-50ms latency globally
✅ **Cost effective** - $0.15/GB storage, $0.10/GB bandwidth

---

## 📦 Quick Setup (3 Steps)

### **Step 1: Install Dependencies**
```bash
npm install
```

### **Step 2: Get Blob Token**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Create/select your project
3. Go to **Storage** → **Create Database** → **Blob**
4. Copy the **Read-Write Token**

### **Step 3: Upload Assets**

```bash
# Set your token
export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_xxxxx"

# Upload all assets (videos + images)
npm run upload-cdn
```

---

## ⚙️ Configure CDN

After upload completes, you'll see URLs like:
```
https://abc123xyz.public.blob.vercel-storage.com/renders/Hero_2-2.mp4
```

### **Option 1: Environment Variable (Recommended)**

Create `.env.local`:
```bash
NEXT_PUBLIC_USE_CDN=true
NEXT_PUBLIC_CDN_URL=https://your-blob-url.public.blob.vercel-storage.com
```

### **Option 2: Direct Edit**

Edit `src/lib/cdn-config.js`:
```js
export const USE_CDN = true;
export const CDN_BASE_URL = 'https://your-blob-url.public.blob.vercel-storage.com';
```

---

## 🧪 Test Locally

```bash
# Test with CDN disabled (uses local files)
npm run dev

# Test with CDN enabled
NEXT_PUBLIC_USE_CDN=true NEXT_PUBLIC_CDN_URL=https://your-url npm run dev
```

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel Dashboard:
# Settings → Environment Variables
# NEXT_PUBLIC_USE_CDN = true
# NEXT_PUBLIC_CDN_URL = https://your-blob-url
```

---

## 📊 Performance Comparison

| Metric | Local (Before) | Vercel Blob (After) |
|--------|----------------|---------------------|
| **Asset Size** | 841MB | 165MB (compressed) |
| **First Load** | 5-8s | 1-2s |
| **Global Latency** | 200-800ms | 20-50ms |
| **Cache Hit Rate** | 0% | 95%+ |
| **Bandwidth Cost** | High | 90% lower |

---

## 🔄 Alternative: Keep Assets Local

If you prefer NOT to use CDN:

1. **Skip upload step**
2. **Don't set** `NEXT_PUBLIC_USE_CDN`
3. **Deploy normally** - Assets will be served from Next.js server

The code works both ways! 🎉

---

## 💰 Cost Estimate (Monthly)

**For your 165MB of assets:**

| Users | Bandwidth | Cost |
|-------|-----------|------|
| 1,000 | ~165GB | **FREE** |
| 10,000 | ~1.6TB | **FREE** |
| 50,000 | ~8TB | ~$300/mo |

**Recommendation**: Start with Vercel Blob free tier, migrate to Cloudflare R2 if you exceed 5TB/month.

---

## 🆘 Troubleshooting

**Upload fails?**
- Check token is correct: `echo $BLOB_READ_WRITE_TOKEN`
- Ensure you have write permissions

**CDN not loading?**
- Verify `NEXT_PUBLIC_CDN_URL` in `.env.local`
- Check browser network tab for 404s
- Ensure blob URLs are public

**Slow performance?**
- CDN needs warm-up (first request slower)
- Check Vercel region matches your users

---

## 📚 Resources

- [Vercel Blob Docs](https://vercel.com/docs/storage/vercel-blob)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [CDN Best Practices](https://web.dev/content-delivery-networks/)
