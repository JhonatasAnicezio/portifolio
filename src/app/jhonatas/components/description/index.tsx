import Image from "next/image";
import profile from '../../../../../public/3d40e2ddc5683a93f7987f9a4f5b77f7.jpg';
import { MdVerified } from "react-icons/md";

export default function Description() {
    return (
        <div className="flex flex-col w-[500px] rounded-tr-sm rounded-br-sm">
            <div className="flex w-full border-b border-[#EFEFEF]">
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

            <section className="">
                <div className="flex items-center py-[14px] pl-4 gap-[14px]">
                    <div className="relative w-8 h-8">
                        <Image src={profile} className="rounded-full" quality={100} fill style={{ objectFit: "cover" }} alt="profile" />
                    </div>
                    <div className="flex font-semibold items-center text-sm gap-1">
                        jhonatas
                        <span className="text-[#0095F6] pt-[2px] text-sm"><MdVerified /></span>
                    </div>
                </div>
            </section>
        </div>
    )
}