// 'use client';

import { Copyright } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Pokedex',
    href: '/pokedex'
  },
  {
    name: 'Objetos',
    href: '/items'
  },
];

const NavLinks = () => {
  // const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={
              `flex h-[48px] grow items-center justify-center
              gap-2 rounded-md  p-3 text-sm font-medium
              hover:bg-red-500 hover:text-white md:flex-none animated duration-200
              md:justify-start md:p-2 md:px-3`
            }
            // ${pathname === link.href ? "bg-sky-100 text-black" : "bg-gray-800 text-white"}`
            >
            <p className='text-md'>{link.name}</p>
          </a>
        );
      })}
    </>
  );
}

const CopyrightLink = () => {
  return (
  <a
    href="https://github.com/TorCasDev"
    className='flex w-full justify-center  p-1 px-3 font-bold items-center gap-1 rounded-full hover:bg-black hover:text-white animated duration-500'
  >
    <Copyright size={20} /> TorCasDev
  </a>
  )
}

export { NavLinks, CopyrightLink } 