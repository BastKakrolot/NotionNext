import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

/**
 * 公告模块
 * 其实就是一篇文章
 * @param {*} param0
 * @returns
 */
const Announcement = ({ post, className }) => {
  if (!post || Object.keys(post).length === 0) {
    return <></>
  }
  return (
    <aside className='rounded overflow-hidden mb-6'>
      {post && (
        <div id='announcement-content'>
          <NotionPage post={post} className='text-center' />
        </div>
      )}
    </aside>
  )
}
export default Announcement
