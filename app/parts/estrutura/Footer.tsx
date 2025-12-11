import RedesSociais from "@/app/parts/Componentes/RedesSociais";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/img/logo.png";
import { ContentLinks } from "../dados/contentLinks";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Kls from "@/public/credits/kls-full-white.png";

export default function Rodape() {
    return (
        <>
            <footer className="bg-blue-900  py-2 md:py-8 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0  lg:gap-8  ">
                        <Link href="/" className="sm:col-span-2 md:col-span-3 lg:col-span-1">
                            <Image
                                src={Logo}
                                alt="logo"
                                className="mx-auto my-4 ls-is-cached lazyloaded"
                            />
                        </Link>
                        <div className="my-4 md:my-0 flex flex-col items-center justify-center md:items-start sm:text-start    md:text-left  text-white mx-auto">
                            <h3 className=" text-white py-3 text-2xl mr-0 sm:mr-10 md:mr-0">Menu</h3>
                            <div className="mr-0 sm:mr-20 md:mr-0"><hr className="w-6 mb-4 border border-solid border-orange-500" /></div>

                            <ul className="flex flex-col text-center sm:text-start text-base font-light 2xl:text-lg">
                                <li className="py-1">
                                    <Link href="/" className="text-white hover:text-orange-500">
                                        Início
                                    </Link>
                                </li>
                                <li className="py-1">
                                    <Link
                                        href="/quem-somos"
                                        className="text-white hover:text-orange-500"
                                    >
                                        Quem somos
                                    </Link>
                                </li>
                                <li className="py-1">
                                    <Link href="/" className="text-white hover:text-orange-500">
                                        Produtos
                                    </Link>
                                </li>

                                <li className="py-1">
                                    <Link
                                        href="/contato"
                                        className="text-white hover:text-orange-500"
                                    >
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="my-4 md:my-0 flex flex-col items-center sm:items-start text-center sm:text-start   md:text-left  text-white  break-normal md:break-all">
                            <h3 className=" text-white py-3 text-2xl ">Contato</h3>
                            <hr className="w-6 mb-4 border border-solid border-orange-500" />
                            <a
                                href={ContentLinks.email}
                                className="hover:text-orange-500 transition "
                            >
                                <div className="flex gap-2  items-center md:items-start xl:items-center sm:text-start  text-base font-light 2xl:text-lg py-1 md:max-w-[210px] xl:max-w-[400px]">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 md:mt-1.5 xl:mt-0" />
                                    {ContentLinks.emailShow}
                                </div>
                            </a>
                            <a
                                href={ContentLinks.phone}
                                target="_blank"
                                className="hover:text-orange-500 transition"
                            >
                                <div className="flex gap-2 items-center text-base font-light 2xl:text-lg py-1">
                                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                                    {ContentLinks.phoneShow}
                                </div>
                            </a>
                            <a
                                href={ContentLinks.whatsapp}
                                target="_blank"
                                className="hover:text-orange-500 transition"
                            >
                                <div className="flex gap-2 items-center text-base font-light 2xl:text-lg py-1">
                                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                                    {ContentLinks.whatsappShow}
                                </div>
                            </a>
                        </div>
                        <div className="sm:col-span-2 md:col-span-1 my-4 md:my-0 flex flex-col items-center text-center md:text-left md:block text-white ">
                            <h3 className=" py-3 text-2xl">Redes sociais</h3>
                            <hr className="w-6 mb-4 border border-solid border-orange-500 " />
                            <div>
                                <RedesSociais
                                    cor="text-white py-2"
                                    hover="hover:text-orange-500 "
                                    estilo="flex flex-row justify-center gap-3 lg:gap-6 justify-start"
                                />
                            </div>
                            <a href="https://www.agenciakls.com.br/" target="_blank">
                                <div className="flex justify-center lg:justify-start gap-3 mt-8">
                                    <div className="text-sm">
                                        Desenvolvido por
                                    </div>
                                    <Image src={Kls} width="64" height="24" className="w-16" alt="Logo da Agência KLS" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="h-10 bg-orange-500 flex items-center justify-center">
                <p className="text-xs sm:text-sm font-light text-white text-center uppercase">
                    valvepress - Todos os direitos reservados
                </p>
            </div>
        </>
    );
}
