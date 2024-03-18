"use client"
import { motion } from 'framer-motion'
import { projects } from '@/consts'
import { HoverEffect } from '../ui/card-hover-effect'
const Roadmap = () => {
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
            className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-6xl font-bold text-purple-400">
                Roadmap
            </h2>
            <HoverEffect items={projects} />
        </motion.div>
    )
}

export default Roadmap