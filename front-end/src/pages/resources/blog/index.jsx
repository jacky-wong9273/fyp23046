import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/resources/Blogs";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Blog || FYP23046 FYP23046",
};

export default function BlogPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <Blogs />
      </main>
      <Footer1 />
    </>
  );
}
