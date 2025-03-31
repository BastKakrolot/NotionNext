import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'

export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative w-full p-6 md:hidden'>
      <div className='md:p-0 text-center flex flex-col gap-1 text-xs'>
        <SocialButton />
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
    </footer>
  )
}
