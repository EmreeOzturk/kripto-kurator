"use client"
import Image from 'next/image'
import StoryImage from '@/public/assets/1.png'
import { motion } from 'framer-motion'

const Story = () => {

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
            className=" flex flex-col md:flex-row items-center justify-center gap-10 md:px-12 px-8">
            <motion.div
                initial={{ opacity: 0, x: -300 }}
                transition={{ duration: 1 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}

                className="flex flex-col md:w-1/2 justify-start gap-8">
                <h2 className=" text-3xl md:text-6xl font-bold text-purple-400">
                    Kripto Kurator Collection Story
                </h2>
                <p className="text-white text-md md:text-xl tracking-wider ">
                    Lorem ipsum dolor sit amet consectetur, <b className="text-blue-400/80">adipisicing</b> elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
                    Lorem ipsum dolor sit amet consectetur,  <b className="text-blue-400/80">adipisicing</b> elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
                    Lorem ipsum dolor sit amet consectetur,  <b className="text-blue-400/80">adipisicing</b> elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 300 }}
                transition={{ duration: 1 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                className='hidden md:flex'
            >
                <Image src={StoryImage} alt="story" sizes="100vw" height={
                    600
                } />
            </motion.div>

        </motion.div>
    )
}

export default Story