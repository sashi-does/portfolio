import Footer from "./sections/footer";
import Heatmap from "./sections/heatmap";
import Profile from "./sections/profile";
import Projects from "./sections/projects";

export default function Home() {
  return <div className="flex flex-col justify-center">
    <Profile />
    <Heatmap />
    <Projects />
    <Footer />
  </div>
}