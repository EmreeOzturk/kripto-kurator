import Story from "@/components/Story";
import NFTInfo from "@/components/NFTInfo";
import NFTUtilities from "@/components/NFTUtilities";
import Roadmap from "@/components/Roadmap";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import SubscribeUs from "@/components/SubscribeUs";
import Hero from "@/components/Hero";

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
