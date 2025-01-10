import { db } from "@/data/firebase-data";
import History from "@/types/history-type";
import Project from "@/types/project-type";
import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { BsFillMortarboardFill } from "react-icons/bs";
import { HiSquare2Stack } from "react-icons/hi2";
import { MdOutlineWork } from "react-icons/md";

export default async function Admin() {

    const collectionRefProjects = collection(db, 'projects');

    const projectQuery = query(
        collectionRefProjects,
        orderBy('index', 'desc')
    );

    const projects = (await getDocs(projectQuery))
        .docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        })) as Project[] | null;

    const collectionRefHistory = collection(db, 'history');

    const historyQuery = query(
        collectionRefHistory,
        orderBy('index', 'desc')
    );

    const history = (await getDocs(historyQuery))
        .docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        })) as History[] | null;;

    return (
        <div className="flex flex-col gap-10">
            <h1>Projects</h1>
            <div className="flex flex-wrap gap-[5px] justify-start items-stretch w-full max-sm:gap-1 max-sm:p-0.5">
                {projects?.map(async (e, index) => {
                    return (
                        <Link key={index} href={`/admin/${'projects-' + e.id}`} className="w-[307.67px] h-[307.67px] max-sm:w-[32.5%] max-sm:h-[122px]">
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

            <h1>History</h1>

            <div className="flex flex-wrap gap-[5px] justify-start items-stretch w-full max-sm:gap-1 max-sm:p-0.5">
                {history?.map(async (e, index) => {
                    return (
                        <Link key={index} href={`/admin/${'projects-' + e.id}`} className="w-[307.67px] h-[307.67px] max-sm:w-[32.5%] max-sm:h-[122px]">
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
        </div>
    )
}