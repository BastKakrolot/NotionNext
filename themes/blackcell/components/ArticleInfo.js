import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'
/**
 * 文章详情页介绍
 * @param {*} props
 * @returns
 */
export default function ArticleInfo(props) {
  const { post } = props
  return (
    <>
      {/* title */}
      <h1 className='text-3xl pt-12 font-bold dark:text-gray-300'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}
        {post?.title}
      </h1>
      {/* meta */}
      <section className='py-3 items-center text-sm'>
        <div className='flex flex-wrap text-gray-500 py-1 dark:text-gray-600'>
          <span className='whitespace-nowrap'>{post?.publishDay}</span>
          <div className='hidden busuanzi_container_page_pv font-light ml-2 whitespace-nowrap'>
            <i className='mr-1 fas fa-fire' />
            <span className='busuanzi_value_page_pv' />
          </div>
        </div>
      </section>
      {post?.publishDay !== post?.lastEditedDay && !!post?.lastEditedDay && (
        <div className='bg-gray-400/20 p-3 text-sm rounded-sm'>
          <i className='far fa-calendar-check mr-2' />
          <span>最近编辑于：{post?.lastEditedDay}</span>
        </div>
      )}
    </>
  )
}
