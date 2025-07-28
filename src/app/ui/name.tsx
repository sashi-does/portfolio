export default function Name({ children }: { children: React.ReactNode }) {
    return (
      <h1 className="text-center py-1 text-balance font-semibold text-4xl sm:text-3xl md:text-4xl xl:text-[40px] bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">
        {children}
      </h1>
    );
  }
  