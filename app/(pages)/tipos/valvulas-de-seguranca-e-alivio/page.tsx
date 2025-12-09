"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Hf from "@/public/img/produtos/valvula-seguranca/hf.png";
import Hc from "@/public/img/produtos/valvula-seguranca/hc.png";
import Ha from "@/public/img/produtos/valvula-seguranca/ha.png";

const contentTipos = [
    {
        text: "HF – VÁLVULA DE SEGURANÇA E ALÍVIO FLANGEADA COM CASTELO FECHADO",
        qtd: "6 itens",
        slug: "HF",
        img: Hf,
        href: "/produto/seguranca/hf-valvula-de-seguranca-e-alivio-flangeada-com-castelo-fechado",
    },
    {
        text: "HC – VÁLVULA DE SEGURANÇA E ALÍVIO ROSCADA COM CAPUZ FECHADO",
        qtd: "4 itens",
        slug: "HC",
        img: Hc,
        href: "/produto/seguranca/hc-valvula-de-seguranca-e-alivio-roscada-com-capuz-fechado",
    },
    {
        text: "HA – VÁLVULA DE SEGURANÇA E ALÍVIO FLANGEADA CASTELO ABERTO",
        qtd: "4 itens",
        slug: "HA",
        img: Ha,
        href: "/produto/seguranca/ha-valvula-de-seguranca-e-alivio-flangeada-castelo-aberto",
    },
]

export default function ValvulaSeguranca() {
    const namePath = usePathname();
    const textColor = namePath === "/valvulas-de-seguranca-e-alivio";

    return (
        <>
            <HeaderTitle title="PRODUTOS" />
            <section id="produtos" className="py-4">

                <div className="breadcrumb my-4">
                    <div className="container mx-auto px-4 uppercase text-sm">
                        <span className="text-orange-500"><a href="/categoria"> Nossos Produtos </a></span>
                        <span>&gt;</span>
                        <span className={textColor ? "text-orange-500" : "text-black"}><a href=""> Válvulas de Segurança e Alívio </a></span>
                    </div>
                </div>
                <div className="container mx-auto my-4 px-4">
                    <div className="container mx-auto py-4 px-4">
                        <h2 className="text-blue-900 text-center uppercase font-medium text-xl md:text-3xl my-2">
                            VÁLVULAS DE SEGURANÇA E ALÍVIO
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
