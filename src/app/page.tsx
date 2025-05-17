
import NewsLetter from "../components/NewsLetter";
import Badge from "@/components/Badge";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import HeroTitle from "@/components/ui/HeroTitle";



export default function Home() {
  return (
    <div className="h-[1000vh] flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-13 font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex h-[60vh] flex-col justify-center items-center text-center">
        <Badge />
        <HeroTitle>Developing the Bridge That links Code and Impact</HeroTitle>
      </div>
    </div>
  );
}
