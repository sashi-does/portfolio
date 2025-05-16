'use client';

import Image from 'next/image';
import HomeIcon from '../../public/home.svg';
import AboutIcon from '../../public/about.svg';
import WorkIcon from '../../public/work.svg';
import BlogIcon from '../../public/blog.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Dockbar() {
  const pathname = usePathname();

  const dockItem =
    'flex items-center gap-x-3 border border-solid m-1 border-transparent rounded-full px-3 py-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#39393950] hover:border-white/20';

  const activeStyle = 'bg-[#39393950] border-white/20';

  const divider = 'w-px h-6 bg-white/40 mx-1';

  return (
    <div className="flex border border-white/20 rounded-full justify-center z-30 backdrop-blur-md sticky top-4 w-[373px] m-auto">
      <ul className="flex items-center">
        <li className={`${dockItem} ${pathname === '/' ? activeStyle : ''}`}>
          <Link href="/">
            <Image src={HomeIcon} alt="home" />
          </Link>
        </li>
        <div className={divider}></div>
        <li className={`${dockItem} ${pathname === '/about' ? activeStyle : ''}`}>
          <Link href="/about" className="flex items-center gap-x-3">
            <Image src={AboutIcon} alt="about" />
            About
          </Link>
        </li>
        <li className={`${dockItem} ${pathname === '/work' ? activeStyle : ''}`}>
          <Link href="/work" className="flex items-center gap-x-3">
            <Image src={WorkIcon} alt="work" />
            Work
          </Link>
        </li>
        <li className={`${dockItem} ${pathname === '/blog' ? activeStyle : ''}`}>
          <Link href="/blog" className="flex items-center gap-x-3">
            <Image src={BlogIcon} alt="blog" />
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}
