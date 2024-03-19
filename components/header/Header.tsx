"use client"
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/logo.png'
import SocialLogos from './SocialLogos';
import ConnectWalletButton from './ConnectWalletButton';
import KriptoKurator from './KriptoKurator';
import Link from 'next/link';
import HeaderMenu from './HeaderMenu';
import Menu from "@/svg/menu.svg";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='flex items-center justify-center p-4 mt-4 rounded-xl
            backdrop-blur-3xl w-[87%] m-auto bg-gray-900/30 z-20 fixed top-0 right-0 left-0' >
            <div className='hidden md:flex'>
                <HeaderMenu />
            </div>
            <div className='flex justify-center items-center  flex-1'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image className='hidden md:flex' src={logo} alt='logo' height={50} sizes='100vw' />
                    <Image src={logo} className='flex md:hidden' alt='logo' height={30} sizes='100vw' />
                    <KriptoKurator />
                </Link>
            </div>
            <div className='md:flex hidden items-center justify-center gap-2 '>
                <ConnectWalletButton />
                <SocialLogos />
            </div>
            <div className='flex w-6 md:hidden'>
                <button className='w-full' onClick={
                    () => setIsOpen(!isOpen)
                }>
                    <Menu />
                </button >
            </div>


            {isOpen &&
                <div className='flex flex-col gap-2 absolute top-16  bg-gray-900 p-4 w-full mt-2 rounded-xl'>
                    <ConnectWalletButton />
                    <HeaderMenu />
                    <SocialLogos />
                </div>
            }
        </header >
    )
}

export default Header