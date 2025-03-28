import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import Announcement from './Announcement'
import { SignIcon } from './SignIcon'
import DarkModeButton from '@/components/DarkModeButton'
import SocialButton from './SocialButton'
import { MenuList } from './MenuList'

/**
 * 侧边栏
 */
export const Header = props => {
  const { notice } = props
  // 评论相关

  return (
    <div className='md:hidden pt-12 flex flex-col gap-3'>
      <Link href='/' className='pb-2 flex justify-center '>
        <SignIcon width={180} animate />
      </Link>
      <div className='font-light text-gray-600 mb-2 flex justify-center dark:text-gray-400'>
        {siteConfig('BIO')}
      </div>
      <div className='font-serif mb-2 flex justify-center '>
        <MenuList {...props} />
      </div>
      {/* 公告栏 */}
      <SocialButton />
      <div className='flex justify-center place-x-1 gap-3'>
        <DarkModeButton className='text-center' />
      </div>
      <Announcement post={notice} />
    </div>
  )
}
