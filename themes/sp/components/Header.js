import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import Announcement from './Announcement'
import { SignIcon } from './SignIcon'
import DarkModeButton from '@/components/DarkModeButton'
import { MenuList } from './MenuList'

/**
 * 侧边栏
 */
export const Header = props => {
  const { notice } = props
  // 评论相关

  return (
    <div className='md:hidden pt-12 flex  px-6 flex-col gap-3'>
      <div className='flex  justify-between place-items-center'>
        <Link href='/' className='pb-2 flex justify-start '>
          <SignIcon width={220} animate={false} />
        </Link>
        <div className='flex justify-start place-x-1 gap-3'>
          <DarkModeButton className='text-center' />
        </div>
      </div>
      <div className='font-light text-gray-600 mb-2 flex justify-start dark:text-gray-400'>
        {siteConfig('BIO')}
      </div>
      {/* 公告栏 */}
      <Announcement post={notice} />
      <div className='font-serif mb-2 flex'>
        <MenuList {...props} />
      </div>
    </div>
  )
}
