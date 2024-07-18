import type { Metadata } from "next";
import Header from "./components/header";
import Nav from "./components/Nav";
import { pages } from "../fakeData/navData";

export const metadata: Metadata = {
  title: "Jhonatas",
  description: "Developer FullStack",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen items-start text-white">
      {/* aside */}
      <aside className="flex justify-center items-center fixed h-full w-[245px] border-r border-[#262626]" />
      {/* section */}
      <div className="flex justify-center items-center w-full pl-[245px]">

        {/* section profile */}
        <main className="w-[935px] h-full">

          {/* header component profile */}
          <Header />

          {/* sections profile */}
          <section className="mt-10 w-full border-t border-[#262626]">
            {/* navigation sections profile */}
            <Nav pages={pages} />
            {/* pages sections profile */}
            <div className="w-full h-fit">
              {children}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
