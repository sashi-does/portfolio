
import NewsLetter from "../components/NewsLetter";
import Badge from "@/components/Badge";
import HeroTitle from "@/components/ui/HeroTitle";
import ShimmerButton from "@/components/ui/ShimmerButton";



export default function Home() {
  return (
    <div className="h-[1000vh] flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-13 font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex h-[70vh] flex-col justify-center items-center text-center">
        <Badge />
        <HeroTitle>Developing the Bridge That links Code and Impact</HeroTitle>
        <div className="mt-[40px]">
          <ShimmerButton />
        </div>
      </div>
    </div>
  );
}
