export default function ScheduleCall() {
    return (
      <button className="flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500 bg-[#0D1B2A] text-white font-medium hover:scale-105 transition-transform duration-200">
        
        {/* Calendar Icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-400"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
  
        {/* Text */}
        <span>Schedule a call</span>
  
        {/* Right Arrow Circle (SVG) */}
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2E2E2E]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    );
  }
  