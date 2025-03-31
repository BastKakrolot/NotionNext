import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
// import CONFIG from '../config'

/**
 * 博客列表的单个卡片
 * @param {*} param0
 * @returns
 */
const BlogItem = ({ post }) => {
  // const showPageCover =
  //   siteConfig('EXAMPLE_POST_LIST_COVER', null, CONFIG) &&
  //   post?.pageCoverThumbnail

  return (
    <article className={`replace mb-10`}>
      <div>
        <h2 className='mb-1'>
          <Link
            href={post?.href}
            className='text-[rgb(90,88,88)] transition-all font-bold hover:text-black dark:text-gray-100/80 dark:hover:text-gray-100 text-[20px] group no-underline'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} />
            )}
            {post?.title}
            {!!post.translate && (
              <sup className='opacity-60 transition-all group-hover:opacity-90'>
                &nbsp;译
              </sup>
            )}
            &nbsp;
          </Link>
        </h2>
        <div className='text-[14px] text-[#929191] mb-1'>
          <em>
            <span>{post.date?.start_date || post.createdTime}</span>
          </em>
          {post.category && (
            <Link
              className='ml-2 hover:underline'
              href={`/category/${post.category}`}>
              #{post.category}
            </Link>
          )}
        </div>

        {!post.results && (
          <p className='line-clamp-3 text-gray-700 dark:text-gray-400  text-[14px] leading-normal'>
            {post.summary}
          </p>
        )}
        <div className='mb-1 text-sm text-gray-700 dark:text-gray-300'></div>
        {/* 搜索结果 */}
        {post.results && (
          <p className='line-clamp-3 mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7'>
            {post.results.map((r, index) => (
              <span key={index}>{r}</span>
            ))}
          </p>
        )}
      </div>
    </article>
  )
}

export default BlogItem
