import React from 'react'
import Link from 'next/link'


const NavLink = ({href, title}) => {
  return (
    <Link
    href="/"
    className='block py-2 pl-3 pr-4 text-[white] sm:text-xl rounded md:p-0'
    >
        {title}
    </Link>
  )
}

export default NavLink