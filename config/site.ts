export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        twitter: string;
        youtube: string;
        github: string;
        linkedin: string;
        instagram: string;
    }
}

const siteConfig: SiteConfig = {
    siteName: "Explorer",
    description: "A minimal and lovely travel blog which shares experiences and citiest around the world!",
    currentlyAt: "Limoges",
    socialLinks: {
        twitter: "https://www.twitter.com/yourtwitter",
        youtube: "https://www.youtube.com/youryoutube",
        github: "https://www.github.com/yourgithub",
        linkedin: "https://www.linkedin.com/in/yourlinkedin",
        instagram: "https://www.instagram.com/yourinstagram",
    }
}

export default siteConfig;
