import Link from 'next/link'
/**
 * 支持下拉二级的菜单
 * @param {*} param0
 * @returns
 */
export const MenuItemDrop = ({ link }) => {
  return (
    <div className='text-center'>
      <Link href={link?.href} target={link?.target}>
        {link?.icon && <i className={link?.icon} />} {link?.name}
      </Link>
    </div>
  )
}
