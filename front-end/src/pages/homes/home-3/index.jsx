import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Featured from "@/components/homes/home-3/Featured";

import Categories from "@/components/homes/home-3/Categories";
import Collections from "@/components/homes/home-3/Collections";
import Hero from "@/components/homes/home-3/Hero";
import HotBits from "@/components/homes/home-3/HotBits";

import Process from "@/components/homes/home-3/Process";
import Partners from "@/components/common/Partners";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 3 || FYP23046 FYP23046",
};
export default function HomePage3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Hero />
        <Categories />
        <HotBits />
        <Collections />
        <Featured />
        <Process />
        <Partners />
      </main>
      <Footer1 />
    </>
  );
}
