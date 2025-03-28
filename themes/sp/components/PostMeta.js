// import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import Link from 'next/link'
/**
 * 文章详情的元信息
 * 标题、作者、分类、标签、创建日期等等。
 */
export const PostMeta = props => {
  const { post } = props
  // const { locale } = useGlobal()

  return (
    <section className='flex-wrap flex flex-col mt-2 font-serif leading-8'>
      <h1 className='title-1 relative text-xl md:text-4xl pb-4 z-10'>
        {post?.title}
        {!!post?.translate && <sup className='opacity-80'>&nbsp;译</sup>}
      </h1>
      <div>
        <Link
          href={`/category/${post?.category}`}
          passHref
          className='cursor-pointer text-md mr-2 hover:text-black dark:hover:text-white  dark:border-gray-500'>
          {post?.category}
        </Link>
        {post?.type !== 'Page' && (
          <span>
            <Link
              href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
              passHref
              className='pl-1 mr-1 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 dark:border-gray-500'>
              {post?.publishDay}
            </Link>
            <span className='mr-1'>/</span>
            <span className='mr-2 text-gray-400 dark:text-gray-500'>
              {post?.lastEditedDay}
            </span>
            <span className='hidden busuanzi_container_page_pv font-light mr-2'>
              <i className='mr-1 fas fa-eye' />
              &nbsp;
              <span className='mr-2 busuanzi_value_page_pv' />
            </span>
          </span>
        )}
      </div>
    </section>
  )
}
