import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { platform } from "os"

const SocialLink = ({
    plateform, 
    link, 
    isShareURL = false,
}: {
    plateform: string,
    link: string,
    isShareURL?: boolean
}) => {

    const getIcon = (plateform: string) => {
        switch(plateform) {
            case "facebook":
                return <Facebook size="20" />
            case "twitter":
                return <Twitter size="20" />
            case "instagram":
                return <Instagram size="20" />
            case "youtube":
                return <Youtube size="20" />
            case "linkedin":
                return <Linkedin size="20" />
            case "github":
                return <Github size="20" />
        }
    }


    return (
        <Link href={link}>
            <div className={`${isShareURL ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-200 ease-in-out transition-colors" : ""}`}>
                {getIcon(plateform)}
            </div>
        </Link>
    );
}

export default SocialLink