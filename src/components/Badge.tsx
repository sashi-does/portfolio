export default function Badge() {

    return (
      <div className="mx-[41px] my-5 relative inline-block rounded-full px-4 py-1 border border-[#2A3A47] bg-gradient-to-r from-[#0f1c2e] to-[#0c1624] text-sm font-medium text-white shadow-inner overflow-hidden hover:shine-slant-active">
        <div className="shine-slant absolute inset-0 opacity-30 pointer-events-none"></div>
        <span className="relative z-10">
          Building: <span className="font-bold text-white">Brayn</span>
        </span>
      </div>
    );
  }
  