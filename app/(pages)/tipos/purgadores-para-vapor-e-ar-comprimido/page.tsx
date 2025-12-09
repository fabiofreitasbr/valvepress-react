
"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Tp from "@/public/img/produtos/purgadores/TP.png";
import Tn from "@/public/img/produtos/purgadores/tn.png";
import Tm from "@/public/img/produtos/purgadores/TM.png";
import Tl from "@/public/img/produtos/purgadores/tl-.png";
import Ti from "@/public/img/produtos/purgadores/TI.png";
import Tf from "@/public/img/produtos/purgadores/TF.png";
import Tc from "@/public/img/produtos/purgadores/TC.png";
import Tb from "@/public/img/produtos/purgadores/TB91.png";
import Ta from "@/public/img/produtos/purgadores/ta.png";

const contentTipos = [
    {
        text: "TP – PURGADORES DE VAPOR COM PILOTO TÉRMICO",
        qtd: "2 itens",
        slug: "TP",
        img: Tp,
        href: "/produto/purgadores/tp-purgadores-de-vapor-com-piloto-termico",
    },
    {
        text: "TN – INDICADO PARA PURGADORES COM DESCARGA PARA ATMOSFERA QUE SEJAM DO TIPO INTERMITENTE",
        qtd: "9 itens",
        slug: "TN",
        img: Tn,
        href: "/produto/purgadores/tn-indicado-para-purgadores-com-descarga-para-atmosfera-que-sejam-do-tipo-intermitente",
    },
    {
        text: "TM – PURGADOR TÉRMICO PARA VAPOR COM REGULADOR TÉRMICO MONOBLOCO (RTM)",
        qtd: "4 itens",
        slug: "TM",
        img: Tm,
        href: "/produto/purgadores/tm-purgador-termico-para-vapor-com-regulador-termico-monobloco-rtm",
    },

    {
        text: "TL – ELIMINADOR DE AR COM BÓIA",
        qtd: "1 itens",
        slug: "TL",
        img: Tl,
        href: "/produto/purgadores/tl-eliminador-de-ar-com-boia",
    },

    {
        text: "TI – PURGADORES DE BALDE INVERTIDO",
        qtd: "1 itens",
        slug: "TI",
        img: Ti,
        href: "/produto/purgadores/ti-purgadores-de-balde-invertido",
    },
    {
        text: "TF – PURGADOR DE BOIA PARA VAPOR, CORPO EM AÇO CARBONO FUNDIDO",
        qtd: "4 itens",
        slug: "TF",
        img: Tf,
        href: "/produto/purgadores/tf-purgador-de-boia-para-vapor-corpo-em-aco-carbono-fundido",
    },
    {
        text: "TC – PURGADOR TERMODINÂMICO PARA VAPOR",
        qtd: "3 itens",
        slug: "TC",
        img: Tc,
        href: "/produto/purgadores/tc-purgador-termodinamico-para-vapor",
    },
    {
        text: "TB – PURGADOR DE LÂMINAS BIMETÁLICAS ",
        qtd: "5 itens",
        slug: "TB",
        img: Tb,
        href: "/produto/purgadores/tb-purgador-de-laminas-bimetalicas",
    },
    {
        text: "TA – PURGADOR DE BÓIA PARA AR COMPRIMIDO",
        qtd: "4 itens",
        slug: "TA",
        img: Ta,
        href: "/produto/purgadores/ta-purgador-de-boia-para-ar-comprimido",
    },
];



export default function Purgadores() {
    const namePath = usePathname();
    const textColor = namePath === "/purgadores-para-vapor-e-ar-comprimido";

    return (
        <>
            <HeaderTitle title="PRODUTOS" />
            <section id="produtos" className="py-10">

                <div className="breadcrumb my-4">
                    <div className="container mx-auto px-4 uppercase text-sm">
                        <span className="text-orange-500"><a href="/categoria"> Nossos Produtos </a></span>
                        <span>&gt;</span>
                        <span className={textColor ? "text-orange-500" : "text-black"}><a href=""> Purgadores para Vapor e Ar Comprimido </a></span>
                    </div>
                </div>
                <div className="container mx-auto my-4 px-4">
                    <div className="container mx-auto py-4 px-4">
                        <h2 className="text-blue-900 text-center uppercase font-medium text-xl md:text-3xl my-2">
                            PURGADORES PARA VAPOR E AR COMPRIMIDO
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
