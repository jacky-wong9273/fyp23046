import Footer1 from "@/components/footer/Footer1";

import Header1 from "@/components/headers/Header1";
import Auction from "@/components/homes/common/Auction";
import Collections from "@/components/homes/common/Collections";
import Process from "@/components/homes/common/Process";
import Featured from "@/components/homes/common/Featured";
import CoverFlowSlider from "@/components/homes/home-4/CoverFlowSlider";
import Hero from "@/components/homes/home-4/Hero";

import Partners from "@/components/common/Partners";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 4 || FYP23046 FYP23046",
};
export default function HomePag4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Hero />
        <CoverFlowSlider />
        <Collections />
        <Auction />
        <Process />
        <Featured />
        <Partners />
      </main>
      <Footer1 />
    </>
  );
}
