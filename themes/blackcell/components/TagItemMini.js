import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200
        mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white
         ${selected
        ? 'text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900'
        : `hover:shadow-xl dark:border-gray-400 bg-gray-800 text-white dark:bg-gray-200 `}` }>

      <div className='font-light dark:text-black'>{selected && <i className='mr-1 fas fa-tag'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>

    </Link>
  )
}

export default TagItemMini
