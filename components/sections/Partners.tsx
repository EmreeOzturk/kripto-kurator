"use client"
import { motion } from 'framer-motion'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from '@/consts'
const Partners = () => {
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
            className=" mt-20 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <h2 className="mb-5">
                <span className="text-6xl font-bold text-purple-400 ">
                    Our Partners
                </span>
            </h2>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="fast"
            />
        </motion.div>
    )
}

export default Partners