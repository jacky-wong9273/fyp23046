import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Activity from "@/components/pages/Activity";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Activity || FYP23046 FYP23046",
};

export default function ActivityPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Activity />
      </main>
      <Footer1 />
    </>
  );
}
