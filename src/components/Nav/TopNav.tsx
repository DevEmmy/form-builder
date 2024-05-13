import React from 'react'
import { NavItems } from '../interfaces'
import Link from 'next/link'



const TopNav = () => {
    const navItems: NavItems[] = [
        {
            title: "Dashboard",
            link: "/dashboard"
        },
        {
            title: "Builder",
            link: "/builder"
        },
        {
            title: "Responses",
            link: "/responses"
        },
    ]
    return (
        <div className='flex-center justify-between py-5 px-[5%] bg-primary1 text-white'>
            <div className='flex divide-x pr-10 gap-10'>
                <div className='font-[600] text-[20px]'>
                    Formify.
                </div>

                <div className='flex-center gap-10 pl-10'>
                    {
                        navItems.map((item: NavItems, i: number) => {
                            return (
                                <Link href={item.link} className='hover:underline'>
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex-center gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg" alt="" className='size-[60px] rounded-full' />

                <div>
                    <p className='text-[18px] font-[500]'>Emmanuel Olaosebikan</p>
                    <p className='text-sm'>eolaosebikan60@gmail.com</p>
                </div>
                
            </div>
        </div>
    )
}

export default TopNav