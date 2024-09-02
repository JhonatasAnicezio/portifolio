'use client'
import Darkmode from "@/components/ui/darkmode";
import { ThemeModeContext } from "@/context/ThemeMode";
import { useContext } from "react";
import Header from "./components/header";
import Nav from "./components/Nav";
import { pages } from "@/fakeData/navData";

export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isDark } = useContext(ThemeModeContext);

    return (
        <>
            <div className={`flex min-h-screen items-start ${isDark ? 'text-white bg-black' : 'text-black bg-white'}`}>
                <Darkmode />

                {/* aside */}
                {/* <aside className={`flex justify-center items-center fixed h-full w-[245px] border-r
                    ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`} /> */}
                {/* section */}
                <div className="flex justify-center items-center w-full"> {/* pl-[245px] */}
                    {/* section profile */}
                    <main className="flex flex-col items-start w-[935px] h-full max-sm:w-full">

                        {/* header component profile */}
                        <Header />

                        {/* sections profile */}
                        <section className={`mt-10 max-sm:mt-0 w-full border-t ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`}>
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
            <footer className={`flex items-end pb-5 justify-center text-xs w-full pt-48 ${isDark? "bg-black text-white" : "bg-white text-black"}`}>
                <h1>
                    © 2024 Jhonatas Anicezio
                </h1>
            </footer>
        </>
    );
}