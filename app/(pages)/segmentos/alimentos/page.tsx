import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";
import React from "react";
import Alimentos from "@/public/img/alimentos.jpg";
import NossosProdutos from "@/app/parts/Home/NossosProdutos";
import ContatoForm from "@/app/parts/Componentes/ContatoFormPage";
import Parceiros from "@/app/parts/Home/Parceiros";

const Terminais = () => {
    return (
        <div className="relative">
            <HeaderTitle title="alimentos e bebidas" />
            <section className="py-10 lg:py-16 ">
                <div className="container mx-auto px-4 ">
                    <div className="block lg:flex lg:flex-row-reverse  ">
                        <div className="lg:w-3/6 flex justify-content items-center">
                            <Image src={Alimentos}  className="lg:w-2/3 w-1/2 sm:w-1/2 xl:w-1/2 mx-auto md:mb-6 mb-4 aspect-square object-cover rounded-full border-8 border-zinc-200" alt="" />
                        </div>
                        <div className="lg:w-3/6 text-zinc-600  ">
                            <div className="text-xs text-justify md:text-left md:text-xl lg:text-base 2xl:text-xl text-zinc-700 font-reading">

                                <p className="mb-4">
                                    Somos especialistas em soluções para o segmento de terminais, oferecendo equipamentos e sistemas de alta confiabilidade voltados à proteção, controle e eficiência operacional. Nosso portfólio atende às principais demandas de armazenamento e movimentação de líquidos e gases, garantindo segurança e desempenho contínuo.
                                </p>

                                <p className="">
                                    Fornecemos dispositivos de alívio e contenção, válvulas de segurança, corta-chamas, selos e sistemas de ventilação, entre outros produtos de alto padrão. Atuamos lado a lado com nossos clientes, oferecendo suporte técnico e soluções personalizadas para otimizar processos e reduzir custos operacionais.
                                </p>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start"> <button className="bg-blue-900 hover:bg-blue-950 transition text-white flex font-medium rounded-full my-6 py-2 px-8 md:px-10   md:block text-sm md:text-lg uppercase">
                                Quero saber mais
                            </button></div>

                        </div>
                    </div>
                </div>
            </section>
            <NossosProdutos cor="bg-blue-900" titulo="Produtos" corTitulo="text-white" corBotao="bg-white text-blue-900" />
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
