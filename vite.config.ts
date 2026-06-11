// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force-enable the nitro deploy plugin for builds outside the Lovable sandbox
  // (e.g. the exported GitHub repo building on Netlify / Cloudflare Pages).
  // Without this, `vite build` skips nitro and emits only the raw SSR client/server
  // bundles with no deployable server runtime, so every route 404s when hosted.
  // `nitro: true` keeps `defaultPreset: "cloudflare-module"` while letting nitro
  // auto-detect the host (Netlify / Cloudflare Pages) from CI env vars.
  nitro: true,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
