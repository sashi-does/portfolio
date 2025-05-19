type CardProps = {
    title: string,
    image: string,
    link: string,
    description: string
}

export default function WorkCard({ title, image, link, description }: CardProps) {
  return (
    <div className="p-6 md:w-[40%] border border-[#404040] rounded-2xl shadow hover:shadow-lg transition">
      <img
        src={image}
        alt="TubeIO"
        className="rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        className="text-blue-500 mt-4 inline-block"
      >
        Visit Site →
      </a>
    </div>
  );
}
