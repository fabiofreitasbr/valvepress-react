"use client";
import { usePathname } from "next/navigation";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import NossosProdutos from "@/app/parts/Home/NossosProdutos";
import React from "react";

const Categoria = () => {
    const namePath = usePathname();
    const textColor = namePath === "/equipamentos-de-seguranca";

    return (
        <div className="">
            <HeaderTitle title="PRODUTOS" />
            <div className="breadcrumb my-4">
                <div className="container mx-auto px-4 uppercase text-sm">
                    <span className={textColor ? "text-orange-500 mx-1" : "text-black mx-1"}><a href="#"> Nossos Produtos </a></span>
                </div>
            </div>
            <NossosProdutos cor="" titulo="" corTitulo="" corBotao="bg-blue-900 text-white" />
        </div>
    );
};
export default Categoria;
