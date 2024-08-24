'use client'
import { HiSquare2Stack } from "react-icons/hi2";
import Carousel from "@/components/ui/carousel";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { projects } from "@/fakeData/navData";
import { useContext, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Description from "../components/description";
import { ThemeModeContext } from "@/context/ThemeMode";

export default function Projects() {
  const { isDark } = useContext(ThemeModeContext);

  const [curr, setCurr] = useState<number[]>(projects.map((_, index) => index))

  const prev = (index: number) =>
    setCurr((curr) =>
      curr.map((c, i) =>
        i === index ? (c === 0 ? projects.length - 1 : c - 1) : c
      )
    );

  const next = (index: number) =>
    setCurr((curr) =>
      curr.map((c, i) =>
        i === index ? (c === projects.length - 1 ? 0 : c + 1) : c
      )
    );

  const handleDialogOpen = (index: number) => {
    setCurr((curr) => curr.map((c, i) => (i === index ? index : c)));
  };

  return (
    <div className="flex flex-wrap gap-[5px] justify-start items-stretch w-full">
      {projects.map((e, index) => (
        <Dialog key={index}>
          <DialogTrigger onClick={() => handleDialogOpen(index)}>
            <div className="relative w-[307.67px] h-[307.67px] bg-[#262626]">
              <span className="absolute text-xl top-2 right-2 z-50 text-white">
                {e.images.length > 1 &&
                  <HiSquare2Stack />
                }
              </span>              <Image src={e.images[0]} quality={100} fill style={{ objectFit: "cover" }} alt="album" />
            </div>
          </DialogTrigger>

          <DialogContent className={`w-[1413px] flex ${isDark ? "bg-black" : "bg-white"}`}>

            <div className={`w-[913px] h-[913px] relative bg-[#2525257]`}>
              <Carousel slides={projects[curr[index]].images} key={index} />
            </div>

            <Description description={projects[curr[index]].description} />


            <button
              onClick={() => next(index)}
              className={`flex items-center justify-center absolute top-1/2 right-[-12rem] w-8 h-8 rounded-full bg-white
                  ${curr[index] === projects.length - 1 && 'hidden'}
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
