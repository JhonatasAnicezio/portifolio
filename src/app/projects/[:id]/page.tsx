import Description from "@/components/description";
import Carousel from "@/components/ui/carousel";
import { db } from "@/data/firebase-data";
import Project from "@/types/project-type";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface PostPageProps {
    params: {
        [`:id`]: string;
    };
}

export default async function Posts({ params }: PostPageProps) {
    // GET PROJECT
    // -- //
    const docRef = doc(db, 'projects', params[':id']);

    const project = (await getDoc(docRef)).data() as Project;

    const collectionRef = collection(db, 'projects');
    // -- //

    //função unica

    // -- //
    const projectsIds = (await getDocs(collectionRef))
        .docs.map(doc => doc.id);
        
    const { previousId, nextId } = projectsIds.reduce((acc: {
        previousId: string | null, nextId: string | null
    }, curr, index, array) => {
        if (curr === params[':id']) {

            acc.previousId = array[index - 1] || null;
            acc.nextId = array[index + 1] || null;
        }
        return acc;
    }, { previousId: null, nextId: null });
    // -- //


    if (!project || !projectsIds) {
        redirect('/projects');
    }

    return (
        <div className="flex h-screen w-full items-center justify-center fixed left-0 top-0">
            <Link className="absolute h-screen w-full z-10 bg-black opacity-50 cursor-default" href={'/projects'} />

            <div className="w-[1413px] h-[913px] flex z-30 relative">

                <div className="w-[913px] h-[913px] relative bg-[#252525] max-sm:w-full max-sm:h-[400px] z-30">
                    <Carousel slides={project.images} />
                </div>

                <Description description={project.description} />

                <Link href={`/projects/${nextId}`}
                    className={`flex items-center justify-center absolute z-20 top-1/2 right-[-12rem] w-8 h-8 rounded-full bg-white text-black
                  ${!nextId && 'hidden'}
                `}
                >
                    <ChevronRight />
                </Link>
                <Link href={`/projects/${previousId}`}
                    className={`flex items-center justify-center absolute z-20 top-1/2 left-[-12rem] w-8 h-8 rounded-full bg-white text-black
                  ${!previousId && 'hidden'}
                `}
                >
                    <ChevronLeft />
                </Link>
            </div>

        </div>
    )
}