// Utility functions for the application

/**
 * Get the base path from Next.js configuration
 * This is needed for GitHub Pages deployment where the site is served from a subdirectory
 */
export const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

/**
 * Prefix a path with the base path
 * @param path - The path to prefix
 * @returns The prefixed path
 */
export function withBasePath(path: string): string {
  // Don't add base path to external URLs or anchor links
  if (path.startsWith('http') || path.startsWith('#')) {
    return path;
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}
