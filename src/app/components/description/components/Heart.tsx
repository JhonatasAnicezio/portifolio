import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

interface PropsHeart {
    id: string;
}
export default function Heart({ id }: PropsHeart) {
    const [isLike, setLike] = useState(false);

    useEffect(() => {
        const like = localStorage.getItem(`${id}`);

        if(like) {
            setLike(JSON.parse(like))
        }
    }, []);

    return (
        <button
            id={id}
            onClick={() => {
                setLike(!isLike)
                localStorage.setItem(`${id}`, JSON.stringify(!isLike));
            }}
        >
            {isLike ?
                <FaHeart className="text-[#FF3040]" />
                :
                <FaRegHeart />
            }
        </button>
    )
}