import HeroTitle from "@/components/HeroTitle";
import Image from "next/image";
import Book from "@/public/assets/book.png";
export default function Home() {
  return (
    <main className="h-screen pt-52">
      <div className="tracking-widest">
        <HeroTitle />
      </div>
      <div className="mt-8 text-center text-white text-2xl">
        The source of information for thousands of crypto investors
      </div>
      <div className="h-1/2 w-full relative flex justify-center items-center hover:scale-125 transition-all transform">
        <Image src={Book} alt="book" className="hover:scale-150"  sizes="100vw"/>
      </div>
    </main>
  );
}
