'use client'
import Carousel from "@/components/ui/carousel";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { projects } from "@/app/fakeData/navData";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Description from "../components/description";

export default function Projects() {
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
          <DialogTrigger onClick={() => handleDialogOpen(index) }>
            <div className="relative w-[307.67px] h-[307.67px] bg-[#262626]">
              <Image src={e.images[0]} quality={100} fill style={{ objectFit: "cover" }} alt="album" />
            </div>
          </DialogTrigger>

          <DialogContent className="w-[1413px] flex bg-black">

            <div className={`w-[913px] h-[913px] relative bg-[#2525257]`}>
              <Carousel slides={projects[curr[index]].images} />
            </div>

            <Description />


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
