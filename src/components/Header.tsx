import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-3 p-3 bg-slate-200 justify end'> 
        <Link href="\">Home page</Link>
        <Link href="\about">About page</Link>
        <Link href="contact\">Contact page</Link>
    </div>
  )
}

export default Header