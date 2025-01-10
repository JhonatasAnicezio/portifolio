'use client'
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
    const [render, setRender] = useState(false);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        setRender(true)
        // Cleanup para restaurar o scroll, se necessário
        return () => {
            document.body.classList.remove('overflow-hidden');
            setRender(false);
        };
    }, []);

    if (!render) {
        return <Loading />;
    }

    return (
        <div className="fixed inset-0 overflow-hidden w-full h-screen bg-black flex items-center justify-center">
            {children}
        </div>
    )
}