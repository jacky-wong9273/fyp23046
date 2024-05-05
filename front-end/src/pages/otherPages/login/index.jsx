import Login from "@/components/pages/Login";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Login || FYP23046 FYP23046",
};

export default function LoginPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Login />
    </>
  );
}
