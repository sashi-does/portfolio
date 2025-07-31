import Footer from "./sections/footer";
import Heatmap from "./sections/heatmap";
import MusicPlayer from "./sections/music-player";
import Profile from "./sections/profile";
import Projects from "./sections/projects";
import TotalVisits from "./sections/visits";

export default function Home() {
  return <div className="flex flex-col justify-center">
    <TotalVisits />
    <MusicPlayer />
    <Profile />
    <Heatmap />
    <Projects />
    <Footer />
    { /* Add total visits, contact , mail icon, skills section,  */ }
  </div>
}