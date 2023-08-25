import { getReadingTime, getRelativeDate } from '@/lib/helpers';
import { Post } from '@/types/collection'
import { ArrowRight } from 'lucide-react';

interface PostContentProps {
    post: Post;
}

const PostContent = ({post}: PostContentProps) => {
  return (
    <div className='space-y-2'>
        {/* Tags here */}
        <div className="flex items-center gap-2 text-sm text-neutral-500">
            <div className={`font-medium ${post.category.title === 'Cities' ? 'text-emerald-600' : 'text-indigo-600'}`}>{post.category.title}</div>
            <div className="w-2 h-2 rounded-full bg-neutral-200" />
            <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
            <div className="w-2 h-2 rounded-full bg-neutral-200" />
            <div>{getReadingTime(post.body)}</div>
            <div className="w-2 h-2 rounded-full bg-neutral-200" />
            <div>{getRelativeDate(post.date_created)}</div>
        </div>
        {/* Title here */}
        <h2 className="@lg:text-3xl text-xl @md:text-2xl font-medium">{post.title}</h2>
        {/* Description here */}
        <p className="text-base @lg:text-lg text-neutral-700 leading-snug">{post.description}</p>
        {/* Read more */}
        <div className="flex items-center gap-2 pt-3">Read more <ArrowRight size="14" /></div>
    </div>
  )
}

export default PostContent