# Deploying to Cloudflare

The site runs on Cloudflare Workers through the OpenNext adapter (`@opennextjs/cloudflare`).
Config lives in `wrangler.jsonc` and `open-next.config.ts`.

## Local checks

```bash
npm run preview   # builds and serves the site in the Workers runtime
```

## One-time setup

1. **Large videos.** Cloudflare caps a static asset at 25 MiB, and every build first
   downloads the repository from GitHub, so big media files slow builds down. The films
   (`public/videos/film-*.mp4`) are upright, web-sized copies of the original showreels
   and ship with the Worker; nothing needs uploading for them. Serve any new video over
   25 MiB from R2 through `mediaUrl()` in `lib/media.ts` rather than committing it:
   - Create an R2 bucket (e.g. `culttales-media`).
   - Upload the file, keeping its path (`npx wrangler r2 object put culttales-media/videos/<name>.mp4 --file <name>.mp4 --remote`).
   - Give the bucket a public custom domain (R2 → bucket → Settings → Custom Domains), e.g. `media.culttales.com`.
2. **Build variables** (Cloudflare dashboard → Workers & Pages → culttales → Settings → Build → Variables, and Variables and Secrets):
   - `NEXT_PUBLIC_MEDIA_URL` = `https://media.culttales.com` (build variable, inlined at build time; only needed once a video is served from R2).
   - `RESEND_API_KEY` (secret), and optionally `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL`. See `.env.example`.
3. **Connect the repo.** Workers & Pages → Create → Import a repository → `culttales/culttales`,
   branch `main`. Build command `npx opennextjs-cloudflare build`, deploy command
   `npx opennextjs-cloudflare deploy`. Or deploy by hand with `npm run deploy`.
4. **Domain.** Add `culttales.com` under the Worker's Settings → Domains & Routes once the
   `*.workers.dev` URL looks right, then remove the domain from Vercel.
