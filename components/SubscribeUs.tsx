"use client"

import Image from 'next/image'
import Book from '../public/assets/book.png'
import { motion } from 'framer-motion'
const SubscribeUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 300 }}
            transition={{ duration: 1 }}
            whileInView={
                {
                    opacity: 1,
                    y: 0,
                }
            }
            className="flex items-center justify-center mt-20  ">
            <div className="flex-1">
                <h2 className="text-6xl font-bold text-purple-400">
                    Become a Part of Community Now !
                </h2>

                <p className="text-white text-xl tracking-wider mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
                </p>
            </div>
            <div className="w-96 ">
                <Image src={Book} alt="book" sizes="100vw" height={375} />
            </div>
        </motion.div>
    )
}

export default SubscribeUs