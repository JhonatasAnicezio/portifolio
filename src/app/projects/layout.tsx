import { db } from "@/data/firebase-data";
import Project from "@/types/project-type";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { HiSquare2Stack } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const collectionRef = collection(db, 'projects');

    const projectQuery = query(
        collectionRef,
        orderBy('index', 'desc')
    );

    const projects = (await getDocs(projectQuery))
        .docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        })) as Project[] | null;;

    if (!projects) {
        return null;
    }

    return (
        <>
            <div className="flex flex-wrap gap-[5px] justify-start items-stretch w-full max-sm:gap-1 max-sm:p-0.5">
                {projects.map(async (e, index) => {
                    return (
                        <Link key={index} href={`/projects/${e.id}`} className="w-[307.67px] h-[307.67px] max-sm:w-[32.5%] max-sm:h-[122px]">
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
                                    {projects[index].images.length > 1 &&
                                        <HiSquare2Stack />
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