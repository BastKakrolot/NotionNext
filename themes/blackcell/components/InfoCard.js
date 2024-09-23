import LazyImage from '@/components/LazyImage'
import Router from 'next/router'
import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'
import { SignIcon } from './SignIcon'
import MenuGroupCard from './MenuGroupCard'

const InfoCard = (props) => {
  const { siteInfo } = props
  return <div id='info-card' className='py-4'>
    <div className='items-center justify-center'>
        <div className='hover:scale-105 transform duration-200 cursor-pointer flex justify-center' onClick={ () => { Router.push('/about') }}>
            <LazyImage src={siteInfo?.icon} className='rounded-full' width={120} alt={siteConfig('AUTHOR')}/>
         </div>
        {/* <div className='text-xl py-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-300'>{siteConfig('AUTHOR')}</div> */}
        <div className='py-5 flex justify-center '>
          <SignIcon width={180} animate />
        </div>
        <div className='font-light text-gray-600 mb-2 flex justify-center dark:text-gray-400'>{siteConfig('BIO')}</div>
        <SocialButton/>
        <MenuGroupCard {...props} />
    </div>
  </div>
}

export default InfoCard
