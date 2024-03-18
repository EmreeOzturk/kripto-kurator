"use client"
import { motion } from 'framer-motion'
import { Spotlight } from "@/components/ui/Spotlight";
import Twitter from '@/svg/twitter.svg'
import Avatar from '@/svg/avatar.svg'

const Team = () => {
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
            className="flex flex-col  items-center justify-center mt-20">

            {/* <div className=" w-full rounded-md flex md:items-center md:justify-center bg-black/90 antialiased bg-grid-white/[0.02] relative overflow-hidden"> */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h2 className="text-6xl font-bold text-purple-400 text-center mb-5">
                    Meet the Team
                </h2>
                <p className=" w-3/4 text-white text-center m-auto text-xl tracking-wide mb-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum quasi quaerat sint sapiente officiis eos optio doloribus alias, deleniti commodi necessitatibus accusantium voluptates mollitia. Illo rem ullam asperiores commodi.
                </p>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Avatar />
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-purple-400">
                                CEO
                            </h3>
                            <div className="flex justify-center items-center">
                                <Twitter />
                                <p className="text-white text-lg">
                                    John Doe
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Avatar />
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-purple-400">
                                CEO
                            </h3>
                            <div className="flex justify-center items-center">
                                <Twitter />
                                <p className="text-white text-lg">
                                    John Doe
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Avatar />
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-purple-400">
                                CEO
                            </h3>
                            <div className="flex justify-center items-center">
                                <Twitter />
                                <p className="text-white text-lg">
                                    John Doe
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Avatar />
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-purple-400">
                                CEO
                            </h3>
                            <div className="flex justify-center items-center">
                                <Twitter />
                                <p className="text-white text-lg">
                                    John Doe
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Avatar />
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-purple-400">
                                CEO
                            </h3>
                            <div className="flex justify-center items-center">
                                <Twitter />
                                <p className="text-white text-lg">
                                    John Doe
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </motion.div>
    )
}

export default Team