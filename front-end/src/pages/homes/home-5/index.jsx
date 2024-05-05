import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Hero from "@/components/homes/home-5/Hero";
import Process from "@/components/homes/home-5/Process";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "FYP23046",
};
export default function HomePage5() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Hero />
        <Process />
      </main>
      <Footer1 />
    </>
  );
}
