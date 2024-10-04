export default interface Project {
    id: string;
    images: string[];
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
}