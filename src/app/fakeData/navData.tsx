import { LiaTableSolid } from "react-icons/lia";
import { LuHistory } from "react-icons/lu";
import { MdOutlinePersonPin } from "react-icons/md";

import capaGrolet from '../../../public/IMG_9436-scaled.jpeg';

import capaTableRise from '../../../public/255737992-387aca69-151e-4c18-868e-b9f5e77e1f1d.png';
import { StaticImageData } from "next/image";

import clare from '../../../public/jovens.png';

import etec from '../../../public/ETEC-Batatais.jpg';

import rpg from '../../../public/15922742b6ef2adc93919d64efed753f.webp';

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
        images: [rpg],
        date: '',
        description: {
            title: 'TableRise 🧙‍♂️',
            links: [
                {
                    href: 'https://github.com/TableRise',
                    alt: '@github/TableRise'
                },
            ],
            details: [
                'TableRise é um projeto criado com a finalidade de ajudar profissionais juniors que ainda não tiveram sua primeira oportunidade a adquirir experiência com um projeto que têm processos e metódos condizentes com o mercado de trabalho e foi idealizado pensando em jogadores apaixonados por RPG, que desejam uma partida dinâmica e divertida, esse é o objetivo principal do projeto, fornecer ferramentas úteis e fáceis de usar para uma campanha de RPG, já existem outros projetos neste sentido, porem o TableRise é pensado para ser uma plataforma super intuitiva e muito aconchegante para campanhas simples ou até mais elaboradas e mais complexas, se seu objetivo é ter uma experiência incrível com seus amigos jogando RPG, TableRise é com certeza o lugar ideal.',
            ],
            stacks: ['Next.js', 'Typescript', 'Express', 'Node.js', 'MongoDB']
        }
    },
    {
        images: [capaGrolet],
        date: '',
        description: {
            title: 'Grolet Patisserie 👨‍🍳',
            links: [
                {
                    href: 'https://github.com/JhonatasAnicezio/Grolet_Patisserie',
                    alt: '@github/grolet_patisserie'
                },
                {
                    href: 'https://grolet-patisserie.vercel.app/',
                    alt: '@deploy/grolet_patisserie'
                },
            ],
            details: [
                'O projeto do site da Grolet Patisserie tem como principais destaques o hub de receitas, onde os visitantes podem explorar e se inspirar com uma variedade de deliciosas receitas exclusivas da patisserie. Além disso, o site oferece um cadastro de clientes, permitindo que os visitantes se inscrevam para receber atualizações, promoções e novidades da Grolet.',
                'O site também conta com diversas formas de contato, como um formulário de contato, e-mail e telefone, facilitando a comunicação dos clientes com a patisserie. Isso permite que os visitantes solicitem encomendas personalizadas, tirem dúvidas ou compartilhem feedbacks.',
                'Em resumo, o projeto do site institucional da Grolet Patisserie proporciona uma experiência online completa, apresentando um hub de receitas para inspirar os visitantes, um cadastro de clientes para manter um relacionamento próximo e diversas opções de contato para uma comunicação eficiente. Tudo isso visando transmitir a excelência e a paixão da Grolet Patisserie em cada interação com seus clientes.'
            ],
            stacks: ['Next.js', 'Typescript', 'Express', 'Node.js', 'MySQL']
        }
    }
];

export const hitory: {
    images: StaticImageData[];
    workOrLesson: boolean;
    date: string;
    description: {
        title: string;
        links: {
            href: string;
            alt: string;
        }[];
        details: string[];
        stacks: string[];
    };
}[] = [
    {
        images: [capaTableRise],
        workOrLesson: true,
        date: '',
        description: {
            title: 'TableRise 🧙‍♂️',
            links: [
                {
                    href: 'https://github.com/TableRise',
                    alt: '@github/TableRise'
                },
            ],
            details: [
                'TableRise é um projeto criado com a finalidade de ajudar profissionais juniors que ainda não tiveram sua primeira oportunidade a adquirir experiência com um projeto que têm processos e metódos condizentes com o mercado de trabalho e foi idealizado pensando em jogadores apaixonados por RPG, que desejam uma partida dinâmica e divertida, esse é o objetivo principal do projeto, fornecer ferramentas úteis e fáceis de usar para uma campanha de RPG, já existem outros projetos neste sentido, porem o TableRise é pensado para ser uma plataforma super intuitiva e muito aconchegante para campanhas simples ou até mais elaboradas e mais complexas, se seu objetivo é ter uma experiência incrível com seus amigos jogando RPG, TableRise é com certeza o lugar ideal.',
            ],
            stacks: ['Next.js', 'Typescript', 'Express', 'Node.js', 'MongoDB']
        }
    },
    {
        images: [clare],
        workOrLesson: true,
        date: '',
        description: {
            title: 'Claretiano - Rede de Educação',
            links: [
                {
                    href: 'https://www.linkedin.com/school/claretiano/mycompany/verification/',
                    alt: '@linkedin/claretiano'
                },
            ],
            details: [
                'Atuo dentro do setor Núcleo Administrativo de Redes e Sistemas, auxiliando e dando manutenção da parte de Redes em geral, dando manutenção a toda infraestrutura do prédio, tanto na parte física quanto a parte de sistemas e servidores.',
            ],
            stacks: ['infraestrutura', 'cloud', 'redes', 'servidores']
        }
    },
    {
        images: [etec],
        workOrLesson: false,
        date: '',
        description: {
            title: 'Desenvolvimento de Sistemas - ETEC',
            links: [
            ],
            details: [
                'Módulos I e II: Programador de Computadores',
                '1. Construir, implementar e manter banco de dados.',
                '2. Desenvolver sistemas para internet. utilizando banco de dados relacional com interface para o usuários no lado servidor e aplicar conhecimentos básicos de protocolos e comunicação de dados.',
                '3. Desenvolver sites produzindo elementos gráficos.',
                '4. Elaborar algoritimos utilizando linguagem de programação em um ambiente de desenvolvimento, aplicando técnicas de levantamento de dados.',
                '5. Operar computadores para desenvolver textos técnicos aplicados à área de informatica, através de pesquisas a análises de informações.',
                '6. Pesquisar dados e informações, utilizando a língua inglesa como um dos instrumentos de acesso.',
                '7. Projetar e documentar sistemas de informação, selecionando linguagens de programação de acordo com as especificidades deprojeto.',
            ],
            stacks: ['Escola', 'Estadual', 'Aluno']
        }
    }
];