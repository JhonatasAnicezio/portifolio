import { LiaTableSolid } from "react-icons/lia";
import { LuHistory } from "react-icons/lu";
import { MdOutlinePersonPin } from "react-icons/md";

import capaGrolet from '../../public/IMG_9436-scaled.jpeg';
import g1 from '../../public/g1.webp';
import g2 from '../../public/g2.webp';
import g3 from '../../public/g3.webp';
import g4 from '../../public/g4.webp';

import capaTableRise from '../../public/table-rise.png';
import { StaticImageData } from "next/image";

import clare from '../../public/Claretiano 02.jpg';
import clare2 from '../../public/t5fUTsCg_400x400.png';
import clare3 from '../../public/jovens.png';

import etec from '../../public/etec.png';

import rpg from '../../public/15922742b6ef2adc93919d64efed753f.webp';

import estacio from '../../public/esta.webp';

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

export const projects: {
    images: StaticImageData[];
    description: {
        title: string;
        links: {
            href: string;
            alt: string;
        }[];
        details: string[];
        stacks: string[];
        date: string;
    };
}[] = [
    {
        images: [rpg],
        description: {
            date: 'mai de 2024 · o momento',
            title: 'TableRise 🧙',
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
        images: [capaGrolet, g1, g2, g3, g4],
        description: {
            date: 'dez de 2023 · abr 2024',
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
            stacks: ['Typescript', 'Next.js', 'Node.js', 'Nest', 'PostgreSQL']
        }
    }
];

export const hitory: {
    images: StaticImageData[];
    workOrLesson: boolean;
    description: {
        date: string;
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
        description: {
            date: 'mai de 2024 · o momento',
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
        images: [estacio],
        workOrLesson: false,
        description: {
            date: 'jan de 2024 · o momento',
            title: 'Engenharia de Software 👨‍🎓',
            links: [
                {
                    href: 'https://estacio.br/cursos/graduacao/engenharia-de-software?utm_campaign=PMax%7CGraduacao%7CPresencial%7CGoogle(GDN)%7CPerformanceMax%7CNacional_ContaPresencial&gad_source=1&gclid=Cj0KCQjwqdqvBhCPARIsANrmZhNvuiMNO_K1VoX8uA5P1wjwZUESdduA8N1YU4apSl6RY2B3oIyFjMUaAsCTEALw_wcB&gclsrc=aw.ds',
                    alt: '@estacio/EngenhariaSoftware'
                },
            ],
            details: [
                'Atualmente, estou cursando Engenharia de Software, um passo fundamental para meu crescimento na área de desenvolvimento de sistemas. O curso tem proporcionado uma base sólida tanto nos princípios teóricos quanto práticos do desenvolvimento de software, abrangendo desde a concepção e design até a implementação e manutenção de sistemas complexos.',
                'Através do curso, tenho me aprofundado em tópicos essenciais como algoritmos, estruturas de dados, arquitetura de software, bancos de dados, bem como metodologias de desenvolvimento modernas, como Agile e DevOps. Essa formação tem sido crucial para o aprimoramento das minhas habilidades técnicas, além de me proporcionar uma visão mais ampla e estratégica sobre como desenvolver soluções de software escaláveis, seguras e eficientes.',
                'O conhecimento adquirido está diretamente alinhado com minha atuação profissional, me permitindo aplicar práticas de engenharia de software que garantem qualidade e confiabilidade no desenvolvimento de projetos. Com isso, estou constantemente aprimorando minhas competências e me tornando um profissional mais completo e preparado para os desafios do mercado de tecnologia, onde a inovação e a busca por soluções de alto desempenho são essenciais.'
            ],
            stacks: ['bacharelado', 'desenvolvimento', 'manutenção', 'software']
        }
    },
    {
        images: [clare,  clare2, clare3],
        workOrLesson: true,
        description: {
            date: 'out de 2023 · o momento',
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
        description: {
            date: 'jan de 2019 · jan de 2020',
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