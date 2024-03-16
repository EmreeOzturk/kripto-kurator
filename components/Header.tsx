import React from 'react'
import { londrina } from "@/app/layout";
import Image from 'next/image';
import logo from '@/public/assets/logo.png'
import Insta from '@/svg/insta.svg'
import Substack from '@/svg/substack.svg'
import Twitter from '@/svg/twitter.svg'
import Discord from '@/svg/discord.svg'
const Header = () => {
    return (
        <div className='flex items-center justify-center pt-6 '>
            <div className='flex'>
                <ul className='flex gap-2 text-purple-300 '>
                    <li >News</li>
                    <li>Collection</li>
                    <li>Roadmap</li>
                    <li>Team</li>
                </ul>
            </div>
            <div className='flex justify-center items-center flex-1  gap-2'>
                <div className='h-16 w-16 rounded-full relative'>
                    <Image src={logo} alt='logo' fill />
                </div>
                <h1 className={`${londrina.className} text-6xl tracking-wider text-purple-300 font-bold`}>
                    KRIPTO KURATOR
                </h1>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Connect Wallet
                    </span>
                </button>
                <div className='p-1 border-2 border-purple-300 rounded-full'>
                    <Insta />
                </div>
                <div className='p-1 border-2 border-purple-300 rounded-full'>
                    <Substack />
                </div>
                <div className='p-1 border-2 border-purple-300 rounded-full'>
                    <Twitter />
                </div>
                <div className='p-1 border-2 border-purple-300 rounded-full'>
                    <Discord />
                </div>
            </div>
        </div>
    )
}

export default Header