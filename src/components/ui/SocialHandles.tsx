export default function SocialHandles() {
    const handles = [
      {
        name: 'GitHub',
        link: 'https://github.com/sashi-does',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 2.75 1.27 3.42.97.1-.76.41-1.27.75-1.56-2.55-.3-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.18 0 0 .97-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.23-1.5 3.19-1.19 3.19-1.19.63 1.66.24 2.88.12 3.18.75.81 1.19 1.85 1.19 3.11 0 4.43-2.7 5.39-5.27 5.68.43.37.8 1.1.8 2.22v3.29c0 .3.21.65.8.54A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/sashihere/',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.96-1.81-2.96-1.81 0-2.09 1.41-2.09 2.86v5.5h-3.55V9h3.41v1.56h.05c.48-.9 1.66-1.81 3.42-1.81 3.66 0 4.34 2.41 4.34 5.55v6.15zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zm1.77 13.02H3.56V9h3.55v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.73v20.55C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.73C24 .77 23.2 0 22.23 0z" />
          </svg>
        ),
      },
      {
        name: 'Email',
        link: 'mailto:work.with.sashi.dev@gmail.com',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M1.5 4.5h21v15h-21v-15zm1.5 2.15v10.7l6.84-5.33L3 6.65zm.84-1.15L12 13.16 20.16 5.5H3.84zM21 6.65l-6.84 5.37L21 17.35V6.65z" />
          </svg>
        ),
      },
    ];
  
    return (
      <div className="flex gap-4 mt-4">
        {handles.map((handle) => (
          <a
            key={handle.name}
            href={handle.link}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white border border-neutral-700 hover:border-white transition"
          >
            {handle.icon}
            <span>{handle.name}</span>
          </a>
        ))}
      </div>
    );
  }
  