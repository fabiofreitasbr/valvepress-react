"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Sr from "@/public/img/produtos/valvula-controle/sr.png";
import Sp from "@/public/img/produtos/valvula-controle/sp.png";
import Sh from "@/public/img/produtos/valvula-controle/sh.png";
import Sa from "@/public/img/produtos/valvula-controle/sa.png";

const contentTipos = [
    {
        text: "SR – VÁLVULA CONTROLADORA DE PRESSÃO AUTO-OPERADA",
        qtd: "4 itens",
        slug: "SR",
        img: Sr,
        href: "/produto/controle/sr-valvula-controladora-de-pressao-auto-operada",
    },
    {
        text: "SP-VÁLVULA DE CONTROLE PARA CONTROLE DE VARIÁVEIS TAIS COMO PRESSÃO, TEMPERATURA, VAZÃO, NÍVEL ETC.",
        qtd: "5 itens",
        slug: "SP",
        img: Sp,
        href: "/produto/controle/sp-valvula-de-controle-para-controle-de-variaveis-tais-como-pressao-temperatura-vazao-nivel-etc",
    },
    {
        text: "SH – VÁLVULA TERMOSTÁTICA AUTO-OPERADA TIPO GLOBO",
        qtd: "4 itens",
        slug: "SH",
        img: Sh,
        href: "/produto/controle/sh-valvula-termostatica-auto-operada-tipo-globo",
    },

    {
        text: "SA – ATUADOR PNEUMÁTICO TIPO MOLA-DIAFRAGMA PARA VÁLVULA DE CONTROLE SP",
        qtd: "3 itens",
        slug: "SA",
        img: Sa,
        href: "/produto/controle/sa-atuador-pneumatico-tipo-mola-diafragma-para-valvula-de-controle-sp",
    },

];


export default function ValvulaControle() {
    const namePath = usePathname();
    const textColor = namePath === "/valvulas-de-controle";

    return (
        <>
            <HeaderTitle title="PRODUTOS" />
            <section id="produtos" className="py-10">

                <div className="breadcrumb my-4">
                    <div className="container mx-auto px-4 uppercase text-sm">
                        <span className="text-orange-500"><a href="/categoria"> Nossos Produtos </a></span>
                        <span>&gt;</span>
                        <span className={textColor ? "text-orange-500" : "text-black"}><a href=""> Válvulas de Controle </a></span>
                    </div>
                </div>
                <div className="container mx-auto my-2 px-4">
                    <div className="container mx-auto py-4 px-4">
                        <h2 className="text-blue-900 text-center uppercase font-medium text-xl md:text-3xl my-4">
                            VÁLVULAS DE CONTROLE
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 w-full h-full">
                        {contentTipos.map((tipo) => (
                            <a href={tipo.href} className="rounded-xl h-full overflow-hidden  border border-gray-100  grid grid-col items-center"
                                key={tipo.slug}>

                                <div className="flex items-center justify-center"><Image src={tipo.img} alt="" className="h-auto md:h-64 w-auto "></Image></div>                                <div className="p-3 sm:px-6 sm:py-4  bg-gray-100 h-full w-full">
                                    <div className="uppercase">
                                        <div className="pb-2">
                                            <h4 className="text-xs md:text-sm font-medium text-blue-900">
                                                {tipo.text}
                                            </h4>
                                            <h4 className="text-xs md:text-sm py-2 font-medium text-orange-500">
                                                {tipo.qtd}
                                            </h4>
                                            <button type="button" className="bg-blue-900 hover:bg-blue-950 transition text-white font-medium rounded-full py-2 px-2 my-2 w-full block text-xs sm:text-base uppercase">Ver Produto</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
}
