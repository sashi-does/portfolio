export default function Heading({ children }: { children: React.ReactNode }) {
    return <h1 className="text-center py-1 mb-8 max-w-2xl mx-auto text-balance font-semibold text-4xl sm:text-3xl md:text-4xl lg:mt-16 xl:text-[40px] bg-gradient-to-b from-[#cbcbcb] to-white/70 bg-clip-text text-transparent">
    {children}
  </h1>
}