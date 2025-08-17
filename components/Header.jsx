import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';

const Header = () => {
  return (
    <div className='py-8 xl:py-10 text-white'>
        <div className='mx-auto container flex items-center justify-between'>
            <Link href="/">
            <h1 className='text-2xl font-bold'>J@HID <span className='text-green-300'>.</span> </h1> 
            </Link>
            <div className='flex items-center  gap-16 '>
            <Nav />
            <Link href="/"><Button className='hidden md:block border-2 border-blue-400 text-center'>Hire me</Button></Link>
            </div>

            {/* this line is for the mobile view */}
            <div className='md:hidden'>
                <h1>mobile</h1>
            </div>
        </div>

    </div>
  )
}

export default Header