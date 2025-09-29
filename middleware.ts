import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

type Rule = {
  source: string;           // np. "/google" albo "/blog/*"
  destination: string;      // pełny URL lub ścieżka
  permanent?: boolean;      // true => 308, false => 307
  type?: 'exact' | 'prefix' | 'wildcard'; // opcjonalnie, ułatwia dopasowanie
};

function matches(reqPath: string, rule: Rule) {
  const type = rule.type ?? (rule.source.endsWith('/*') ? 'prefix' : 'exact');
  if (type === 'exact') return reqPath === rule.source || reqPath === rule.source + '/';
  if (type === 'prefix') {
    const base = rule.source.replace(/\/\*$/, '');
    return reqPath === base || reqPath.startsWith(base + '/');
  }
  if (type === 'wildcard') {
    // np. source: "/blog/*" dopasuje wszystko pod /blog/
    const base = rule.source.replace(/\/\*$/, '');
    return reqPath === base || reqPath.startsWith(base + '/');
  }
  return false;
}

export async function middleware(req: NextRequest) {
  const rules = (await get<Rule[]>('redirects')) ?? [];
  const { pathname, search } = req.nextUrl;
  const rule = rules.find(r => matches(pathname, r));

  if (rule) {
    const status = rule.permanent ? 308 : 307;
    // zachowaj query string użytkownika
    const target = new URL(rule.destination, req.url);
    if (search && rule.destination.startsWith('/')) target.search = search;
    return NextResponse.redirect(target, status);
  }

  return NextResponse.next();
}

// Ogranicz działanie middleware do stron (nie statycznych assetów)
export const config = {
  matcher: ['/((?!_next|assets|.*\\.(?:png|jpg|jpeg|gif|svg|ico|css|js|map)).*)'],
};
