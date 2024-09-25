import { siteConfig } from '@/lib/config'
import Link from 'next/link'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='z-10 dark:bg-hexo-black-gray flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 relative'>
      <i className='fas fa-copyright' /> {`${copyrightDate}`}{' '}
      <span>
        <a
          href={siteConfig('LINK')}
          className='underline font-bold text-gray-500 dark:text-gray-300 '>
          {siteConfig('AUTHOR')}
        </a>
        .<br />
        {siteConfig('BEI_AN') && (
          <>
            <i className='fas fa-shield-alt' />{' '}
            <a href='https://beian.miit.gov.cn/' className='mr-2'>
              {siteConfig('BEI_AN')}
            </a>
            <br />
          </>
        )}
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-fire' />
          <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
        </span>
        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users' />{' '}
          <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
        </span>
        <br />
        <span className='text-xs font-serif mr-2'>
          Powered by{' '}
          <a
            href='https://github.com/tangly1024/NotionNext'
            className='underline text-gray-500 dark:text-gray-300'>
            NotionNext {siteConfig('VERSION')}
          </a>
          .
        </span>
        <span className='text-xs font-serif'>
          Custom by{' '}
          <Link
            href='/resume'
            className='underline text-gray-500 dark:text-gray-300'>
            李谢贻
          </Link>
        </span>
      </span>
    </footer>
  )
}

export default Footer
