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
              <Image src={Equipe} className="w-2/3 lg:w-1/2 mx-auto " alt="" />
            </div>
            <div className="lg:w-3/6 text-zinc-600  ">
              <div className="text-base text-justify md:text-left md:text-2xl text-zinc-700 font-reading">
                <h2 className="text-xl md:text-2xl py-4 text-blue-900 uppercase font-bold">
                  Nossa História
                </h2>
                <p className="mb-4">
                  Somos uma empresa contemporânea que já nasceu com o know-how
                  de mais de 50 anos no ramo industrial. Investimos no
                  aprimoramento de nossos colaboradores e enxergamos os desafios
                  como grandes oportunidades de crescimento.
                </p>

                <p className="">
                  Atuamos como distribuidora exclusiva dos principais produtos
                  industriais, como Purgadores de Vapor e Ar-comprimido,
                  Válvulas de Controle e Instrumentação, Válvulas de Retenção,
                  Válvulas de Descarga, Válvulas de Segurança, Válvulas de
                  Alívio e Pressão com Corta-chamas, Visores de Fluxo,
                  Separadores Centrífugos e Filtros, etc.
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
