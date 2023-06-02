import React from "react";
import LoginForm from "@/components/modules/auth/LoginForm";

function Index() {
  return (
    <section className={"w-full h-[100vh]"}>
      <LoginForm />
    </section>
  );
}

Index.getInitialProps = async (ctx: { pathname: string }) => {
  const pathname = ctx.pathname;
  return { pathname };
};

export default Index;