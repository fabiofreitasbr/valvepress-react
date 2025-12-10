import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";
import React from "react";
import Biocombustiveis from "@/public/img/biocombustiveis.jpg";
import NossosProdutos from "@/app/parts/Home/NossosProdutos";
import ContatoForm from "@/app/parts/Componentes/ContatoFormPage";
import Parceiros from "@/app/parts/Home/Parceiros";

const Terminais = () => {
    return (
        <div className="relative">
            <HeaderTitle title="biocombustíveis" />
            <section className="py-10 md:py-16 ">
                <div className="container mx-auto px-4 ">
                    <div className="block lg:flex lg:flex-row-reverse  ">
                        <div className="lg:w-3/6 flex justify-content items-center">
                            <Image src={Biocombustiveis} className="w-1/2 mx-auto mb-4 aspect-square object-cover rounded-full" alt="" />
                        </div>
                        <div className="lg:w-3/6 text-zinc-600  ">
                            <div className="text-base text-justify md:text-left  md:text-xl lg:text-base 2xl:text-xl text-zinc-700 font-reading">

                                <p className="mb-4">
                                    Somos especialistas em soluções para o setor de refino, oferecendo tecnologias e equipamentos voltados à produção, controle e eficiência na operação de biocombustíveis. Nosso portfólio atende às principais exigências de processamento de matérias-primas renováveis, garantindo segurança, desempenho e conformidade ambiental.
                                </p>

                                <p className="">
                                    Fornecemos sistemas de dosagem e mistura, válvulas de controle, sensores de temperatura e pressão, selos industriais e unidades de filtragem, entre outros produtos de alta performance. Atuamos em parceria com nossos clientes, oferecendo suporte técnico e soluções sob medida para aprimorar processos, reduzir emissões e elevar a competitividade operacional.
                                </p>
                            </div>
                            <button className="bg-blue-900 hover:bg-blue-950 transition text-white flex font-medium rounded-full my-6 py-2 px-8 md:px-10  md:block text-base md:text-lg lg:text-base xl:text-lg uppercase">
                                Quero saber mais
                            </button>

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
