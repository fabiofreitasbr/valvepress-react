"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Gs from "@/public/img/produtos/visores-fluxo/gs.png";
import Gf from "@/public/img/produtos/visores-fluxo/gf.png";
import Gc from "@/public/img/produtos/visores-fluxo/gc.png";

const contentTipos = [
    {
        text: "GS – VISOR DE FLUXO PARA CONTROLE A JUSANTE DE PURGADORES, JANELA DUPLA, CRISTAL EM VIDRO TEMPERADO",
        qtd: "2 itens",
        slug: "GS",
        img: Gs,
        href: "/produto/fluxo/gs-visor-de-fluxo-para-controle-a-jusante-de-purgadores-janela-dupla-cristal-em-vidro-temperado",
    },
    {
        text: "GF – VISOR DE FLUXO SIMPLES COM JANELA DUPLA",
        qtd: "2 itens",
        slug: "GF",
        img: Gf,
        href: "/produto/fluxo/gf-visor-de-fluxo-simples-com-janela-dupla",
    },
    {
        text: "GC – VISOR DE FLUXO COM SIFÃO E JANELA DUPLA",
        qtd: "2 itens",
        slug: "GC",
        img: Gc,
        href: "/produto/fluxo/gc-visor-de-fluxo-com-sifao-e-janela-dupla",
    },
]


export default function VisoresFluxo() {
    const namePath = usePathname();
    const textColor = namePath === "/visores-de-fluxo";

    return (
        <>
            <HeaderTitle title="PRODUTOS" />
            <section id="produtos" className="py-10">

                <div className="breadcrumb my-4">
                    <div className="container mx-auto px-4 uppercase text-sm">
                        <span className="text-orange-500"><a href="/categoria"> Nossos Produtos </a></span>
                        <span>&gt;</span>
                        <span className={textColor ? "text-orange-500" : "text-black"}><a href=""> Visores de Fluxo </a></span>

                    </div>
                </div>
                <div className="container mx-auto my-4 px-4">
                    <div className="container mx-auto py-4 px-4">
                        <h2 className="text-blue-900 text-center uppercase font-medium text-xl md:text-3xl my-2">
                            VISORES DE FLUXO
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 w-full h-full">
                        {contentTipos.map((tipo) => (
                            <a href={tipo.href} className="rounded-xl h-full overflow-hidden  border border-gray-100  grid grid-col items-center"
                                key={tipo.slug}>
                                <div className="flex items-center justify-center"><Image src={tipo.img} alt="" className=" h-auto md:h-64 w-auto "></Image></div>
                                <div className="p-3 sm:px-6 sm:py-4  bg-gray-100 h-full w-full">
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
