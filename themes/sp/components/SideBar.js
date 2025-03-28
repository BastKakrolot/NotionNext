import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import Announcement from './Announcement'
import { SignIcon } from './SignIcon'
import DarkModeButton from '@/components/DarkModeButton'
import SocialButton from './SocialButton'
import { MenuList } from './MenuList'
import { useGlobal } from '@/lib/global'

/**
 * 侧边栏
 */
export const SideBar = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
  const { notice } = props
  const { locale } = useGlobal()
  // 评论相关

  return (
    <>
      <Link href='/' className='pb-2 flex justify-center '>
        <SignIcon width={180} animate />
      </Link>
      <div className='font-light text-gray-600 mb-2 flex justify-center dark:text-gray-400'>
        {siteConfig('BIO')}
      </div>
      {/* 公告栏 */}
      <Announcement post={notice} />
      <div className='md:fixed bottom-16 w-64  flex flex-col gap-4 overflow-hidden break-words font-thin'>
        <MenuList {...props} />
        <SocialButton />
        <div className='flex justify-center place-items-center gap-3'>
          <DarkModeButton className='text-center' />
          <div
            title={locale.POST.TOP}
            className='cursor-pointer p-2 text-center'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className='fas fa-angle-up text-2xl' />
          </div>
        </div>
        <div className='md:p-0 text-center flex flex-col gap-1 text-xs'>
          <div>
            &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights
            reserved.
          </div>
          <div>
            {siteConfig('BEI_AN') && (
              <a
                href='https://beian.miit.gov.cn/'
                className='text-black dark:text-gray-200 no-underline hover:underline'>
                {siteConfig('BEI_AN')}{' '}
              </a>
            )}
          </div>
          <div>
            <span className='dark:text-gray-200 no-underline'>
              Powered by
              <a
                href='https://github.com/tangly1024/NotionNext'
                className=' hover:underline'>
                {' '}
                NotionNext {siteConfig('VERSION')}{' '}
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
