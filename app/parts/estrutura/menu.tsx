"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/public/img/logo.png";
import Iso9001 from "@/public/img/parceiros/iso9001.png";
import nbr from "@/public/img/parceiros/nbr.png";
import nbr28300 from "@/public/img/parceiros/nbr28300.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBoxesStacked, faChevronDown, faChevronUp, faFaucetDrip, faFlaskVial, faGasPump, faIndustry, faSeedling, faShip, faWineGlass } from "@fortawesome/free-solid-svg-icons" //faBoxesStacked, faFaucetDrip, faFlaskVial, faGasPump, faIndustry, faSeedling, faShip, faWineGlass

export default function Menu() {
    const namePath = usePathname();
    const menuFlutuante = namePath == "/" ? "bg-blue-900" : "bg-blue-900";

    const [menuActive, setMenuActive] = useState("");
    const [menuNavigation, setMenuNavigation] = useState("-right-full");
    const [menuProduct, setMenuProduct] = useState(false);
    const [menuSegment, setMenuSegment] = useState(false);

    const menuBurger = () => {
        const currentActive = menuActive == "" ? "is-active" : "";
        const currentNavigation = menuActive == "" ? "right-0" : "-right-full";
        setMenuActive(currentActive);
        setMenuNavigation(currentNavigation);

    };
    const handleEnterProduct = () => {
        setMenuProduct(true);
        setMenuSegment(false); // fecha o dropdown de segmentos
    };

    const handleEnterSegment = () => {
        setMenuSegment(true);
        setMenuProduct(false); // fecha o dropdown de produtos
    };


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);


    return (
        <>
            <header
                className={
                    "w-full h-20  z-50 flex relative" +
                    (namePath == "/"
                        ? "bg-blue-900 "
                        : " bg-blue-900 ") +
                    menuFlutuante
                }
            >
                <div className="container mx-auto px-4 h-full relative">
                    <div className="flex justify-between items-center h-full gap-2 md:gap-4 lg:gap-10">
                        <div className="flex items-center ">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    className="h-14 md:h-18 w-auto object-contain"
                                    alt="Logo - ValvePress"
                                />
                            </Link>
                            <Image
                                src={Iso9001}
                                className="h-8 w-8 md:h-12 md:w-12 object-contain "
                                alt="Logo - Iso9001"
                            />
                            <Image src={nbr} className="h-8 w-8 md:h-12 md:w-12 object-contain" alt="Logo - nbr" />
                            <Image
                                src={nbr28300}
                                className="h-8 w-8 md:h-12 md:w-8 object-contain"
                                alt="Logo - nbr28300"
                            />
                        </div>
                        <nav className="items-center flex  ">
                            <ul className="hidden md:flex items-center text-xs  xl:text-base  2xl:gap-8 uppercase font-normal lg:gap-4">
                                <li className="px-3 lg:px-0">
                                    <Link
                                        href="/"
                                        className={
                                            "text-white hover:text-orange-500" +
                                            (namePath == "/"
                                                ? "  border-b-2 py-4 border-orange-500 "
                                                : "")
                                        }
                                    >
                                        {" "}
                                        Início
                                    </Link>
                                </li>
                                <li className="text-center px-3 lg:px-0">
                                    <Link
                                        onClick={menuBurger}
                                        href="/quem-somos"
                                        className="text-white text-center hover:text-orange-500 transition-all  place-items-center"
                                    >
                                        <div
                                            className={
                                                namePath === "/quem-somos"
                                                    ? "border-b-2 border-orange-500 py-2 "
                                                    : ""
                                            }
                                        > 
                                        </div>
                                        Quem Somos
                                    </Link>
                                </li>

                                <li className="relative px-3 lg:px-0  text-center " onMouseEnter={handleEnterProduct}


                                >
                                    <div className="flex flex-wrap items-center relative gap-1 " >
                                        <Link
                                            href=""
                                            onClick={() => {
                                                setIsOpen(!isOpen);
                                                setIsOpen2(false); // fecha o outro menu
                                            }}
                                            className=
                                            "text-white hover:text-orange-500 flex items-center gap-2"

                                        >
                                            <div className="w-auto lg:w-18 xl:w-auto">Linhas de Produtos</div>
                                            <FontAwesomeIcon
                                                className="md:w-3 md:h-3 xl:w-4 xl:h-4"
                                                icon={faChevronDown}
                                            />
                                        </Link>
                                    </div>
                                    {menuProduct && (
                                        <div className="absolute z-20 left-0 mt-2 2xl:w-120 bg-white border-t-2  border-orange-500 grid grid-col 2xl:grid-cols-2 text-start" onMouseLeave={() => setMenuProduct(false)}  >
                                            <ul className="py-2">
                                                <li>
                                                    <Link
                                                        href="/tipos/equipamentos-de-seguranca"
                                                        className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                    >
                                                        Equipamentos de Segurança
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/tipos/filtros-para-tubulacoes"
                                                        className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                    >
                                                        Filtros para tubulações
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/tipos/purgadores-para-vapor-e-ar-comprimido"
                                                        className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                    >
                                                        Purgadores para vapor e ar comprimido
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/tipos/valvulas-de-controle"
                                                        className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                    >
                                                        Válvulas de controle
                                                    </Link>
                                                </li>

                                            </ul>
                                            <ul className="py-2">
                                                <li>
                                                    <Link
                                                        href="/tipos/valvulas-de-descarga-continua-e-periodica"
                                                        className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                    >
                                                        Válvulas de descarga contínua e periódica
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/tipos/valvulas-de-seguranca-e-alivio"
                                                        className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                    >
                                                        Válvulas de segurança de alívio
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/tipos/visores-de-fluxo"
                                                        className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                    >
                                                        Visores de fluxo
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li className="relative px-3 lg:px-0  text-center text-white"  >
                                    <ul>
                                        <Link href=""
                                            onMouseEnter={handleEnterSegment}
                                            className="text-white hover:text-orange-500 flex items-center gap-2"

                                        >
                                            <div className="w-auto lg:w-18 xl:w-auto">Segmentos atendidos</div>
                                            <FontAwesomeIcon
                                                className="md:w-3 md:h-3 xl:w-4 xl:h-4"
                                                icon={faChevronDown}
                                            />

                                        </Link>

                                        {menuSegment && (
                                            <div className="absolute z-20 left-0 mt-2 2xl:w-120 bg-white border-t-2  border-orange-500 grid grid-col 2xl:grid-cols-2 text-start" onMouseLeave={() => setMenuSegment(false)}   >
                                                <ul className="py-2">
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/biocombustiveis"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center ">
                                                                <FontAwesomeIcon
                                                                    className="w-4 h-4 px-2 text-blue-900"
                                                                    icon={faSeedling}
                                                                /> Biocombustíveis
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/sucroalcooleiro"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center ">
                                                                <FontAwesomeIcon
                                                                    className="w-4 h-4 px-2 text-blue-900"
                                                                    icon={faIndustry}
                                                                /> Sucroalcooleiro ou Sucroenergético</div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/terminais"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center "><FontAwesomeIcon
                                                                className="w-4 h-4 px-2 text-blue-900"
                                                                icon={faBoxesStacked}
                                                            />  Terminais</div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/refinarias"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center "><FontAwesomeIcon
                                                                className="w-4 h-4 px-2 text-blue-900"
                                                                icon={faIndustry}
                                                            />   Refinarias</div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/distribuidoras"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center ">
                                                                <FontAwesomeIcon
                                                                    className="w-4 h-4 px-2 text-blue-900"
                                                                    icon={faGasPump}
                                                                />  Distribuidoras e Transportadoras de Combustíveis
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul className="py-2">
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/industria"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center "><FontAwesomeIcon
                                                                className="w-4 h-4 px-2 text-blue-900"
                                                                icon={faFlaskVial}
                                                            />  Indústria e Química e Petroquímica</div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/alimentos"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center "><FontAwesomeIcon
                                                                className="w-4 h-4 px-2 text-blue-900"
                                                                icon={faWineGlass}
                                                            />  Alimentos e Bebidas</div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/saneamento"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center ">
                                                                <FontAwesomeIcon
                                                                    className="w-4 h-4 px-2 text-blue-900"
                                                                    icon={faFaucetDrip}
                                                                />   Saneamento
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={menuBurger}
                                                            href="/segmentos/embarcacoes"
                                                            className="block px-4 py-2 text-orange-500 hover:bg-gray-200 text-xs font-medium"
                                                        >
                                                            <div className="flex items-center "><FontAwesomeIcon
                                                                className="w-4 h-4 px-2 text-blue-900"
                                                                icon={faShip}
                                                            />   Embarcações e Tanques Flutuantes</div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}

                                    </ul>
                                </li>
                                <li className="px-3 lg:px-0">
                                    <Link
                                        href="/contato"
                                        className={
                                            "text-white hover:text-orange-500" +
                                            (namePath == "/contato"
                                                ? " border-b-2 py-4 border-orange-500"
                                                : "")
                                        }
                                    >
                                        {" "}
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex items-center gap-x-4 md:hidden">
                                <div className="z-20 block md:hidden " onClick={menuBurger}>
                                    <div className={"hamburger hamburger--squeeze " + menuActive}>
                                        <div className="hamburger-box">
                                            <div className="hamburger-inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header >
            <nav
                className={
                    "block md:hidden z-40 w-full h-screen bg-blue-900 text-base text-white fixed top-26 px-6 pt-10 transition-all duration-300 ease-in-out  " +
                    menuNavigation
                }
            >
                <div className="container mx-auto">
                    <ul className="flex flex-col gap-5 xl:gap-10 md:text-base lg:text-xl font-medium">
                        <li>
                            <Link
                                onClick={menuBurger}
                                href="/"
                                className={
                                    "text-white hover:text-orange-500 transition-all " +
                                    (namePath == "/" ? " border-b-2 py-1 border-orange-500" : "")
                                }
                            >
                                {" "}
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={menuBurger}
                                href="/quem-somos"
                                className={
                                    "text-white hover:text-orange-500 transition-all " +
                                    (namePath == "/quem-somos"
                                        ? " border-b-2 py-1 border-orange-500"
                                        : "")
                                }
                            >
                                {" "}
                                Quem Somos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={""}
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                    setIsOpen2(false); // fecha o outro menu
                                }}
                                className={
                                    "" +
                                    (namePath == "/categoria"
                                        ? " border-b-2 border-orange-500"
                                        : "")
                                }
                            >
                                <span className="mr-2">Linhas de produtos</span>
                                {isOpen ? <FontAwesomeIcon className="md:w-3 md:h-3 xl:w-4 xl:h-4" icon={faChevronUp} /> : <FontAwesomeIcon className="md:w-3 md:h-3 xl:w-4 xl:h-4" icon={faChevronDown} />}
                            </Link>

                            {isOpen && (
                                <div className="mt-2">
                                    <ul className="py-2">
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/tipos/equipamentos-de-seguranca"
                                                className="block px-4 py-2 text-white hover:text-orange-500 text-xs font-medium"
                                            >
                                                Equipamentos de Segurança
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/tipos/filtros-para-tubulacoes"
                                                className="block px-4 py-2 text-white hover:text-orange-500 text-xs font-medium"
                                            >
                                                Filtros para tubulações
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/tipos/purgadores-para-vapor-e-ar-comprimido"
                                                className="block px-4 py-2 text-white hover:text-orange-500 text-xs font-medium"
                                            >
                                                Purgadores para vapor e ar comprimido
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/tipos/valvulas-de-controle"
                                                className="block px-4 py-2 text-white hover:text-orange-500 text-xs font-medium"
                                            >
                                                Válvulas de controle
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/tipos/valvulas-de-descarga-continua-e-periodica"
                                                className="block px-4 py-2 text-white hover:text-orange-500 text-xs font-medium"
                                            >
                                                Válvulas de descarga contínua e periódica
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/tipos/valvulas-de-seguranca-e-alivio"
                                                className="block px-4 py-2 text-white hover:text-orange-500 text-xs font-medium"
                                            >
                                                Válvulas de segurança de alívio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/tipos/visores-de-fluxo"
                                                className="block px-4 py-2 text-white hover:text-orange-500 text-xs font-medium"
                                            >
                                                Visores de fluxo
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <Link
                                href={"#"}
                                onClick={() => {
                                    setIsOpen2(!isOpen2);
                                    setIsOpen(false); // fecha o dropdown de produtos
                                }}
                                className={
                                    "" +
                                    (namePath == "/categoria"
                                        ? " border-b-2 border-orange-500"
                                        : "")
                                }
                            >
                                <span className="mr-2"> Segmentos atendidos</span>
                                {isOpen2 ? <FontAwesomeIcon className="md:w-3 md:h-3 xl:w-4 xl:h-4" icon={faChevronUp} /> : <FontAwesomeIcon className="md:w-3 md:h-3 xl:w-4 xl:h-4" icon={faChevronDown} />}
                            </Link>

                            {isOpen2 && (
                                <div className="mt-2">
                                    <ul className="py-2">
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/biocombustiveis"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center ">
                                                    <FontAwesomeIcon
                                                        className="w-4 h-4 px-2 text-white"
                                                        icon={faSeedling}
                                                    /> Biocombustíveis
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/sucroalcooleiro"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center ">
                                                    <FontAwesomeIcon
                                                        className="w-4 h-4 px-2 text-white"
                                                        icon={faIndustry}
                                                    /> Sucroalcooleiro ou Sucroenergético</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/terminais"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center "><FontAwesomeIcon
                                                    className="w-4 h-4 px-2 text-white"
                                                    icon={faBoxesStacked}
                                                />  Terminais</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/refinarias"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center "><FontAwesomeIcon
                                                    className="w-4 h-4 px-2 text-white"
                                                    icon={faIndustry}
                                                />   Refinarias</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/distribuidoras"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center ">
                                                    <FontAwesomeIcon
                                                        className="w-4 h-4 px-2 text-white"
                                                        icon={faGasPump}
                                                    />  Distribuidoras e Transportadoras de Combustíveis
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/industria"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center "><FontAwesomeIcon
                                                    className="w-4 h-4 px-2 text-white"
                                                    icon={faFlaskVial}
                                                />  Indústria e Química e Petroquímica</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/alimentos"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center "><FontAwesomeIcon
                                                    className="w-4 h-4 px-2 text-white"
                                                    icon={faWineGlass}
                                                />  Alimentos e Bebidas</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/saneamento"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center ">
                                                    <FontAwesomeIcon
                                                        className="w-4 h-4 px-2 text-white"
                                                        icon={faFaucetDrip}
                                                    />   Saneamento
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => {
                                                    menuBurger();
                                                    setIsOpen(false);
                                                    setIsOpen2(false);
                                                }}
                                                href="/segmentos/embarcacoes"
                                                className="block px-4 py-2 text-white text-xs font-medium"
                                            >
                                                <div className="flex items-center "><FontAwesomeIcon
                                                    className="w-4 h-4 px-2 text-white"
                                                    icon={faShip}
                                                />   Embarcações e Tanques Flutuantes</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </li>
                        <li>
                            <Link
                                onClick={menuBurger}
                                href="/contato"
                                className={
                                    "text-white hover:text-orange-500 transition-all " +
                                    (namePath == "/contato"
                                        ? " border-b-2 py-1 border-orange-500"
                                        : "")
                                }
                            >
                                {" "}
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
