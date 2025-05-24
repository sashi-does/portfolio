import Image from "next/image";

const skills = [
    { name: "React", icon: "https://api.iconify.design/logos:react.svg" },
    { name: "Next.js", icon: "https://api.iconify.design/logos:nextjs-icon.svg" }, // White version of Next.js icon
    { name: "JavaScript", icon: "https://api.iconify.design/logos:javascript.svg" },
    { name: "Tailwind", icon: "https://api.iconify.design/logos:tailwindcss-icon.svg" },
    { name: "Node", icon: "https://api.iconify.design/logos:nodejs-icon.svg" },
    { name: "Express", icon: "/express.png" }, // Set to white
    { name: "Prisma", icon: "/prisma.png" }, // Set to white
    { name: "PostgreSQL", icon: "https://api.iconify.design/logos:postgresql.svg" },
    { name: "MongoDB", icon: "https://api.iconify.design/logos:mongodb-icon.svg" },
    { name: "Docker", icon: "https://api.iconify.design/logos:docker-icon.svg" },
    { name: "Git", icon: "https://api.iconify.design/logos:git-icon.svg" }
];

function getSize(name: string) {
    if(name === "MongoDB") return 12;
    if(name === "Next.js") return 28;
    if(name === "Express") return 48;
    return 25;
}

export default function SkillSection() {
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-extrabold">Technologies</h1>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 transition-all">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-center cursor-pointer gap-3 bg-[#0D1B2A40] p-3 rounded-xl border border-[#134a6b40] hover:bg-[#13253690] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={getSize(skill.name)}
              height={getSize(skill.name)}
              className="object-contain"
            />
            <span className="text-white text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}