"use client"
import HeroTitle from "@/components/HeroTitle";
import Image from "next/image";
import Book from "@/public/assets/book.png";
import { motion } from "framer-motion"
import Story from "@/public/assets/1.png";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials, projects, items } from "@/consts";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import Twitter from '@/svg/twitter.svg'
import Avatar from '@/svg/avatar.svg'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {

  return (
    <main className=" pt-52 overflow-hidden">
      <div className="h-[80vh]">
        <div className="tracking-widest">
          <HeroTitle />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white text-2xl mt-8"
        >
          The source of information for thousands of crypto investors
        </motion.div>
        <div className="h-1/2  mt-12 w-full relative flex justify-center items-center ">
          <Image src={Book} alt="book" sizes="100vw" height={375} />
        </div>
      </div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        transition={{ duration: 1 }}
        whileInView={
          {
            opacity: 1,
            y: 0,
          }
        }
        className=" flex items-center justify-center gap-10 px-12">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          transition={{ duration: 1 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}

          className="flex flex-col w-1/2 justify-start gap-8">
          <h2 className="text-6xl font-bold text-purple-400">
            Kripto Kurator Collection Story
          </h2>
          <p className="text-white text-xl tracking-wider ">
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
        >
          <Image src={Story} alt="story" sizes="100vw" height={600} />
        </motion.div>
      </motion.div>

      {/* NFT info Section */}
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

      {/* NFT Utilities Section */}
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

      {/* Roadmap Section */}
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

      {/* Partners Section */}
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

      {/* Team Section */}
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

      {/* Subscribe Us Section */}
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
    </main>
  );
}
