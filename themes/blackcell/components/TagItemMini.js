import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref>
      <Badge variant='outline'>
        {selected && <i className='mr-1 fas fa-tag' />}{' '}
        {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
      </Badge>
    </Link>
  )
}

export default TagItemMini
