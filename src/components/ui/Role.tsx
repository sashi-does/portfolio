type RoleType = {
    children: string,
    variant: "work" | "about"
}


const styleVariants = {
    "work": "text-[18px] font-md",
    "about": "text-md"
}

export default function Role({ children, variant }: RoleType) {
    return <p className={`${styleVariants[variant]} mt-[5px] text-gray-400`}>{children}</p>
}