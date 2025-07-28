import GitHubCalendar from "react-github-calendar";
import Heading from "../ui/heading";

export default function Heatmap() {
  return (
    <section className="flex flex-col items-center px-4 py-12 w-full">
      <Heading>Proof of Work</Heading>

      <div className="w-full max-w-4xl overflow-x-auto">
        <GitHubCalendar
          theme={{
            light: ["#f1f5f9", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1"],
            dark: ["#1f1f1f", "#b45309", "#d97706", "#f59e0b", "#facc15"],
          }}
          colorScheme="dark"
          username="sashi-does"
          blockSize={13}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </section>
  );
}
