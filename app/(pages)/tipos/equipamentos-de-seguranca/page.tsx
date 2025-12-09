"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Lv from "@/public/img/produtos/equipamentos-seguranca/lv.png";
import Lt from "@/public/img/produtos/equipamentos-seguranca/lt111.png";
import La from "@/public/img/produtos/equipamentos-seguranca/la11.png";
import Ls from "@/public/img/produtos/equipamentos-seguranca/ls1.png";
import Lr from "@/public/img/produtos/equipamentos-seguranca/lr2.png";
import Le from "@/public/img/produtos/equipamentos-seguranca/le.png";
import Ld from "@/public/img/produtos/equipamentos-seguranca/LD.png";
import Lc from "@/public/img/produtos/equipamentos-seguranca/LC.png";

const contentTipos = [
    {
        text: "LV – VÁLVULA DE ALÍVIO DE PRESSÃO E VÁCUO COM CORTA-CHAMAS A PROVA DE COMBUSTÃO CONTÍNUA",
        qtd: "8 itens",
        slug: "LV",
        img: Lv,
        href: "/produto/equipamentos/lv-valvula-de-alivio-de-pressao-e-vacuo-com-corta-chamas-a-prova-de-combustao-continua",
    },
    {
        text: "LT – VÁLVULAS DE ALÍVIO DE PRESSÃO E/OU VÁCUO",
        qtd: "9 itens",
        slug: "LT",
        img: Lt,
        href: "/produto/equipamentos/lt-valvulas-de-alivio-de-pressao-e-ou-vacuo",
    },
    {
        text: "LS – VÁLVULA TIPO CABEÇA DE SUSPIRO",
        qtd: "2 itens",
        slug: "LS",
        img: Ls,
        href: "/produto/equipamentos/ls-valvulas-tipo-cabeca-de-suspiro",
    },

    {
        text: "LR – RESPIRO DE EMERGÊNCIA ",
        qtd: "2 itens",
        slug: "LR",
        img: Lr,
        href: "/produto/equipamentos/lr-respiro-de-emergencia",
    },

    {
        text: "LO – VÁLVULA DE ALÍVIO DE PRESSÃO E/OU VÁCUO",
        qtd: "4 itens",
        slug: "LO",
        img: La,
        href: "/produto/equipamentos/lo-valvula-de-alivio-de-pressao-e-ou-vacuo",
    },
    {
        text: "LE – PROTETOR CONTRA EXPLOSÃO EM TUBULAÇÃO",
        qtd: "5 itens",
        slug: "LE",
        img: Le,
        href: "/produto/equipamentos/le-protetor-contra-explosao-em-tubulacao",
    },
    {
        text: "LD – PROTETOR CONTRA DETONAÇÃO/EXPLOSÃO EM TUBULAÇÃO ",
        qtd: "9 itens",
        slug: "LD",
        img: Ld,
        href: "/produto/equipamentos/ld-protetor-contra-detonacao-explosao-em-tubulacao",
    },
    {
        text: "LC – CALOTA DE VENTILAÇÃO A PROVA DE EXPLOSÃO E COMBUSTÃO CONTÍNUA. ",
        qtd: "9 itens",
        slug: "LC",
        img: Lc,
        href: "/produto/equipamentos/lc-calota-de-ventilacao-a-prova-de-explosao-e-combustao-continua",
    },
    {
        text: "LA – VÁLVULA DE ALÍVIO DE PRESSÃO E VÁCUO COM CORTA-CHAMAS TIPO COMBINADA",
        qtd: "3 itens",
        slug: "LA",
        img: La,
        href: "/produto/equipamentos/la-valvula-de-alivio-de-pressao-e-vacuo-com-corta-chamas-tipo-combinada",
    },
];


export default function Equipamentos() {
    const namePath = usePathname();
    const textColor = namePath === "/equipamentos-de-seguranca";
    return (
        <>
            <HeaderTitle title="PRODUTOS" />
            <section id="produtos" className="py-10">

                <div className="breadcrumb my-4">
                    <div className="container mx-auto px-4 uppercase text-sm">
                        <span className="text-orange-500" ><a href="/categoria"> Nossos Produtos </a></span>
                        <span>&gt;</span>
                        <span className={textColor ? "text-orange-500" : "text-black"}><a href=""> Equipamentos de Segurança </a></span>
                    </div>
                </div>
                <div className="container mx-auto my-4 px-4">
                    <div className="container mx-auto py-4 px-4">
                        <h2 className="text-blue-900 text-center uppercase font-medium text-xl md:text-3xl my-2">
                            EQUIPAMENTOS DE SEGURANÇA
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 w-full h-full">
                        {contentTipos.map((tipo) => (
                            <a href={tipo.href} className="rounded-xl h-full overflow-hidden  border border-gray-100  grid grid-col items-center justify-center"
                                key={tipo.slug}>

                                <div className="flex items-center justify-center"><Image src={tipo.img} alt="" className="h-auto md:h-64 w-auto "></Image></div>
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
