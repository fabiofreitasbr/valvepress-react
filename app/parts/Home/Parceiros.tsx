"use client";
import React from "react";
import Image from "next/image";
import { ContentParceiros } from "../dados/contentParceiros";

interface PropsBg {
    cor: string;
     titulo: string;
}

export default function Parceiros({cor, titulo} : PropsBg) {
    const bgColor = cor;
    const Title = titulo;

    return (
        <div className= {`${bgColor}` + " overflow-x-hidden"} > {/* "py-16  bg-trueGray-200" */}
            <div className="container mx-auto px-4 ">
                <div className="mb-6 ">
                    <div className="text-center">
                        <h2 className="text-blue-900 uppercase font-medium text-xl md:text-3xl my-2">
                            {Title}
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:flex  justify-center gap-4 lg:gap-8">
                    {ContentParceiros.map((serviceSingle) => (
                        <div
                            key={serviceSingle.slug}
                            className="bg-white  sm:w-1/3 md:w-[15rem] lg:w-1/8  p-4 rounded-xl flex justify-center items-center"
                        >
                            <div className="w-[6rem] lg:w-full  lg:h-auto">

                                <Image
                                    src={serviceSingle.img}
                                    alt=""
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
