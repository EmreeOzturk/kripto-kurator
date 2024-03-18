import type { Metadata } from "next";
import { Londrina_Outline, Rhodium_Libre } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TracingBeam } from "@/components/ui/tracing-beam";

const rhodiumType = Rhodium_Libre({ subsets: ["latin"], weight: "400" });
export const londrina = Londrina_Outline({
  subsets: ["latin"],
  weight: ['400']
});


export const metadata: Metadata = {
  title: "Kripto Kurator NFT",
  description: "Kripto Kurator NFT is a collection of 10,000 unique NFTs. Each NFT is a unique piece of art, with a unique story and a unique personality. The collection is designed to be a community-driven project, with the community having a say in the direction of the project. The collection is designed to be a community-driven project, with the community having a say in the direction of the project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={`${rhodiumType.className} `}>
        <BackgroundGradientAnimation
          gradientBackgroundStart="#000"
        >
          <div className="max-w-screen-xl m-auto">
            <TracingBeam >
              <Header />
              {children}
              <Footer />
            </TracingBeam>
          </div>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
