import Image from "next/image";
import profile from '../../../../public/3d40e2ddc5683a93f7987f9a4f5b77f7.jpg';
import { MdVerified } from "react-icons/md";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeModeContext } from "@/context/ThemeMode";
import Link from "next/link";

interface DescriptionProps {
    description: {
        title: string;
        links: {
            href: string;
            alt: string;
        }[];
        details: string[];
        stacks: string[];
        date: string;
    };
}

export default function Description({ description }: DescriptionProps) {
    const { isDark } = useContext(ThemeModeContext);

    const { title, links, details, stacks, date } = description;

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
                <div className="flex items-center py-[14px] pl-16 pr-8 gap-[14px]">
                    <div className="flex flex-col items-start text-sm gap-4">
                        <h1 className="text-2xl font-bold">{title}</h1>

                        <div className={`flex flex-col gap-1 ${isDark ? "text-[#C3F1FF]" : "text-[#00376b]"}`}>
                            {links.map(({ href, alt }, i) => <Link href={href} key={i} target="blank">{alt}</Link>)}
                        </div>

                        <p>
                            {details.map((detail, i) => 
                            <>
                                {i != 0 && <><br/><br/></>}
                                {detail}
                            </>)}
                        </p>

                        <p className={`flex flex-col gap-1`}>
                            <span className={`${isDark ? "text-[#e0f1ff]" : "text-[#00376b]"}`}>
                                #{stacks.join('#')}
                            </span>

                        <div className={`"flex justify-start text-xs w-full`}>
                            <p className={isDark? 'text-white/50': 'text-black/50'}>{ date }</p>
                        </div>
                        </p>
                    </div>
                </div>
            </section>

            <footer className={`flex items-center justify-between px-4 text-2xl absolute bottom-0 w-full h-12 border-t  ${isDark ? "border-[#262626]" : "border-[#dbdbdb]"}`}>
                <FaRegHeart />
                <FaRegBookmark />
            </footer>
        </div>
    )
}