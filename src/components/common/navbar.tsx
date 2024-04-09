import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#d1e1ff]/10 rounded-full px-4 py-2 text-white flex-[.5] hidden md:block '>
        <ul className='flex items-center justify-between text-sm whitespace-nowrap gap-4'>
            <li>
                <Link href='/' className="link-hover">Home</Link>
            </li>
            <li>
                <Link href='/' className="link-hover">Services</Link>
            </li>
            <li>
                <Link href='/' className="link-hover">Why Us</Link>
            </li>
            <li>
                <Link href='/' className="link-hover">Our Process</Link>
            </li>
            <li>
                <Link href='/' className="link-hover">Our Work</Link>
            </li>
            <li>
                <Link href='/' className="link-hover">FAQs</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar