import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Ranking from "@/components/pages/Ranking";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Rankings || FYP23046 FYP23046",
};

export default function RankingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main>
        <Ranking />
      </main>
      <Footer1 />
    </>
  );
}
