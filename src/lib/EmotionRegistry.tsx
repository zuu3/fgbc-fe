'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

export default function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    const prevInsert = cache.insert.bind(cache);
    const inserted: string[] = [];
    cache.insert = (...args: Parameters<typeof prevInsert>) => {
      const result = prevInsert(...args);
      const name = args[1]?.name;
      if (name && cache.inserted[name] !== undefined && !inserted.includes(name)) {
        inserted.push(name);
      }
      return result;
    };
    const flush = () => inserted.splice(0);
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    const styles = names.map((name) => cache.inserted[name]).join('');
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
