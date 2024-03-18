"use client"

import { motion } from 'framer-motion'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "@/consts";

const NFTUtilities = () => {
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
            className="mt-20 z-10  relative">
            <h2 className="text-6xl font-bold text-purple-400 text-center mb-10">
                NFT Utilities
            </h2>
            <BentoGrid >
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </motion.div>
    )
}

export default NFTUtilities