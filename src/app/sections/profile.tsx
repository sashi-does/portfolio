import Name from "../ui/name";
import '../lib/fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 text-white">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/profile.png"
          width={96}
          height={96}
          alt="Profile"
          className="w-24 h-24 rounded-full border border-neutral-700 mb-4"
        />
        <Name>Marani Sashi Warddhan</Name>
        <p className="text-neutral-400 text-sm max-w-xl mt-2">
          Fullstack Developer focused on building thoughtful products and UI experiences.
          Experienced with Next.js, TypeScript, and building modular SaaS apps for modern teams.
        </p>

        <div className="flex gap-5 mt-6">
          <a
            href="https://github.com/sashi-does"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-amber-400 transition text-xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/sashihere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-amber-400 transition text-xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://x.com/sashi_does"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-amber-400 transition text-xl"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </section>
  );
}
