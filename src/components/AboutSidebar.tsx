const sidebarItems = [
    "Introduction",
    "Skills",
    "Studies",
  ];
  
  export default function AboutSidebar() {
    return (
      <div className="left-0 top-[40vh] sticky px-6 text-white font-medium">
        <ul className="space-y-5 w-fit">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="group flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:text-[#15C0FD]"
            >
              <div className="w-4 h-[1px] bg-gray-500 group-hover:bg-[#15C0FD] transition-all duration-300" />
              <p className="text-lg transform transition-transform duration-300 group-hover:translate-x-1">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  