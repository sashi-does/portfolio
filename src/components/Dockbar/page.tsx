export default function Dockbar() {

    // add icons 

    const dockItems =
      "border border-solid m-1 border-transparent rounded-full px-4 py-3 cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#39393950] hover:border-white/20";
  
    return (
      <div className="flex rounded-full justify-center backdrop-blur-2xl sticky top-4">
        <ul className="flex gap-x-3">
          <li className={dockItems}>Home</li>
          <li className={dockItems}>About</li>
          <li className={dockItems}>Work</li>
          <li className={dockItems}>Blog</li>
          <li className={dockItems}>Gallery</li>
          <li className={dockItems}>Theme</li>
        </ul>
      </div>
    );
  }
  