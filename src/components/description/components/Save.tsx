import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

interface PropsSave {
    id: string;
}
export default function Save({ id }: PropsSave) {
    const [isSave, setSave] = useState(false);

    useEffect(() => {
        const like = localStorage.getItem(`${id}-save`);

        if(like) {
            setSave(JSON.parse(like))
        }
    }, []);

    return (
        <button
            id={id}
            onClick={() => {
                setSave(!isSave)
                localStorage.setItem(`${id}-save`, JSON.stringify(!isSave));
            }}
        >
            {isSave ?
                <FaBookmark className="text-white" />
                :
                <FaRegBookmark />
            }
        </button>
    )
}