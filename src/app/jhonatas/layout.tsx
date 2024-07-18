import type { Metadata } from "next";
import { LuHistory } from "react-icons/lu";
import { LiaTableSolid } from "react-icons/lia";
import { MdOutlinePersonPin, MdVerified } from "react-icons/md";
import Link from "next/link";
import { RiLinkM } from "react-icons/ri";
import mitsk from "../../../public/3d40e2ddc5683a93f7987f9a4f5b77f7.jpg";
import Image from "next/image";

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
      <main className="flex w-full h-screen items-start text-white">
      <div className="flex justify-center items-center fixed h-full w-[245px] border-r bg-[#262626] border-[#262626]" />
      {/* section */}
      <div className="flex justify-center items-center w-full pl-[245px]">
        
        {/* section profile */}
        <div className="w-[935px] h-full">
          
          {/* component profile */}
          <div className="flex px-[35px] py-[35px]">

            {/* image profile */}
            <div className="flex items-center justify-center px-10">
              <Image className="rounded-full" width={150} height={150} src={mitsk} alt="bla" />
            </div>

            {/* info profile */}
            <div className="flex flex-col px-10 pt-1 gap-8 items-start ">

              {/* header info profile */}
              <div className="flex gap-2 items-center">
                <h1 className="flex items-center justify-center text-lg gap-1 pr-4">cedricgrolet <span className="text-[#0095F6]"><MdVerified /></span></h1>
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
          </div>

          {/* sections profile */}
          <div className="mt-10 w-full border-t border-[#262626]">
            {/* navigation sections profile */}
            <div className="flex items-center justify-center gap-14 text-[13px] font-semibold">
              <Link href={'/jhonatas'} className="flex items-center gap-1 py-4 border-t border-white">
                <span><MdOutlinePersonPin /></span>
                ABOUT
              </Link>
              <Link href={'/jhonatas/projects'} className="flex items-center gap-1 py-4 border-t border-white">
                <span><LiaTableSolid /></span>
                PROJETOS
              </Link>
              <Link href={'/jhonatas/history'} className="flex items-center gap-1 py-4 border-t border-white">
                <span><LuHistory /></span>
                HISTORIA
              </Link>
            </div>

            {/* pages sections profile */}
            <div className="w-full h-fit">
              {children}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
