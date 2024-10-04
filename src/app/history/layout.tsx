import { db } from "@/data/firebase-data";
import History from "@/types/history-type";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const collectionRef = collection(db, 'history');

    const projects = (await getDocs(collectionRef))
        .docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        })) as History[] | null;;

    if (!projects) {
        return null;
    }

    return (
        <>
            <div className="flex flex-wrap gap-[5px] justify-start items-stretch w-full max-sm:gap-1 max-sm:p-0.5">
                {projects.map(async (e, index) => {
                    return (
                        <Link href={`/history/${e.id}`} className="w-[307.67px] h-[307.67px] max-sm:w-[32.5%] max-sm:h-[122px]">
                            <div className="relative w-full h-full bg-[#262626]">
                                {/* <span className="absolute text-xl top-2 right-2 z-50 text-white">
                                    {e.workOrLesson ?
                                        <MdOutlineWork />
                                        :
                                        <BsFillMortarboardFill />
                                    }
                                </span> */}
                                <Image
                                    fill
                                    priority
                                    src={e.images[0]}
                                    quality={100}
                                    style={{ objectFit: "cover" }}
                                    alt="album"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </Link>
                    )
                })}

            </div>
            {children}
        </>
    )
}