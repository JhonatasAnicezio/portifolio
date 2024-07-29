import { LiaTableSolid } from "react-icons/lia";
import { LuHistory } from "react-icons/lu";
import { MdOutlinePersonPin } from "react-icons/md";

import album from '../../../public/0060253715653_600.jpg';
import album1 from '../../../public/16-Kendrick-Lamar-album.jpg';
import album2 from '../../../public/1_kendrick_lamar_novo_album-7960773.jpg';
import album3 from '../../../public/71tdaojeUkL._UF1000,1000_QL80_.jpg';

export const pages = [
  {
      href: '',
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

export const projects = [
    {
        images: [album, album1, album2, album3],
    },
    {
        images: [album1, album2, album3],
    },
    {
        images: [album2],
    },
]

export const hitory = [
    {
        images: [album3],
    },
    {
        images: [album2],
    },
]