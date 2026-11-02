// Large videos are served from Cloudflare R2. Set NEXT_PUBLIC_MEDIA_URL at
// build time (e.g. https://media.culttales.com) to use it; unset falls back to /public.
export function mediaUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") ?? "";
  return `${base}${path}`;
}
