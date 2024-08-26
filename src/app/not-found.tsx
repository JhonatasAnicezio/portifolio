'use client'
import { ThemeModeContext } from '@/context/ThemeMode'
import Link from 'next/link'
import { useContext } from 'react'
 
export default function NotFound() {
    const { isDark } = useContext(ThemeModeContext);
  return (
    <div className='flex flex-col items-center gap-5 justify-center pt-10 w-full'>
            <h1 className='text-2xl'>404</h1>
            <h2>Página Não Encontrada</h2>
            <p>
                Opa! Parece que você se perdeu... ou essa página tirou férias!
            </p>
            <p>
                <em>Volte para a página inicial antes que mais páginas desapareçam!</em>
            </p>
            <Link
                className={`
                    font-semibold
                    ${isDark? "text-[#C3F1FF]" : "text-[#00376b]"}
                `}
                href="/"
            >
                Return Home
            </Link>
    </div>
  )
}