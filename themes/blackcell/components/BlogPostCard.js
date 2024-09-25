import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import TagItemMini from './TagItemMini'

export const ItemTitle = props => {
  const { post } = props
  return (
    <Link href={post?.href}>
      <h2
        className='mb-2 sm:mb-4 text-gray-800 replace dark:text-gray-400 text-2xl font-bold relative
        hover:underline
          transition-all duration-300'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
        {post?.title}
      </h2>
    </Link>
  )
}

const BlogPostCard = ({ post }) => {
  const showPageCover = post?.pageCoverThumbnail !== ''

  return (
    <div
      key={post.id}
      data-aos='fade-up'
      data-aos-duration='300'
      data-aos-once='false'
      data-aos-anchor-placement='top-bottom'
      className='max-w-7xl dark:border-gray-800 '>
      <article className='flex flex-col-reverse sm:flex-row py- sm:py-4 w-full border-dashed border-gray-100 border-b last:border-0'>
        <div className='flex-1 relative tracking-wide'>
          <ItemTitle post={post} />
          <div className='mb-2 sm:mb-4 text-gray-700 dark:text-gray-300 flex flex-row'>
            <span className='text-sm flex justify-center items-center'>
              {post.date?.start_date || post.createdTime}
            </span>
            <div className='ml-6 flex flex-row gap-2'>
              {post.tagItems?.map(tag => (
                <TagItemMini key={tag.name} tag={tag}></TagItemMini>
              ))}
            </div>
          </div>
          <span className='text-gray-400 text-sm font-normal replace'>
            {post.summary}
          </span>
        </div>
        {/* 图片封面 */}
        {showPageCover && (
          <div className='w-full sm:w-[23%] mb-4 sm:mb-0 sm:ml-6 select-none'>
            <Link href={post?.href}>
              <LazyImage
                src={post?.pageCoverThumbnail}
                className='w-full h-24 sm:h-32 object-cover
                cursor-pointer rounded-2xl border-[1px] border-transparent duration-300 transition-all hover:border-slate-400'
              />
            </Link>
          </div>
        )}
      </article>
    </div>
  )
}

export default BlogPostCard
