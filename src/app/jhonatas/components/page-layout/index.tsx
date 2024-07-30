import Darkmode from "@/components/ui/darkmode";
import { ThemeModeContext } from "@/context/ThemeMode";
import { useContext } from "react";
import Header from "../header";
import Nav from "../Nav";
import { pages } from "@/app/fakeData/navData";

export default function PageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const { isDark } = useContext(ThemeModeContext);

    return (
        <div className={`flex w-full min-h-screen items-start ${isDark ? 'text-white bg-black' : 'text-black bg-white'}`}>
            <Darkmode />

            {/* aside */}
            <aside className={`flex justify-center items-center fixed h-full w-[245px] border-r
        ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`} />
            {/* section */}
            <div className="flex justify-center items-center w-full pl-[245px]">

                {/* section profile */}
                <main className="w-[935px] h-full">

                    {/* header component profile */}
                    <Header />

                    {/* sections profile */}
                    <section className={`mt-10 w-full border-t ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`}>
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