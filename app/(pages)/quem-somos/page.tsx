import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";
import React from "react";
import Equipe from "@/public/img/equipe-tecnica.png";
import LogoValvePress from "@/app/parts/Componentes/SobreFundo";
import Duvidas from "@/app/parts/Componentes/Duvidas";

const QuemSomos = () => {
    return (
        <div className="">
            <HeaderTitle title="QUEM SOMOS" />
            <section className="py-10 md:py-16 ">
                <div className="container mx-auto px-4 ">
                    <div className="block lg:flex lg:flex-row-reverse  ">
                        <div className="lg:w-3/6 flex justify-content items-center">
                            <Image src={Equipe} className="w-1/2 lg:w-2/3 mx-auto " alt="" />
                        </div>
                        <div className="lg:w-3/6 text-zinc-600  ">
                            <div className="text-base text-justify md:text-left md:text-xl lg:text-base 2xl:text-2xl text-zinc-700 font-reading">
                                <h2 className="text-xl md:text-2xl py-4 text-blue-900 uppercase font-bold">
                                    Quem Somos:
                                </h2>
                                <p className="mb-4">
                                    Somos uma empresa contemporânea que já nasceu com o know-how de mais de 50 anos no ramo industrial. Investimos no aprimoramento de nossos colaboradores e enxergamos os desafios como grandes oportunidades de crescimento.
                                    Atuamos Como Fabricante De Equipamentos Industriais, Tais Como:
                                    <span className="font-bold"> VÁLVULA DE ALÍVIO DE PRESSÃO E VÁCUO COM CORTA-CHAMAS, VÁLVULA DE SEGURANÇA, VÁLVULA DE CONTROLE, PROTETORES DE TUBULAÇÃO, RESPIROS DE EMERGÊNCIA, CABEÇA DE SUSPIRO PARA TANQUES E EMBARCAÇÕES</span>
                                </p>

                                <p className="">
                                    Temos como marca registrada nosso forte DNA Empreendedor, focados em produzirmos equipamentos customizados e de altíssima qualidade e performance, agregando valor aos projetos dos nossos clientes e parceiros estratégicos.
                                    Dispomos de uma vasta linha de produtos, onde primamos pela qualidade total em nossos processos de fabricação.
                                    Nossos equipamentos são notadamente reconhecidos pelos nossos clientes (usuários), como referência no tocante à qualidade/durabilidade, e eficiência operacional.
                                    <span className="font-bold"> Empresa Certificada: ( ISO 9001:2015 |  NBR 16852 | NBR 28300 ).</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LogoValvePress />
            <section className="py-10 md:py-20 ">
                <div className=" container mx-auto px-4 ">
                    <div className="text-base text-center md:text-2xl text-zinc-700  ">
                        <h3 className="text-xl md:text-2xl py-4 text-blue-900 uppercase font-bold">
                            MISSÃO
                        </h3>
                        <p className=" py-2">
                            Nossa missão é satisfazer as necessidades de nossos clientes,
                            preservando os fatores que são as premissas básicas do que
                            fazemos, que é a qualidade no atendimento de nossos clientes,
                            respeito ao cumprimento de prazos, melhoria contínua nos processos
                            internos e inovação.
                        </p>
                    </div>
                </div>
            </section>
            <Duvidas />
        </div>
    );
};
export default QuemSomos;
