import Link from 'next/link'
import { SignIcon } from './SignIcon';
export default function LogoBar (props) {
  return (
    <div id='top-wrapper' className='w-full flex items-center '>
          <Link href='/' className='text-md md:text-xl dark:text-gray-200'>
            <SignIcon animate={false} />
          </Link>
    </div>
  );
}
