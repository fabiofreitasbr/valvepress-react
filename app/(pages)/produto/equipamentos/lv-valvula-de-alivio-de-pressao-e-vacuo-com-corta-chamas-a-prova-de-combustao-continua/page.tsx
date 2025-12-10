"use client";
import { usePathname } from "next/navigation";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import React from "react";
import Image from "next/image";
import Lv from "@/public/img/produtos/equipamentos-seguranca/lv.png";
import { ContentLinks } from "@/app/parts/dados/contentLinks";
import Link from "next/link";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faDownload } from "@fortawesome/free-solid-svg-icons";

const contentModelo = {
    produtos: [
        {
            title:
                "LV – VÁLVULA DE ALÍVIO DE PRESSÃO E VÁCUO COM CORTA-CHAMAS A PROVA DE COMBUSTÃO CONTÍNUA",
            text: "Instaladas nos tubos de ventilação dos tanques de armazenamento de gases e líquidos inflamáveis, para controle de pressão e vácuo e redução das perdas do produto por evaporação. Evitam a irrupção de chamas para o interior dos reservatórios.",
            img: Lv,
        },
    ],
    modelos: [
        {
            title: "LV11F",
            text: "Válvula de alívio de pressão e quebra-vácuo,corpo em ferro fundido",
        },
        {
            title: "LV15A",
            text: "Válvula de alívio de pressão e quebra-vácuo,corpo em inox",
        },
        {
            title: "LV11",
            text: "Válvula de alívio de pressão e quebra -vácuo,corpo em ferro nodular",
        },
        {
            title: "LV15R",
            text: "Válvula de alívio de pressão e quebra-vácuo ,corpo em inox",
        },
        {
            title: "LV12",
            text: "Válvula de alívio de pressão e quebra-vácuo ,corpo em ferro nodular",
        },
        {
            title: "LV17",
            text: "Válvula de alívio de pressão e quebra-vácuo ,corpo em alumínio",
        },
        {
            title: "LV12F",
            text: "Válvula de alívio de pressão e quebra-vácuo, corpo em ferro fundido",
        },
        {
            title: "LV18",
            text: "Válvula de alívio de pressão e quebra-vácuo,corpo em alumínio",
        },
    ],
}

export default function ValculaLV() {
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
                        <span className={textColor ? "text-orange-500" : "text-black"}><a href=""> LV – VÁLVULA DE ALÍVIO DE PRESSÃO E VÁCUO COM CORTA-CHAMAS A PROVA DE COMBUSTÃO CONTÍNUA</a></span>
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
                                    
                                        {/*<button type="button" className="bg-blue-900 hover:bg-blue-950 mx-auto md:mx-0 transition text-white font-medium rounded-full my-4 py-3 px-4 md:px-10 xl:px-16 block text-xs sm:text-base lg:text-lg uppercase">
                                        <div className="flex gap-2 items-center justify-center">
                                            <FontAwesomeIcon icon={faDownload} className=" w-5 h-5" /> Download do Prospecto em PDF da LV
                                        </div></button> */}
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
                    <Link href={ContentLinks.whatsapp} className="w-full block"
                        target="_blank"> <button type="button" className="bg-blue-900 hover:bg-blue-950  my-4 transition text-white font-medium rounded-full mx-auto py-2 px-4 md:px-10 xl:px-16 block text-lg uppercase">Solicite um orçamento</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
