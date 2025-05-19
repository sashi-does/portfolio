import Link from "next/link";

type CardProps = {
  title: string;
  image: string;
  link: string;
  description: string;
};

export default function WorkCard({
  title,
  image,
  link,
  description,
  github,
}: CardProps) {
  return (
    <div className="md:w-[40%] border border-[#404040] rounded-2xl shadow hover:shadow-lg transition">
      <img src={image} alt="TubeIO" className="rounded-xl mb-4" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <Link href={link} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                height="20"
                width="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </Link>
            <Link href={github} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 2.75 1.27 3.42.97.1-.76.41-1.27.75-1.56-2.55-.3-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.18 0 0 .97-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.23-1.5 3.19-1.19 3.19-1.19.63 1.66.24 2.88.12 3.18.75.81 1.19 1.85 1.19 3.11 0 4.43-2.7 5.39-5.27 5.68.43.37.8 1.1.8 2.22v3.29c0 .3.21.65.8.54A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}
