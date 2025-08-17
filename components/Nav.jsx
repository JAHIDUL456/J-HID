'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const links=[
    {
        id:1,
        title:'Home',
        url:'/',
    },
    {
        id:2,
        title:'Services',
        url:'/services',
    },
    {
        id:3,
        title:'Resume',
        url:'/resume',
    },
    {
        id:4,
        title:'Contact',
        url:'/contact',
    },
]
const Nav = () => {

    const pathname = usePathname();


  return (
    <div className='hidden md:block'>
        <ul className='flex gap-4'>
            {links.map((link,i)=>{
                return (
                    <li key={i} >
                        <a href={link.url} className={pathname === link.url ? 'active text-green-300 border-b-2' : 'hover:text-green-300'}>{link.title}</a>
                    </li>
                )
            }

            
            )}
        </ul>
    </div>
  )
}

export default Nav