import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";
import React from "react";
import Graneis from "@/public/img/graneis-liquidos.png";
import NossosProdutos from "@/app/parts/Home/NossosProdutos";
import ContatoForm from "@/app/parts/Componentes/ContatoFormPage";
import Parceiros from "@/app/parts/Home/Parceiros";

const Terminais = () => {
    return (
        <div className="relative">
            <HeaderTitle title="Refinarias" />
            <section className="py-10 md:py-16 ">
                <div className="container mx-auto px-4 ">
                    <div className="block lg:flex lg:flex-row-reverse  ">
                        <div className="lg:w-3/6 flex justify-content items-center">
                            <Image src={Graneis} className="w-2/3 lg:w-1/2 mx-auto mb-4" alt="" />
                        </div>
                        <div className="lg:w-3/6 text-zinc-600  ">
                            <div className="text-base text-justify md:text-left md:text-2xl text-zinc-700 font-reading">

                                <p className="mb-4">
                                    Somos especialistas em soluções para o segmento de refino, oferecendo equipamentos e sistemas de alta confiabilidade voltados à segurança, controle e eficiência operacional. Nosso portfólio atende às principais demandas de processamento e armazenamento de derivados de petróleo e biocombustíveis, garantindo conformidade regulatória, desempenho contínuo e proteção ambiental em todas as etapas da produção.
                                </p>

                                <p className="">
                                    Fornecemos válvulas de segurança e controle, dispositivos de alívio e contenção, corta-chamas, selos industriais e sistemas de ventilação, entre outros produtos de alto padrão. Atuamos em parceria com nossos clientes, oferecendo suporte técnico e soluções personalizadas para otimizar processos, reduzir riscos e assegurar a integridade das operações em unidades de refino e plantas industriais.
                                </p>
                            </div>
                            <button className="bg-blue-900 hover:bg-blue-950 transition text-white flex font-medium rounded-full my-6 py-2 px-8 md:px-10  md:block text-base md:text-lg uppercase">
                                Quero saber mais
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <NossosProdutos cor="bg-blue-900" titulo="Produtos" corTitulo="text-white" corBotao="bg-white text-blue-900"/>
            <></>
            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4 ">
                    <Parceiros cor="" titulo="" />
                    <div className="p-8 shadow-2xl rounded-xl">
                        <h3 className="font-base text-blue-900 text-xl md:text-2xl my-2 py-4">
                            Entre em contato conosco
                        </h3>
                        <ContatoForm />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Terminais;
