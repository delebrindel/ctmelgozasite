import type { APIContext } from 'astro';
import { feedResponse } from '../lib/feed';

export async function GET(context: APIContext) {
  return feedResponse('en', context);
}
