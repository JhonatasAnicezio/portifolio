import Image from "next/image";
import Link from "next/link";
import profile from "../../../../public/profile.webp";
import { RiLinkM } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { useContext } from "react";
import { ThemeModeContext } from "@/context/ThemeMode";

export default function Header() {

    const { isDark } = useContext(ThemeModeContext);

    return (
        <header className="flex px-[35px] py-[35px]">

            {/* image profile */}
            <div className="flex items-center justify-center px-10">
                <Image className="rounded-full" width={150} height={150} src={profile} alt="bla" />
            </div>

            {/* info profile */}
            <div className="flex flex-col px-10 pt-1 gap-8 items-start ">

                {/* header info profile */}
                <div className="flex gap-2 items-center">
                    <h1 className="flex items-center justify-center text-lg gap-1 pr-4">
                        Jh0natas_
                        <span className="text-[#0095F6]"><MdVerified /></span>
                    </h1>

                    <Link
                        href="./CurriculoJhonatas.pdf"
                        target="blank"
                        className="text-sm rounded-lg font-bold px-5 py-[5px] text-white bg-[#0095F6]"
                    >
                        Baixar CV
                    </Link>
                    {/* <button className={`text-sm rounded-lg font-semibold px-5 py-[5px] ${isDark? "bg-[#363636]" : "bg-[#EFEFEF]"}`}>
                        Enviar Mensagem
                    </button> */}
                </div>

                {/* info profile tag and info */}
                <div className="flex flex-col text-sm">
                    <h2 className="font-bold">Jhonatas Anicezio</h2>
                    <p>👨‍💻 Desenvolvedor FullStack</p>
                    <p>🎓 Engenharia de Software 1 / 8</p>
                    <p>✉️ jhonatasanic@hotmail.com</p>
                    <p className="">🔥 Next.js / MySQL / Node.js / Java / Spring</p>
                    
                    <p className="pt-2">Meus contatos</p>
                    <p className={`${isDark? "text-[#C3F1FF]" : "text-[#00376b]"}`}>
                        <Link className="flex items-center gap-1 font-semibold" target="blank" href={'https://github.com/JhonatasAnicezio'}>
                            <span><RiLinkM /></span>
                            github.com/JhonatasAnicezio
                        </Link>
                    </p>
                    <p className={`${isDark? "text-[#C3F1FF]" : "text-[#00376b]"}`}>
                        <Link className="flex items-center gap-1 font-semibold" target="blank" href={'https://www.linkedin.com/in/jhonatas-anicezio/'}>
                            <span><RiLinkM /></span>
                            linkedin.com/jhonatas-anicezio
                        </Link>
                    </p>
                </div>
            </div>
        </header>
    );
}