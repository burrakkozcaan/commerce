'use client';

import clsx from 'clsx';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const FooterMenuItem = ({ item }: { item: Menu }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          'block p-2 text-sm underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm',
          {
            'text-black dark:text-neutral-300': active
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav>
      <ul>
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
        <div><Link
            href="https://www.yukselensepets.com/search/dugun-malzemeleri"
            className={clsx(
                'block p-2 text-xs underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-xs',
            )}
        >
            Organizasyon Malzemeleri
        </Link>

            <Link
                href="https://www.yukselensepets.com/search/dugun-malzemeleri"
                className={clsx(
                    'block p-2 text-xs underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-xs',
                )}
            >
                Düğün Organizasyon Malzemeleri
            </Link>
            <Link
                href="https://www.yukselensepets.com/search/dugun-malzemeleri"
                className={clsx(
                    'block p-2 text-xs underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-xs',
                )}
            >
                Toptan Organizasyon Malzemeleri
            </Link>

            <Link
                href="https://www.yukselensepets.com/search/dugun-malzemeleri"
                className={clsx(
                    'block p-2 text-xs underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-xs',
                )}
            >
                Düğün Ekipmanları
            </Link>

            <Link
                href="https://www.yukselensepets.com/search/dugun-malzemeleri"
                className={clsx(
                    'block p-2 text-xs underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-xs',
                )}
            >
                Organizasyon Malzemeleri Toptan İstanbul
            </Link>
        </div>
    </nav>


  );
}
