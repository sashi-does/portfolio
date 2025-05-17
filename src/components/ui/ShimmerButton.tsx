import Link from "next/link";

export default function ShimmerButton() {
  return (
    <button
      className="
        border 
        bg-[#39393950] 
        border-white/20 
        py-3 px-6 
        rounded-full
        text-white
        transition 
        duration-300
        hover:shadow-[0_0_10px_#0ea5e9]
      "
    >
      <Link href="/work">Check Out My Work</Link>
    </button>
  );
}
