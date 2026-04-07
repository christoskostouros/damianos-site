/**
 * CMS helper — loads frontmatter from a content collection entry.
 * Returns the data object, falling back to empty object if not found.
 * 
 * Usage:
 *   import { getCmsData } from '../lib/cms';
 *   const cms = await getCmsData('pages', 'katharismos-xaliwn');
 */
import { getEntry } from 'astro:content';

export async function getCmsData(
  collection: 'pages' | 'faq' | 'images',
  slug: string
): Promise<Record<string, any>> {
  try {
    const entry = await getEntry(collection, slug);
    return entry?.data ?? {};
  } catch {
    return {};
  }
}
