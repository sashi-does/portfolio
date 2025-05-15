import Image from "next/image";
import Dockbar from "../components/Dockbar/page";
import Badge from "../components/Badge/page";
import HeroTitle from "../ui/HeroTitle";
import HeroAbout from "../components/HeroAbout/page";
import NewsLetter from "../components/NewsLetter/page";

export default function Home() {
  return (
    <div className="h-[1000vh] flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-13 font-[family-name:var(--font-geist-sans)]">
      <Dockbar />
      <Badge />
      <HeroTitle>Building bridges between design and code</HeroTitle>
      <HeroAbout />
      <NewsLetter />
    </div>
  );
}
