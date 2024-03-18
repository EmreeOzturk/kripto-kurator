"use client"
import { motion } from 'framer-motion'
const NFTInfo = () => {
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

            className="flex flex-col items-center justify-center gap-10 mt-20">
            <h2 className="text-6xl font-bold text-purple-400">
                What is Kripto Kurator NFT?
            </h2>
            <p className="text-white text-xl tracking-wider text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
            </p>
        </motion.div>
    )
}

export default NFTInfo