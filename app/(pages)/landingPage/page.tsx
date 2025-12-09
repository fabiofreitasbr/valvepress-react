import ContatoFormHome from "../../parts/Componentes/ContatoFormHome";
import { ContentLinks } from "../../parts/dados/contentLinks";
import NossosProdutos from "../../parts/Home/NossosProdutos";
import Image from "next/image";
import Duvidas from "@/app/parts/Componentes/Duvidas";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContatoFormHome2 from "@/app/parts/Componentes/ContatoFormPage";
import Logo from "@/public/img/logo.png";


export default function LandingPage() {
    return (
        <>
        <header className="h-20 bg-blue-900 ">
                <div className="container mx-auto px-4 text-white h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="logo">
                            <a href="/"><Image src={Logo} className="h-[2.5rem] md:h-[3rem] lg:h-[4rem]" alt="" /></a>
                        </div>
                        <div className="flex items-center">
                            <a href={ContentLinks.phone} target="_blank">
                                <button className="flex justify-center items-center  bg-orange-500 py-2 px-2 md:px-4 mx-4 rounded-full text-lg text-white font-brandon">
                                    <FontAwesomeIcon icon={faPhone} className=" mx-2" />
                                    <span className="hidden lg:block">{ContentLinks.phoneShow}</span>
                                </button>
                            </a>

                            <a href={ContentLinks.whatsapp} target="_blank">
                                <button className="flex justify-center items-center  bg-orange-500 py-2 px-2 md:px-4 mx-4 rounded-full text-lg text-white font-brandon">
                                    <FontAwesomeIcon icon={faWhatsapp} className=" mx-2" />
                                    <span className="hidden lg:block">{ContentLinks.phoneShow}</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        <div className="banner bg-[url('/img/banner-landing.png')] bg-no-repeat bg-cover bg-center min-h-[10rem] sm:min-h-[16rem] md:min-h-[18rem] lg:min-h-[20rem] xl:min-h-[24rem] 2xl:min-h-[26rem] py-8 flex justify-center items-center">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <div className="text-sm md:text-xl text-black rounded-xl flex align-items justify-center h-full flex-col lg:pr-48">
                        <h2 className="text-white text-center md:text-left text-3xl md:text-4xl lg:text-5xl uppercase leading-tight font-bold  my-2 md:my-2 "><span className="text-orange-500">Válvulas</span> e
                            equipamentos</h2>
                        <h3 className="text-white text-center md:text-left text-xl md:text-2xl lg:text-3xl uppercase leading-tight  my-2 md:my-2 ">para todos os <span className="text-orange-500">segmentos industriais</span></h3>
                    </div>
                    <div>
                        <div role="form" className="wpcf7" id="wpcf7-f6-o1" lang="pt-BR" dir="ltr">
                            <div className="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                <ul></ul>
                            </div>
                            <ContatoFormHome  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="servicos" className="my-10">
            <div className="container mx-auto px-4">
                <h2 className="text-orange-500 text-center uppercase font-medium text-xl md:text-3xl my-2">algumas válvulas que trabalhamos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 my-10">
                    <div
                        className="bg-[url('/img/produtos/valvula-descarga/ds.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/visores-fluxo/gc.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/valvula-seguranca/hc.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/equipamentos-seguranca/la11.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/equipamentos-seguranca/le.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/equipamentos-seguranca/lt111.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/equipamentos-seguranca/lv.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/valvula-controle/sp.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/valvula-controle/sr.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                    <div
                        className="bg-[url('/img/produtos/purgadoresta.png')] bg-contain bg-center bg-no-repeat h-24 sm:h-32 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                    </div>
                </div>
                <div className="w-full">
                    <a href={ContentLinks.whatsappShow}>
                        <button type="button"
                            className="bg-blue-900 hover:bg-blue-950 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-lg mx-auto uppercase">quero saber mais</button>
                    </a>
                </div>
            </div>
        </section>
        <NossosProdutos cor="bg-blue-900" titulo="Nossos Produtos" corTitulo="text-white" corBotao="bg-white text-blue-900"/>
        <div id="sobre" className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="block md:flex md:flex-row-reverse items-center">
                    <div className="md:w-1/2 flex justify-center">
                        <Image src={"/img/equipe-tecnica.png"} className="w-2/3 rounded-xl" alt="" width={600}
                            height={400} />
                    </div>
                    <div className="md:w-1/2">
                        <h3
                            className="text-center md:text-left text-lg md:text-2xl xl:text-3xl text-blue-900 uppercase font-bold my-4">A VALVEPRESS</h3>
                        <p className="text-center md:text-left text-base md:text-lg xl:text-xl my-4 font-open font-medium">Somos uma empresa contemporânea que já nasceu com o know-how de mais de 50 anos no ramo industrial. Investimos no aprimoramento de nossos colaboradores e enxergamos os desafios como grandes oportunidades de crescimento.</p>
                        <p className="text-center md:text-left text-base md:text-lg xl:text-xl my-4 font-open font-medium">Atuamos como distribuidora exclusiva dos principais produtos industriais, como Purgadores de Vapor e Ar-comprimido, Válvulas de Controle e Instrumentação, Válvulas de Retenção, Válvulas de Descarga, Válvulas de Segurança, Válvulas de Alívio e Pressão com Corta-chamas, Visores de Fluxo, Separadores Centrífugos e Filtros, etc.</p>
                    </div>
                </div>
            </div>
        </div>
        <section id="contato" className="min-h-[35rem] py-4 md:py-10">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div className="lg:px-10">
                    <div className=" p-6 shadow-xl rounded-xl">
                        <h3 className="font-base text-blue-900  text-xl md:text-2xl my-2 py-4">Entre em contato conosco</h3>
                        <ContatoFormHome2  />
                    </div>
                </div>
                <div className="text-sm md:text-xl text-black rounded-xl">
                    <div className="  rounded-xl text-lg p-6 my-3 md:mt-0 text-md md:text-lg ">
                        <div className="text-lg md:text-xl pb-2">
                            <h3 className="font-bold uppercase">Será um prazer te atender!</h3>
                            <p>Preencha nosso formulário ou entre em contato conosco para esclarecer dúvidas ou fazer um orçamento!</p>
                        </div>
                        <a href={ContentLinks.phone} target="_blank">
                            <div
                                className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
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
                            <div
                                className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
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
                            <div
                                className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
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
                            <div
                                className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                                <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-900">
                                    <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
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
                            <a href="/">
                                <Image alt="" data-src="/img/logo.png" width={300}
                                    height={200} className="mx-auto my-4 ls-is-cached lazyloaded"
                                    src="/img/logo.png" />
                                <noscript>
                                    <Image src="/img/logo.png" alt="" width={300}
                                        height={200} />
                                </noscript>
                            </a>
                        </div>
                    </div>
                </div>
            </ footer>
            <div className="pos-footer bg-orange-500 text-white py-3">
                <div className="container mx-auto px-4">
                    <div className="text-center text-xs md:text-sm uppercase py-1 font-medium">
                        ValvePress - Todos os direitos reservados
                    </div>
                </div>
            </ div>
        </>
    );
}
