import Link from 'next/link'

/**
 * 归档分组
 * @param {*} param0
 * @returns
 */
export default function BlogArchiveItem({ archiveTitle, archivePosts }) {
  return (
    <div key={archiveTitle}>
      <div
        id={archiveTitle}
        className='pt-10 pb-2 text-2xl font-bold dark:text-gray-300'>
        {archiveTitle}
      </div>
      <ul>
        {archivePosts[archiveTitle]?.map(post => {
          return (
            <li
              key={post.id}
              className='p-1 text-base items-center hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500'>
              <div id={post?.publishDay} className='flex gap-4 justify-between'>
                <Link
                  passHref
                  href={post?.href}
                  className='dark:text-gray-400 truncate dark:hover:text-gray-300 hover:font-bold hover:text-primary overflow-x-hidden cursor-pointer text-gray-600'>
                  {post.title}
                </Link>
                <span className='text-gray-400'>
                  {Number(post.date?.start_date.split('-').at(-1))}th
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
