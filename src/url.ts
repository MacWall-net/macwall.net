// Prefix a site path with the configured base, so links also work in
// /preview/<branch> builds (see BASE_PATH in astro.config.mjs).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
