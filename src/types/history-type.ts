export default interface History {
    id: string;
    workOrLesson: boolean;
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