import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
    return DUMMY_POSTS.map((post) => {
        return {
            slug: post.slug,
        };
    });
};


const Page = ({
    params,
}: {
    params: {
        slug: string;
    };
}) => {
    const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

  return (
    // <div>{post?.title}</div>
    <PaddingContainer>
        {/* Container here */}
        <div className="space-y-10">
            {/* PostHero here */}
            <PostHero post={post} />
            {/* Post body and social share here */}
            <div className="flex flex-col md:flex-row gap-10">
                <div className="relative">
                    <div className="sticky flex items-center md:flex-col gap-5 top-20">
                        <div className="font-medium md:hidden">Share this content :</div>
                        <SocialLink isShareURL plateform="facebook" link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`} />
                        <SocialLink isShareURL plateform="twitter" link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`} />
                        <SocialLink isShareURL plateform="linkedin" link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`} />
                    </div>
                </div>
                <PostBody body={post.body} />
            </div>
            {/* CTACard here */}
            <CTACard />
        </div>
    </PaddingContainer>
  )
};

export default Page;