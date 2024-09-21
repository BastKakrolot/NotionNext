import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'
import cx from 'clsx'
import TagItemMini from './TagItemMini'

/**
 * 文章详情页介绍
 * @param {*} props
 * @returns
 */
export default function ArticleInfo(props) {
  const { post } = props
  const imgSrc = post?.pageCover
  return (
    <>
      <div className='flex flex-col min-h-[300px] justify-center items-center gap-3 relative group'>
        {imgSrc && (
          <div className='w-full absolute z-[0] h-full overflow-hidden flex items-center transition-all'>
            <div className='brightness-[.15] h-full group-hover:brightness-[.2] w-full transition-all duration-500'>
              <LazyImage
                alt=''
                className='rounded-none w-full group-hover:scale-[1.1] h-full object-cover transition-all duration-500'
                src={imgSrc}
                height={1000}
                width={1000}
              />
            </div>
          </div>
        )}
        {/* meta */}
        <section
          className={cx(
            'flex flex-col gap-6 p-[20px] z-[1] xl:px-[55px] w-full ',
            {
              'text-white': !!imgSrc
            }
          )}>
          {/* title */}
          <h1 className='w-full text-center text-2xl sm:text-4xl font-semibold my-3'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post?.pageIcon} />
            )}
            {post?.title}
          </h1>
          <h4 className='w-full text-center sm:text-lg lg:text-xl opacity-60'>
            {post?.summary}
          </h4>
          <div className='w-full text-center flex gap-2 justify-center items-center opacity-60'>
            <span className='mr-2'>
              发布于:
              {post?.publishDay}
            </span>
            <span>
              编辑于:
              {post?.lastEditedDay}
            </span>
          </div>
          <div className='hidden busuanzi_container_page_pv font-light mr-2 whitespace-nowrap w-full text-center opacity-60'>
            <i className='mr-1 fas fa-eye' />
            <span className='busuanzi_value_page_pv' />
          </div>
          <div className='w-full text-center flex gap-2 text-sm justify-center items-center'>
            {!!post?.tagItems.length && (
              <div className='flex flex-col gap-2'>
                <div className='flex flex-wrap gap-2'>
                  {post?.tagItems?.map(tag => (
                    <TagItemMini key={tag.name} tag={tag} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
