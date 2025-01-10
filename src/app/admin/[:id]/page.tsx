import { db } from "@/data/firebase-data";
import History from "@/types/history-type";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

interface EditPost {
    params: {
        [`:id`]: string;
    };
}
export default async function Edit({ params }: EditPost) {
    const search = params[":id"].split('-');

    const docRef = doc(db, search[0], search[1]);

    const project = (await getDoc(docRef)).data() as History;

    return (
        <div>
            <Link href={'/admin'} className="absolute inset-0 p-10">Back</Link>

            <div>
                <h1>{project.description.title}</h1>
            </div>
        </div>
    )
}