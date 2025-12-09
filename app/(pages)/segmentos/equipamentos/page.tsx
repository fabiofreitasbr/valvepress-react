import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";
import React from "react";
import Catalogo from "@/public/img/produtos/equipamentos-seguranca/la11.png"
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Equipamento()  {
    return (
        <>
            <HeaderTitle title="TIPO" />
            <section className="py-4">
                <div className="breadcrumb my-4">
                    <div className="container mx-auto px-4 uppercase text-sm">
                        <span className="text-orange-500 mx-1"><a href="/">Nossos Produtos</a></span>
                        <span className="mx-1">&gt;</span>
                        <span className="text-orange-500 mx-1"><a href="">Equipamentos de Segurança</a></span>
                        <span className="mx-1">&gt;</span>
                        <span className="text-orange-500 mx-1"><a href="">La - Válvula de Alívio de Pressão e Vácuo com Corta-chamas tipo combinada</a></span>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap py-4">
                        <div className="w-full md:w-1/4">
                            <Image src={Catalogo} className="w-1/2 mx-auto" alt="" />
                        </div>
                        <div className="w-full md:w-3/4">
                            <div>
                                <div>
                                    <h1 className="mt-1 text-center md:text-left text-base md:text-2xl  text-orange-500 uppercase font-medium">LA - VÁLVULA DE ALÍVIO DE PRESSÃO E VÁCUO COM CORTA-CHAMAS TIPO COMBINADA</h1>
                                    <p className="text-center md:text-left text-sm md:text-lg text-gray-300 py-2">Indicadas para proteger respiros de tanques de armazenagem de produtos inflamáveis, contra explosão externa. Além disso, reduzem as perdas do produto por evaporação.</p>
                                </div>
                                <button type="button" className="bg-blue-900 hover:bg-blue-950 transition  mx-auto md:mx-0  text-white font-medium rounded-md my-4 py-3 px-4 md:px-10 xl:px-16 block text-xs sm:text-base lg:text-lg uppercase"><FontAwesomeIcon icon={faFile} className="mx-2 w-5 h-5" /> Download do Prospecto em PDF da LC</button>
                            </div>
                        </div>
                    </div>
                    <hr className="border border-gray-100" />
                    <div className="container mx-auto py-2 px-4">
                        <div className="my-2 text-center">
                            <h2 className="text-blue-900 uppercase font-medium text-xl md:text-3xl my-2">Modelos</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center auto-rows-fr">
                        <div className="w-full sm:w-1/3 lg:w-1/4">
                            <div className="px-2 py-2">
                                <div className="rounded-xl h-full overflow-hidden bg-gray-100 border border-gray-100">
                                    <div className="px-6 py-4">
                                        <div className="text-center uppercase">
                                            <div className="pb-2">
                                                <h4 className="text-lg font-medium text-orange-500">
                                                    LA16
                                                </h4>
                                                <h4 className="text-sm py-2 font-medium text-gray-400">
                                                    Válvula de alívio de pressão e vácuo com corta-chamas tipo combinada, material do corpo em ferro nodular.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/3 lg:w-1/4">
                            <div className="px-2 py-2">
                                <div className="rounded-xl h-full overflow-hidden bg-gray-100 border border-gray-100">
                                    <div className="px-6 py-4">
                                        <div className="text-center uppercase">
                                            <div className="pb-2">
                                                <h4 className="text-lg font-medium text-orange-500">
                                                    LA16
                                                </h4>
                                                <h4 className="text-sm py-2 font-medium text-gray-400">
                                                    Válvula de alívio de pressão e vácuo com corta-chamas tipo combinada, material do corpo em ferro nodular.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/3 lg:w-1/4">
                            <div className="px-2 py-2">
                                <div className="rounded-xl h-full overflow-hidden bg-gray-100 border border-gray-100">
                                    <div className="px-6 py-4">
                                        <div className="text-center uppercase">
                                            <div className="pb-2">
                                                <h4 className="text-lg font-medium text-orange-500">
                                                    LA16
                                                </h4>
                                                <h4 className="text-sm py-2 font-medium text-gray-400">
                                                    Válvula de alívio de pressão e vácuo com corta-chamas tipo combinada, material do corpo em ferro nodular.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="bg-blue-900 hover:bg-blue-950 transition my-4  text-white font-medium rounded-md mx-auto py-2 px-4 md:px-10 xl:px-16 block text-lg uppercase">Solicite um orçamento</button>
                </div>
            </section>
    

        </>
    );
};