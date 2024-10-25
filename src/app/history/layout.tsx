import { db } from "@/data/firebase-data";
import History from "@/types/history-type";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { BsFillMortarboardFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const collectionRef = collection(db, 'history');

    const projectQuery = query(
        collectionRef,
        orderBy('index', 'desc')
    );

    const projects = (await getDocs(projectQuery))
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
                        <Link key={index} href={`/history/${e.id}`} className="w-[307.67px] h-[307.67px] max-sm:w-[32.5%] max-sm:h-[122px]">
                            <div className="relative w-full h-full bg-[#262626]">
                                <Image
                                    fill
                                    priority
                                    src={e.images[0]}
                                    quality={100}
                                    style={{ objectFit: "cover" }}
                                    alt="album"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <span className="absolute text-xl top-2 right-2 text-white">
                                    {e.workOrLesson ?
                                        <MdOutlineWork />
                                        :
                                        <BsFillMortarboardFill />
                                    }
                                </span>
                            </div>
                        </Link>
                    )
                })}

            </div>
            {children}
        </>
    )
}