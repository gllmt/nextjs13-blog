import PaddingContainer from '@/components/layout/padding-container'
import PostCard from '@/components/post/post-card'
import Image from 'next/image'
import Link from 'next/link'
import { DUMMY_POSTS } from '@/DUMMY_DATA'
import PostList from '@/components/post/post-list'
import CTACard from '@/components/elements/cta-card'
import directus from '@/lib/directus'
import { notFound } from 'next/navigation'

export default async function Home() {
  const getAllPosts = async () => {
    try {
      const posts = await directus.items("post").readByQuery({
        fields : [
          "*", 
          "author.id",
          "author.name",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
        ],
      });

      return posts.data;

    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  // console.log(posts);

  if(!posts) {
    notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} />
        <PostList posts={posts.filter((_post, index) => index > 0 && index < 3) } />
        <CTACard />
        <PostCard reverse post={posts[3]} />
        <PostList posts={posts.filter((_post, index) => index > 3 && index < 6) } />
      </main>
    </PaddingContainer>
  )
}
