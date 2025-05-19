import Role from "@/components/ui/Role";
import WorkCard from "@/components/WorkCard";

const workProjects = [
  {
    title: "TubeIO – Focused Video Feed",
    image: "tubeio.png",
    description:
      "A distraction-free platform to watch niche-based YouTube content. Built with MERN stack, featuring personalized feeds and clean UX.",
    link: "https://tubeio.vercel.app/",
  },
  {
    title: "OpenSkill – Social Media Marketing Agency",
    image: "openskill.png",
    description:
      "Landing page for a lead generation agency helping coaches and consultants book qualified appointments. Clean UI with strong CTA.",
    link: "https://openskill.in/",
  },
  {
    title: "Aarzen Acquisition – Lead Gen Agency",
    image: "aarzen.png",
    description:
      "Landing page for a lead generation agency helping coaches and consultants book qualified appointments. Clean UI with strong CTA.",
    link: "https://aarzen-aquisition.vercel.app/",
  },
];

export default function WorkSection() {
  return (
    <div className="max-w-6xl mx-auto pt-15 flex flex-col items-center px-4">
      <div className="text-center w-full sm:w-[50vw] mb-12">
        <h1 className="font-bold text-5xl">My Works</h1>
        <Role variant="work">
          Transforming ideas into elegant digital solutions that make a difference.
        </Role>
      </div>

      <div className="flex m-5 gap-5 justify-center flex-wrap">
        {workProjects.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
