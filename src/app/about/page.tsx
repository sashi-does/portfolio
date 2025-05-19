import AboutSidebar from "@/components/AboutSidebar";
import Profile from "@/components/Profile";
import Name from "@/components/ui/AboutName";
import Role from "@/components/ui/Role";
import ScheduleCall from "@/components/ui/SchedueCall";
import SocialHandles from "@/components/ui/SocialHandles";

export default function About() {
  return (
    <div className="flex h-screen">
      <div className="w-[20%] flex items-center justify-center">
        <AboutSidebar />
      </div>

      <div className="flex-1 gap-x-6 pt-[80px] flex justify-center items-center">
        <div className="self-start mt-5 sticky top-[60px]">
          <Profile />
        </div>

        <div className="ml-8 h-full">
          <ScheduleCall />
          <Name />
          <Role variant="about">FullStack | DevOps | Web3 | Rust | BlockChain Developer</Role>
          <SocialHandles />

          <p className="w-[50vw] mt-4">
            I am currently pursuing a B.Tech in Computer Science and
            Engineering. My expertise lies in full-stack development, with a
            specialization in SaaS (Software as a Service) technologies. I am
            dedicated to building scalable applications that provide practical
            solutions to real-world challenges. Through continuous learning and
            hands-on experience, I strive to refine my skills and create
            impactful software that meets the evolving needs of the industry.
          </p>
          <p className="w-[50vw] mt-4">
            I am currently pursuing a B.Tech in Computer Science and
            Engineering. My expertise lies in full-stack development, with a
            specialization in SaaS (Software as a Service) technologies. I am
            dedicated to building scalable applications that provide practical
            solutions to real-world challenges. Through continuous learning and
            hands-on experience, I strive to refine my skills and create
            impactful software that meets the evolving needs of the industry.
          </p>
          <p className="w-[50vw] mt-4">
            I am currently pursuing a B.Tech in Computer Science and
            Engineering. My expertise lies in full-stack development, with a
            specialization in SaaS (Software as a Service) technologies. I am
            dedicated to building scalable applications that provide practical
            solutions to real-world challenges. Through continuous learning and
            hands-on experience, I strive to refine my skills and create
            impactful software that meets the evolving needs of the industry.
          </p>
          v
           <p className="w-[50vw] mt-4">
            I am currently pursuing a B.Tech in Computer Science and
            Engineering. My expertise lies in full-stack development, with a
            specialization in SaaS (Software as a Service) technologies. I am
            dedicated to building scalable applications that provide practical
            solutions to real-world challenges. Through continuous learning and
            hands-on experience, I strive to refine my skills and create
            impactful software that meets the evolving needs of the industry.
          </p>
          v <p className="w-[50vw] mt-4">
            I am currently pursuing a B.Tech in Computer Science and
            Engineering. My expertise lies in full-stack development, with a
            specialization in SaaS (Software as a Service) technologies. I am
            dedicated to building scalable applications that provide practical
            solutions to real-world challenges. Through continuous learning and
            hands-on experience, I strive to refine my skills and create
            impactful software that meets the evolving needs of the industry.
          </p>
        </div>
      </div>

      
    </div>
  );
}
