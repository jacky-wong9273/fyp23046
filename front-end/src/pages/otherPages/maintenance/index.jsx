import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Hero from "@/components/pages/maintenance/Hero";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Maintenance || FYP23046 FYP23046",
};

export default function MaintenancePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Hero />
      </main>
      <Footer1 />
    </>
  );
}
