import ContatoFormHome from "../../parts/Componentes/ContatoFormHome";
import { ContentLinks } from "../../parts/dados/contentLinks";
import NossosProdutos from "../../parts/Home/NossosProdutos";
import Image from "next/image";
import Duvidas from "@/app/parts/Componentes/Duvidas";
import {
  faBoxesStacked,
  faEnvelope,
  faFaucetDrip,
  faFlaskVial,
  faGasPump,
  faIndustry,
  faLocationDot,
  faPhone,
  faSeedling,
  faShip,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContatoFormHome2 from "@/app/parts/Componentes/ContatoFormPage";
import Logo from "@/public/img/logo.png";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <header className="h-20 bg-blue-900 ">
        <div className="container mx-auto px-4 text-white h-full">
          <div className="flex justify-between items-center h-full">
            <div className="logo">
              <Link href="/">
                <Image src={Logo} className="h-10md:h-12 lg:h-16" alt="" />
              </Link>
            </div>
            <div className="flex items-center">
              <a href={ContentLinks.phone} target="_blank">
                <button className="flex justify-center items-center  bg-orange-500 py-2 px-2 md:px-4 mx-4 rounded-full text-lg text-white font-brandon">
                  <FontAwesomeIcon icon={faPhone} className="h-3 md:h-6 mx-2" />
                  <span className="hidden lg:block">
                    {ContentLinks.phoneShow}
                  </span>
                </button>
              </a>

              <a href={ContentLinks.whatsapp} target="_blank">
                <button className="flex justify-center items-center  bg-orange-500 py-2 px-2 md:px-4 mx-4 rounded-full text-lg text-white font-brandon">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-3 md:h-6 mx-2" />
                  <span className="hidden lg:block">
                    {ContentLinks.phoneShow}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="banner bg-[url('/img/banner-landing.png')] bg-no-repeat bg-cover bg-center min-h-40 sm:min-h-64 md:min-h-72 lg:min-h-80 xl:min-h-96 2xl:min-h-104 py-8 flex justify-center items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="text-sm md:text-xl text-black rounded-xl flex align-items justify-center h-full flex-col lg:pr-48">
              <h2 className="text-white text-center md:text-left text-3xl md:text-4xl lg:text-5xl uppercase leading-tight font-bold  my-2 md:my-2 ">
                <span className="text-orange-500">Válvulas</span> e equipamentos
              </h2>
              <h3 className="text-white text-center md:text-left text-xl md:text-2xl lg:text-3xl uppercase leading-tight  my-2 md:my-2 ">
                para todos os{" "}
                <span className="text-orange-500">segmentos industriais</span>
              </h3>
            </div>
            <div>
              <div
                role="form"
                className="wpcf7"
                id="wpcf7-f6-o1"
                lang="pt-BR"
                dir="ltr"
              >
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true"></p>
                  <ul></ul>
                </div>
                <ContatoFormHome />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="servicos" className="my-10">
        <div className="container mx-auto px-4">
          <h2 className="text-orange-500 text-center uppercase font-medium text-xl md:text-3xl my-2">
            Válvulas da nossa linha de fabricação
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 my-10">
            <div className="bg-[url('/img/produtos/valvula-descarga/ds.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/visores-fluxo/gc.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/valvula-seguranca/hc.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/equipamentos-seguranca/la11.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/equipamentos-seguranca/le.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/equipamentos-seguranca/lt111.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/equipamentos-seguranca/lv.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/valvula-controle/sp.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/valvula-controle/sr.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
            <div className="bg-[url('/img/produtos/purgadoresta.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl"></div>
          </div>
          <div className="w-full">
            <a href={ContentLinks.whatsappShow}>
              <button
                type="button"
                className="bg-blue-900 hover:bg-blue-950 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-lg mx-auto uppercase"
              >
                quero saber mais
              </button>
            </a>
          </div>
        </div>
      </section>
      <NossosProdutos
        cor="bg-blue-900"
        titulo="Famílias de Válvulas"
        corTitulo="text-white my-2"
        corBotao="bg-white text-blue-900"
      />
      <div id="segmentos" className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="w-auto flex gap-8 ">
            <div className=" order-2">
                <h2 className="text-blue-900 uppercase font-medium text-sm  md:text-2xl xl:text-3xl my-2">
                  Segmentos Atentidos
                </h2>
              <div className=" bg-white grid grid-cols-2 gap-2 text-start">
                <div className="py-2">
                  <div>
                    <Link
                      href="/segmentos/biocombustiveis"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faSeedling}
                        />{" "}
                        Biocombustíveis
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/segmentos/sucroalcooleiro"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faIndustry}
                        />{" "}
                        Sucroalcooleiro ou Sucroenergético
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/segmentos/terminais"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faBoxesStacked}
                        />{" "}
                        Terminais
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/segmentos/refinarias"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faIndustry}
                        />{" "}
                        Refinarias
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/segmentos/distribuidoras"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faGasPump}
                        />{" "}
                        Distribuidoras e Transportadoras de Combustíveis
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="py-2">
                  <div>
                    <Link
                      href="/segmentos/industria"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faFlaskVial}
                        />{" "}
                        Indústria e Química e Petroquímica
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/segmentos/alimentos"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faWineGlass}
                        />{" "}
                        Alimentos e Bebidas
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/segmentos/saneamento"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faFaucetDrip}
                        />{" "}
                        Saneamento
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/segmentos/embarcacoes"
                      className="block py-2 text-orange-500  text-sm md:text-xl font-medium"
                    >
                      <div className="flex items-center ">
                        <FontAwesomeIcon
                          className="w-10 h-10 pr-2 text-blue-900"
                          icon={faShip}
                        />{" "}
                        Embarcações e Tanques Flutuantes
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/4 h-full flex flex-col gap-4 ">
              <div className="flex gap-4">
                <Image
                  src={"/seg-1.jpeg"}
                  className="w-full rounded-xl"
                  alt=""
                  width={100}
                  height={400}
                />
                <Image
                  src={"/seg-2.jpeg"}
                  className="w-full rounded-xl"
                  alt=""
                  width={100}
                  height={400}
                />
              </div>
              <div>
                <Image
                  src={"/seg-3.png"}
                  className="w-full h-full rounded-xl"
                  alt=""
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sobre" className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="block md:flex md:flex-row-reverse items-center">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={"/img/equipe-tecnica.png"}
                className="w-2/3 rounded-xl"
                alt=""
                width={600}
                height={400}
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-center md:text-left text-lg md:text-2xl xl:text-3xl text-blue-900 uppercase font-bold my-4">
                A VALVEPRESS
              </h3>
              <h3 className="text-center md:text-left text-sm md:text-base xl:text-xl text-orange-500 uppercase font-bold my-4">
                QUEM SOMOS
              </h3>
              <p className="text-center md:text-left text-base md:text-lg xl:text-xl my-4 font-open font-medium">
                Somos uma empresa contemporânea que já nasceu com o know-how de
                mais de 50 anos no ramo industrial. Investimos no aprimoramento
                de nossos colaboradores e enxergamos os desafios como grandes
                oportunidades de crescimento. Atuamos Como Fabricante De
                Equipamentos Industriais, Tais Como:<span className="font-bold"> VÁLVULA DE ALÍVIO DE
                PRESSÃO E VÁCUO COM CORTA-CHAMAS, VÁLVULA DE SEGURANÇA, VÁLVULA
                DE CONTROLE, PROTETORES DE TUBULAÇÃO, RESPIROS DE EMERGÊNCIA,
                CABEÇA DE SUSPIRO PARA TANQUES E EMBARCAÇÕES.</span>
              </p>
              <p className="text-center md:text-left text-base md:text-lg xl:text-xl my-4 font-open font-medium">
                Dispomos de uma vasta linha de produtos, onde primamos pela
                qualidade total em nossos processos de fabricação. Nossos
                equipamentos são notadamente reconhecidos pelos nossos clientes
                (usuários), como referência no tocante à qualidade/durabilidade,
                e eficiência operacional. <span className="font-bold">Certificações: ( ISO 9001:2015 | NBR
                16852 | NBR 28300 ).</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
      <section id="contato" className="min-h-140 py-4 md:py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="lg:px-10">
              <div className=" p-6 shadow-xl rounded-xl">
                <h3 className="font-base text-blue-900  text-xl md:text-2xl my-2 py-4">
                  Entre em contato conosco
                </h3>
                <ContatoFormHome2 />
              </div>
            </div>
            <div className="text-sm md:text-xl text-black rounded-xl">
              <div className="  rounded-xl text-lg p-6 my-3 md:mt-0 text-md md:text-lg ">
                <div className="text-lg md:text-xl pb-2">
                  <h3 className="font-bold uppercase">
                    Será um prazer te atender!
                  </h3>
                  <p>
                    Preencha nosso formulário ou entre em contato conosco para
                    esclarecer dúvidas ou fazer um orçamento!
                  </p>
                </div>
                <a href={ContentLinks.phone} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-900">
                      <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">Telefone:</div>
                      <div>{ContentLinks.phoneShow}</div>
                    </div>
                  </div>
                </a>
                <a href={ContentLinks.whatsapp} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-900">
                      <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">WhatsApp:</div>
                      <div>{ContentLinks.whatsappShow}</div>
                    </div>
                  </div>
                </a>
                <a href={ContentLinks.email} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-900">
                      <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">E-mail:</div>
                      <div>{ContentLinks.emailShow}</div>
                    </div>
                  </div>
                </a>
                <a href={ContentLinks.maps} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-900">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">Endereço:</div>
                      <div>{ContentLinks.address1}</div>
                      <div>{ContentLinks.address2}</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Duvidas />
      <footer id="footer" className="bg-blue-900 py-2 text-white font-brandon">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="block">
              <Link href="/">
                <Image
                  alt=""
                  data-src="/img/logo.png"
                  width={300}
                  height={200}
                  className="mx-auto my-4 ls-is-cached lazyloaded"
                  src="/img/logo.png"
                />
                <noscript>
                  <Image src="/img/logo.png" alt="" width={300} height={200} />
                </noscript>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="pos-footer bg-orange-500 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="text-center text-xl md:text-sm uppercase py-1 font-medium">
            ValvePress - Todos os direitos reservados
          </div>
        </div>
      </div>
    </>
  );
}
