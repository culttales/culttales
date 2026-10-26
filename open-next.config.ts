import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The site is statically generated, so no incremental cache is needed.
export default defineCloudflareConfig();
