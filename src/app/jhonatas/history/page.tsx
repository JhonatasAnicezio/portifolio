'use client'
import Carousel from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image";

import { hitory } from "@/app/fakeData/navData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useState } from "react";
import Description from "../components/description";
import { ThemeModeContext } from "@/context/ThemeMode";

export default function History() {
  const { isDark } = useContext(ThemeModeContext);
  const [curr, setCurr] = useState<number[]>(hitory.map((_, index) => index))

  const prev = (index: number) =>
    setCurr((curr) =>
      curr.map((c, i) =>
        i === index ? (c === 0 ? hitory.length - 1 : c - 1) : c
      )
    );

  const next = (index: number) =>
    setCurr((curr) =>
      curr.map((c, i) =>
        i === index ? (c === hitory.length - 1 ? 0 : c + 1) : c
      )
    );

    const handleDialogOpen = (index: number) => {
      setCurr((curr) => curr.map((c, i) => (i === index ? index : c)));
    };

  return (
    <div className="flex flex-wrap gap-[5px] justify-start items-stretch w-full">
      {hitory.map((e, index) => (
        <Dialog key={index}>
          <DialogTrigger onClick={() => handleDialogOpen(index) }>
            <div className="relative w-[307.67px] h-[307.67px] bg-[#262626]">
              <Image src={e.images[0]} quality={100} fill style={{ objectFit: "cover" }} alt="album" />
            </div>
          </DialogTrigger>

          <DialogContent className={`w-[1413px] flex ${isDark? "bg-black" : "bg-white"}`}>
            <div className={`w-[913px] h-[913px] relative bg-[#2525257]`}>
              <Carousel slides={hitory[curr[index]].images} key={index} />
            </div>

            <Description />

            <button
              onClick={() => next(index)}
              className={`flex items-center justify-center absolute top-1/2 right-[-12rem] w-8 h-8 rounded-full bg-white
                  ${curr[index] === hitory.length - 1 && 'hidden'}
                `}
            >
              <ChevronRight />
            </button>
            <button
              onClick={() => prev(index)}
              className={`flex items-center justify-center absolute top-1/2 left-[-12rem] w-8 h-8 rounded-full bg-white
                  ${curr[index] === 0 && 'hidden'}
                `}
            >
              <ChevronLeft />
            </button>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
