"use client"
import Image from 'next/image'
import Book from '@/public/assets/book.png'
import { motion } from 'framer-motion'
import HeroTitle from '../HeroTitle'
const Hero = () => {
    return (
        <div className="h-[80vh]">
            <div className="tracking-widest">
                <HeroTitle />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center text-white text-lg md:text-2xl mt-8 px-6 md:px-0 tracking-wide font-light"
            >
                The source of information for thousands of crypto investors
            </motion.div>
            <div className="hidden md:flex h-1/2 mt-12 w-full relative justify-center items-center ">
                <Image src={Book} alt="book" sizes="100vw" height={375} />
            </div>
            <div className="md:hidden  h-1/2 mt-12 w-full relative flex justify-center items-center ">
                <Image src={Book} alt="book" sizes="100vw" height={250} />
            </div>
        </div>
    )
}

export default Hero