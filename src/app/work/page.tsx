import Role from "@/components/ui/Role";

export default function WorkSection() {
  return (
    <div className="h-screen max-w-6xl mx-auto pt-10 flex flex-col items-center">
      <div className="text-center w-[50vw]">
        <h1 className="font-bold text-5xl">My Works</h1>
        <Role variant="work">Transforming ideas into elegant digital solutions that make a difference.</Role>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/images/tubeio-thumbnail.png"
            alt="TubeIO"
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-semibold">TubeIO – Focused Video Feed</h3>
          <p className="text-gray-400 text-sm mt-2">
            A distraction-free platform to watch niche-based YouTube content.
            Built with MERN stack, featuring personalized feeds and clean UX.
          </p>
          <a
            href="https://tubeio.example.com"
            target="_blank"
            className="text-blue-500 mt-4 inline-block"
          >
            Visit Site →
          </a>
        </div>

        {/* Repeat Project Cards Here */}
      </div>
    </div>
  );
}
