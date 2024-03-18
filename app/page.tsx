import Story from "@/components/sections/Story";
import NFTInfo from "@/components/sections/NFTInfo";
import NFTUtilities from "@/components/sections/NFTUtilities";
import Roadmap from "@/components/sections/Roadmap";
import Partners from "@/components/sections/Partners";
import Team from "@/components/sections/Team";
import SubscribeUs from "@/components/sections/SubscribeUs";
import Hero from "@/components/sections/Hero";

export default function Home() {

  return (
    <main className=" pt-52 overflow-hidden">
      <Hero />
      <Story />
      <NFTInfo />
      <NFTUtilities />
      <Roadmap />
      <Partners />
      <Team />
      <SubscribeUs />
    </main>
  );
}
