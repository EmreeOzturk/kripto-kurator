import React from 'react'
import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import { londrina } from '@/utils/fonts'
import SocialLogos from '../header/SocialLogos'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center z-10 relative justify-between w-full overflow-hidden mt-24 pb-10 px-8 md:px-0'>
      <div className='flex items-center'>
        <Image src={logo} alt='logo' height={30} sizes='100vw' />
        <h3 className={`${londrina.className} text-2xl ml-2 tracking-wider text-purple-300 `}>
          <b>
            KRIPTO KURATOR
          </b>
        </h3>
      </div>
      <div className='flex-1 flex items-center justify-center gap-10'>
        <p className='text-white text-lg'>
          © 2024 Kripto Kurator
        </p>
        <Link href="/faq" className='text-white text-lg'>
          FAQ
        </Link>
      </div>
      <div className='flex gap-2'>
        <SocialLogos />
      </div>
    </div>
  )
}

export default Footer