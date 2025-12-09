"use client";
import { usePathname } from "next/navigation";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import React from "react";
import Image from "next/image";
import Ls from "@/public/img/produtos/equipamentos-seguranca/ls1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const contentModelo = {
    produtos: [
        {
            title: "LS – VÁLVULA TIPO CABEÇA DE SUSPIRO",
            text: "Utilizadas em respiro de tanques de navio, para evitar que em caso de naufrágio ou inundação, a água do mar penetre no interior do tanque.",
            img: Ls
        },
    ],

    modelos: [
        {
            title: "LS11",
            text: "Válvula tipo cabeça de suspiro,corpo em ferro fundido",
        },
        {
            title: "LS12",
            text: "Válvula tipo cabeça de suspiro,corpo em ferro fundido nodular",
        },
    ],
}

export default function ValculaLS() {
    const namePath = usePathname();
    const textColor = namePath === "/equipamentos-de-seguranca";

    return (
        <div>
            <HeaderTitle title="PRODUTOS" />
            <section className="py-4">
                <div className="breadcrumb my-4">
                    <div className="container mx-auto px-4 uppercase text-sm">
                        <span className="text-orange-500"><a href="/categoria"> Nossos Produtos </a></span>
                        <span>&gt;</span>
                        <span className="text-orange-500"><a href="/tipos/equipamentos-de-seguranca"> Equipamentos de Segurança </a></span>
                        <span>&gt;</span>
                        <span className={textColor ? "text-orange-500" : "text-black"}><a href=""> LS – VÁLVULA TIPO CABEÇA DE SUSPIRO </a></span>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    {contentModelo.produtos.map((produto, index) => (
                        <div className="flex flex-wrap py-4" key={`produto-${index}`}>
                            <div className="w-full md:w-1/4">
                                <Image src={produto.img} className="w-1/2 mx-auto object-contain" alt="" />
                            </div>
                            <div className="w-full md:w-3/4">
                                <div>
                                    <div>
                                        <h1 className="mt-1 text-center md:text-left text-base md:text-2xl  text-orange-500 uppercase font-medium">{produto.title}</h1>
                                        <p className="text-center md:text-left text-sm md:text-lg text-gray-300 py-2">{produto.text}</p>
                                    </div>
                                    <button type="button" className="bg-blue-900 hover:bg-blue-950 mx-auto md:mx-0 transition text-white font-medium rounded-full my-4 py-3 px-4 md:px-10 xl:px-16 block text-xs sm:text-base lg:text-lg uppercase">
                                        <div className="flex gap-2 items-center justify-center">
                                            <FontAwesomeIcon icon={faDownload} className=" w-5 h-5" /> Download do Prospecto em PDF da LC
                                        </div></button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <hr className="border border-gray-100" />
                    <div className="container mx-auto py-2 px-4">
                        <div className="my-2 text-center">
                            <h2 className="text-blue-900 uppercase font-medium text-xl md:text-3xl my-2">Modelos</h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center ">
                        {contentModelo.modelos.map((modelo, index) => (
                            <div className="w-full sm:w-1/3 lg:w-1/4" key={`modelo-${index}`}>
                                <div className="px-2 py-2" >
                                    <div className="rounded-xl h-full overflow-hidden bg-gray-100 border border-gray-100">
                                        <div className="px-6 py-4">
                                            <div className="text-center uppercase">
                                                <div className="pb-2">
                                                    <h4 className="text-lg font-medium text-orange-500">
                                                        {modelo.title}
                                                    </h4>
                                                    <h4 className="text-sm py-2 font-medium text-gray-400">
                                                        {modelo.text}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="bg-blue-900 hover:bg-blue-950  my-4 transition text-white font-medium rounded-full mx-auto py-2 px-4 md:px-10 xl:px-16 block text-lg uppercase">Solicite um orçamento</button>
                </div>
            </section>
        </div>
    );
};
