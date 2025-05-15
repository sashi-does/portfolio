type TitleProps = {
    children: React.ReactNode
}

export default function HeroTitle({ children }: TitleProps) {
    return <h1 className="text-5xl font-bold">
        {children}
    </h1>
}