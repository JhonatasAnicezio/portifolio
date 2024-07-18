'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface NavProps {
  href: string;
  name: string;
  icon: JSX.Element;
}

interface NavComponentProps {
  pages: NavProps[];
}

const path = '/jhonatas';

export default function Nav({ pages }: NavComponentProps) {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-center gap-14 text-[13px] font-semibold">
            {pages.map(({ href, name, icon }, index) => (
                <Link
                    href={`${path + href}`}
                    key={index}
                    className={`flex items-center gap-1 py-4 ${pathname === (path + href) && 'border-t border-white'}`}
                >
                    {icon}
                    {name}
                </Link>
            ))}
        </nav>
    );
}