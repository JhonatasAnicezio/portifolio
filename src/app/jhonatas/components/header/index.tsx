import Image from "next/image";
import Link from "next/link";
import mitsk from "../../../../../public/3d40e2ddc5683a93f7987f9a4f5b77f7.jpg";
import { RiLinkM } from "react-icons/ri";
import { MdVerified } from "react-icons/md";

export default function Header() {
    return (
        <header className="flex px-[35px] py-[35px]">

            {/* image profile */}
            <div className="flex items-center justify-center px-10">
                <Image className="rounded-full" width={150} height={150} src={mitsk} alt="bla" />
            </div>

            {/* info profile */}
            <div className="flex flex-col px-10 pt-1 gap-8 items-start ">

                {/* header info profile */}
                <div className="flex gap-2 items-center">
                    <h1 className="flex items-center justify-center text-lg gap-1 pr-4">
                        cedricgrolet 
                        <span className="text-[#0095F6]"><MdVerified /></span>
                    </h1>

                    <button className="text-sm rounded-lg font-bold px-5 py-[5px] bg-[#0095F6]">
                        Baixar CV
                    </button>
                    <button className="text-sm rounded-lg font-semibold px-5 py-[5px] bg-[#363636]">
                        Enviar Mensagem
                    </button>
                </div>

                {/* info profile tag and info */}
                <div className="flex flex-col text-sm">
                    <h2 className="font-bold">Jhonatas Anicezio</h2>
                    <p>Developer FullStack</p>
                    <p>Next.js / MySQL / Node.js / Java / Spring</p>
                    <p>Meus contato</p>
                    <p className="text-[#C3F1FF]">
                        <Link className="flex items-center gap-1 font-semibold" target="blank" href={'https://github.com/JhonatasAnicezio'}>
                            <span><RiLinkM /></span>
                            github.com/JhonatasAnicezio
                        </Link>
                    </p>
                    <p className="text-[#C3F1FF]">
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