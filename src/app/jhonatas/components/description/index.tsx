import Image from "next/image";
import profile from '../../../../../public/3d40e2ddc5683a93f7987f9a4f5b77f7.jpg';
import { MdVerified } from "react-icons/md";
import { useContext } from "react";
import { ThemeModeContext } from "@/context/ThemeMode";
import Link from "next/link";

interface DescriptionProps {
    description: string;
}

export default function Description({ description }: DescriptionProps) {
    const { isDark } = useContext(ThemeModeContext);

    return (
        <div className={`flex flex-col w-[500px] rounded-tr-sm rounded-br-sm relative ${isDark ? "text-white" : "text-black"}`}>
            <div className={`flex w-full border-b ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`}>
                <header className="flex items-center py-[14px] pl-4 gap-[14px]">
                    <div className="relative w-8 h-8">
                        <Image src={profile} className="rounded-full" quality={100} fill style={{ objectFit: "cover" }} alt="profile" />
                    </div>

                    <div className="flex font-semibold items-center text-sm gap-1">
                        jhonatas
                        <span className="text-[#0095F6] pt-[2px] text-sm"><MdVerified /></span>
                    </div>
                </header>
            </div>

            <section className="flex">
                <div className="flex items-center py-[14px] pl-16 pr-4 gap-[14px]">
                    <div className="flex flex-col items-start text-sm gap-4">
                        <h1>What is Lorem Ipsum?</h1>

                        <div className={`flex flex-col gap-1 ${isDark? "text-[#C3F1FF]" : "text-[#00376b]"}`}>
                            <Link href={'https://github.com/JhonatasAnicezio/Grolet_Patisserie'}>@github/grolet_patisserie</Link>
                            <Link href={'https://grolet-patisserie.vercel.app/'}>@deploy/grolet_patisserie</Link>
                        </div>
                        
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>



                        <p className={`${isDark? "text-[#e0f1ff]" : "text-[#00376b]"}`}>
                            #Next.js#typescript#Express#Node#MySQL
                        </p>
                    </div>
                </div>
            </section>

            <footer className={`absolute bottom-0 w-full h-12 border-t  ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`}>

            </footer>
        </div>
    )
}