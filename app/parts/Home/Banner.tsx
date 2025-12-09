"use client";
import React, { useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide, SplideRef } from "@splidejs/react-splide";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "@splidejs/react-splide/css";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentBanner = [
    {
        text: "Válvulas e Equipamentos",
        text2: "para todos os segmentos na área industrial",
        slug: "Válvulas",
        img: "/img/banner-principal.png",
    },
    {
        text: "Assistência técnica",
        text2: "nosso compromisso em atender a sua demanda",
        slug: "Assistência",
        img: "img/banner-2.jpg",
    },
    {
        text: "Montagens de skids",
        text2: "sistema de redução e controle de pressão dn para vapor",
        slug: "Montagens",
        img: "/img/banner-3.jpg",
    },
    {
        text: "Sua empresa, nosso foco",
        text2: "uma solução para cada segmento",
        slug: "Empresa",
        img: "/img/banner-4.jpg"
    },
];

export default function Banner() {
    const splideRef = useRef<SplideRef>(null);
    const scrollNext = () => {
        splideRef.current?.splide?.go(">");
    };
    const scrollPrev = () => {
        splideRef.current?.splide?.go("<");
    };
    return (
        <div className="relative">
            <div className="w-full h-full relative  ">
                <Splide
                    ref={splideRef}
                    className="custom-splide "
                    options={{
                        perPage: 1,
                        perMove: 1,
                        type: "loop",
                        arrows: false,
                        autoplay: true,
                        pagination: true,
                    }}
                >
                    {ContentBanner.map((serviceSingle) => (
                        <SplideSlide
                            key={serviceSingle.slug}
                            className="bg-cover bg-center h-80 sm:h-80 md:h-100 lg:h-120 xl:h-140 relative"
                            style={{ backgroundImage: `url(${serviceSingle.img})` }}
                        >
                            <div className="container mx-auto px-10 md:px-4 h-full flex justify-center items-center md:items-start flex-col ">
                                <div className=" ">
                                    <h1 className="uppercase text-sm sm:text-lg md:text-3xl font-bold text-white bg-orange-500 py-2 px-4 inline-block">
                                        {serviceSingle.text}
                                    </h1>
                                </div>
                                <div>
                                    <p className="text-white text-sm sm:text-lg md:text-xl uppercase md:ml-8 bg-blue-900 py-2 px-4 inline-block">
                                        {serviceSingle.text2}
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                {/* Botões laterais */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2   text-blue-900  transition"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-10 h-10" />
                </button>

                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2   text-blue-900  transition"
                >
                    <FontAwesomeIcon icon={faChevronRight} className="w-10 h-10" />
                </button>
            </div>
        </ div>
    );
}
