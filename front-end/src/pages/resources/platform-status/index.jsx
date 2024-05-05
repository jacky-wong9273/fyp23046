import Footer1 from "@/components/footer/Footer1";
import Header5 from "@/components/headers/Header5";
import PageTitle from "@/components/resources/platform-status/PageTitle";
import Status from "@/components/resources/platform-status/Status";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Platform Status || FYP23046 FYP23046",
};

export default function PlatformStatusPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header5 />
      <main className="pt-[5.5rem] lg:pt-24">
        <PageTitle />
        <Status />
      </main>
      <Footer1 />
    </>
  );
}
