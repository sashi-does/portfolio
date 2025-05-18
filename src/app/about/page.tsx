import AboutSidebar from "@/components/AboutSidebar";
import Profile from "@/components/Profile";
import Name from "@/components/ui/AboutName";
import Role from "@/components/ui/Role";
import ScheduleCall from "@/components/ui/SchedueCall";
import SocialHandles from "@/components/ui/SocialHandles";

export default function About() {

    return <div className="h-[200vh]">
        <AboutSidebar />
        <div className="flex justify-center gap-x-15">
            <Profile />
            <div>
                <ScheduleCall />
                <Name />
                <Role />
                <SocialHandles />
            </div>
        </div>
    </div>
}