type TitleProps = {
  children: React.ReactNode;
};

export default function HeroTitle({ children }: TitleProps) {
  return (
    <div>
      <h1 className="text-7xl mb-10 font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent text-center w-[70vw]">
        {children}
      </h1>
      <p className="m-auto w-[50vw] text-xl">
        I'm Sashi Marani. I work with web development, DevOps, and blockchain.
        In my free time, I build my own projects.
      </p>
    </div>
  );
}
