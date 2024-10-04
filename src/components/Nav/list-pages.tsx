import { LiaTableSolid } from "react-icons/lia";
import { LuHistory } from "react-icons/lu";
import { MdOutlinePersonPin } from "react-icons/md";

export const pages = [
    {
        href: '/',
        name: 'ABOUT',
        icon: <MdOutlinePersonPin />,
    },
    {
        href: '/projects',
        name: 'PROJETOS',
        icon: <LiaTableSolid />,
    },
    {
        href: '/history',
        name: 'HISTORIA',
        icon: <LuHistory />,
    },
]