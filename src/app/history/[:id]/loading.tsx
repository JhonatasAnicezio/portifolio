'use client'
import Heart from "@/components/description/components/Heart";
import Save from "@/components/description/components/Save";
import { ThemeModeContext } from "@/context/ThemeMode";
import Link from "next/link";
import { useContext } from "react";

export default function Loading() {
    const { isDark } = useContext(ThemeModeContext);

    const arr = Array(8).fill(null);

    return (
        <div className="flex h-screen w-full items-center justify-center fixed left-0 top-0">
            <Link className="absolute h-screen w-full bg-black opacity-50 cursor-default" href={'/projects'} />

            <div className="w-[1413px] h-[913px] flex relative">

                <div className="w-[913px] h-[913px] relative bg-[#a8a8a8] max-sm:w-full max-sm:h-[400px]" />

                <div className={`flex flex-col w-[500px] rounded-tr-sm rounded-br-sm relative ${isDark ? "text-white bg-black" : "text-black bg-white"}`}>
                    <div className={`flex w-full border-b ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`}>
                        <header className="flex items-center py-[14px] pl-4 gap-[14px]">
                            <div className={`relative w-8 h-8 rounded-full bg-slate-400 ${isDark ? "bg-[#202020]" : "bg-[#d3d3d3]"}`} />

                            <div className={`flex font-semibold items-center text-sm gap-1 text-transparent bg-[#202020] rounded-full ${isDark ? "bg-[#202020]" : "bg-[#d3d3d3]"}`}>
                                ahonatas dasad
                            </div>
                        </header>
                    </div>

                    <section className="flex w-full">
                        <div className="flex items-center py-[14px] pl-16 pr-8 gap-[14px] w-full">
                            <div className="flex flex-col items-start text-sm gap-4 w-full">
                                <h1 className={`text-transparent text-xs font-bold rounded-full bg-white ${isDark ? "bg-[#202020]" : "bg-[#d3d3d3]"}`}>titulo inventado blabla</h1>

                                <div className={`flex flex-col gap-1 text-xs text-transparent rounded-full ${isDark ? "bg-[#C3F1FF]" : "bg-[#00376b]"}`}>
                                    <Link href={'/'} target="blank">lalaasd,lwqçla</Link>
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    {arr.map((_, index) => (
                                        <div className={`h-[12px] rounded-full ${isDark ? "bg-[#202020]" : "bg-[#d3d3d3]"}`} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className={`flex items-center justify-between px-4 text-2xl absolute bottom-0 w-full h-12 border-t  ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`}>
                        <Heart id={'heart'} />
                        <Save id={'save'} />
                    </footer>
                </div>
            </div>

        </div>
    )
}