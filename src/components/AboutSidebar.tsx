const sidebarItems = [
    "Introduction",
    "Work Experience",
    "Studies",
    "Technical skills"
  ];
  
  export default function AboutSidebar() {
    return (
      <div className="left-0 top-[40vh] sticky px-6 text-white font-medium">
        <ul className="space-y-5 w-fit">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="group flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:text-blue-400"
            >
              <div className="w-4 h-[1px] bg-gray-500 group-hover:bg-blue-400 transition-all duration-300" />
              <p className="text-lg transform transition-transform duration-300 group-hover:translate-x-1">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  