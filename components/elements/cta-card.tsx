import directus from "@/lib/directus";
import { revalidateTag } from "next/cache";
import Image from "next/image"

const CTACard = async () => {

  const formAction = async (formData:FormData) => {
    'use server';
    try {
      const email = formData.get('email');
      await directus.items("subscribers").createOne({
        email,
      });
      revalidateTag("subscribers-count");
    } catch (error) {
      console.log(error);
    }
  };

  const subscribersCount = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`, {
    next: {
      tags: ["subscribers-count"],
    }
  })
  .then(res => res.json())
  .then(res => res.meta.total_count)
  .catch(err => console.log(err));

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
        <form key={subscribersCount + "subscribers-form"} action={formAction} className="mt-6 flex items-center gap-2 w-full">
            <input type="email" name="email" placeholder="Write your email" className="w-full md:w-auto bg-white/80 px-3 py-2 placeholder:text-sm text-base rounded-md outline-none focus:ring-2 ring-neutral-600" />
            <button className="px-3 py-2 rounded-md bg-neutral-900 text-neutral-200 whitespace-nowrap">Sign Up</button>
        </form>
        {/* Subsbribers here */}
        <div className="mt-2 text-neutral-700">
          Join Our <span className="px-2 py-1 text-sm rounded-md bg-neutral-700 text-neutral-100">{subscribersCount}</span> subscribers now !
        </div>
        </div>
    </div>
  )
}

export default CTACard