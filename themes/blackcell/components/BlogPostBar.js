import { useGlobal } from '@/lib/global'

/**
 * 文章列表上方嵌入
 * @param {*} props
 * @returns
 */
export default function BlogPostBar(props) {
  const { tag, category } = props
  const { locale } = useGlobal()

  const getBar = () => {
    if (tag) {
      return (
        <div className='flex items-center font-bold text-3xl py-8'>
          <i className='mr-2 fas fa-hashtag' />
          {tag}
        </div>
      )
    } else if (category) {
      return (
        <div className='flex items-center text-xl py-8'>
          <i className='mr-2 fas fa-th' />
          {locale.COMMON.CATEGORY}:{category}
        </div>
      )
    } else {
      return <></>
    }
  }
  return <>{getBar()}</>
}
