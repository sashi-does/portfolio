import AboutSidebar from "@/components/AboutSidebar";
import Profile from "@/components/Profile";
import ScheduleCall from "@/components/ui/SchedueCall";
import SocialHandles from "@/components/ui/SocialHandles";

export default function About() {

    return <div className="h-[200vh] p-8">
        <AboutSidebar />
        <Profile />
        <ScheduleCall />
        <SocialHandles />
    </div>
}