'use client'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type CarouselProps = {
    slides: StaticImageData[];
};

export default function Carousel({ slides }: CarouselProps) {
    const [curr, setCurr] = useState(0);

    const prev = () => 
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="overflow-hidden w-full h-full">
            <div className="flex w-full h-full" style={{ transform: `translateX(-${curr*100}%)` }}>
                {slides.map((slide, i) => (
                    <div key={i} className="w-full h-full flex-shrink-0 relative">
                        <Image
                            src={slide}
                            alt="album"
                            quality={100}
                            fill style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center p-4 text-center">
                <button
                    onClick={prev}
                    className={`p-0.5 rounded-full shadow opacity-50 bg-white text-black/85
                        absolute left-4
                        ${curr === 0 && 'hidden'}`}
                >
                    <ChevronLeft size={20} />
                </button>
                <button onClick={next} className={`p-0.5 rounded-full shadow opacity-50 bg-white text-black/85
                        absolute right-4
                        ${curr === slides.length - 1 && 'hidden'}`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
            
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-1">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`
                                w-[6px] h-[6px] bg-white rounded-full
                                ${curr !== i && 'bg-opacity-40'}
                                ${slides.length <= 1 && 'hidden' }
                            `}
                        />
                    ))}
                </div>
            </div>Prev
        </div>
    );
}