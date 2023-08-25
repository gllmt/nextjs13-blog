import Image from "next/image"

const CTACard = () => {
  return (
    <div className="px-6 py-10 rounded-md bg-slate-100 relative overflow-hidden">
        {/* Overlay here */}
        <div className="absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
        {/* Image here */}
        <Image fill alt="Cta image" className="object-cover object-center" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHw2fHxOZXclMjBZb3J8ZW58MHx8fHwxNjcwMjUzMzMw&ixlib=rb-4.0.3" />
        {/* Content Container */}
        <div className="relative z-20">
            <div className="text-lg font-medium">#exploretheworld</div>
            <h3 className="mt-3 text-4xl font-semibold">Explore the world with me !</h3>
            <p className="mt-2 text-lg max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi illo alias totam soluta maiores. Unde, corrupti maiores consequatur minima molestiae maxime dignissimos ullam tenetur quas reiciendis ipsa in. Reprehenderit!</p>
        {/* Form here */}
        <form className="mt-6 flex items-center gap-2 w-full">
            <input placeholder="Write your email" className="w-full md:w-auto bg-white/80 px-3 py-2 placeholder:text-sm text-base rounded-md outline-none focus:ring-2 ring-neutral-600" />
            <button className="px-3 py-2 rounded-md bg-neutral-900 text-neutral-200 whitespace-nowrap">Sign Up</button>
        </form>
        </div>
    </div>
  )
}

export default CTACard