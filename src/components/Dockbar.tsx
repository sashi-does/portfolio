import Image from 'next/image';
import HomeIcon from '../../public/home.svg';
import AboutIcon from '../../public/about.svg'
import WorkIcon from '../../public/work.svg'
import BlogIcon from '../../public/blog.svg'

export default function Dockbar() {

    // add icons 

    const dockItem = "flex items-center gap-x-3 border border-solid m-1 border-transparent rounded-full px-3 py-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#39393950] hover:border-white/20";
    const divider = "w-px h-6 bg-white/40 mx-1";
  
    return (
      <div className="flex border border-white/20 rounded-full justify-center z-30 backdrop-blur-md sticky top-4">
        <ul className="flex items-center">
          <li className={dockItem}>
            <Image src={HomeIcon} alt='home' />
          </li>
          <div className={divider}></div>
          <li className={dockItem}>
            <Image src={AboutIcon} alt='about' />
            About
          </li>
          <li className={dockItem}>
            <Image src={WorkIcon} alt='work' />
            Work
          </li>
          <li className={dockItem}>
            <Image src={BlogIcon} alt='blog' />
            Blog
          </li>
        </ul>
      </div>
    );
  }
  