export default function myImageLoader({ src, width, quality } : { src: string, width: number, quality?: number }) {
    return `https://your-s3-bucket.com/${src}?w=${width}&q=${quality || 75}`
  }