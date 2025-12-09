
import { ContentCategorias } from "../dados/contentCategorias";
import Image from "next/image";
import { ContentLinks } from "../dados/contentLinks";

interface PropsBg {
    cor: string;
    corTitulo: string;
    titulo: string;
    corBotao: string;
}
export default function NossosProdutos({ cor, titulo, corTitulo, corBotao }: PropsBg) {
    const bgColor = cor; //passar cor como props para reutilizar em outra pag.
    const textColor = corTitulo; //passar texto como props para reutilizar em outra pag.
    const Title = titulo; //passar cor titulo props para reutilizar em outra pag.
    const colorButton = corBotao; //passar cor titulo props para reutilizar em outra pag.

    return (
        <section id="produtos" className={`${bgColor} "py-10`} >
            <div className="container mx-auto py-2 px-4   ">
                <div className="my-4 text-center">
                    <h2 className={` ${textColor} text-orange-500 uppercase font-medium text-xl md:text-3xl pt-4`}>
                        {Title}
                    </h2>
                </div>

                <div className="container mx-auto my-4 px-4 ">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex md:flex-wrap  justify-center gap-4 w-full h-full">
                        {ContentCategorias.map((serviceSingle) => (
                            <div
                                key={serviceSingle.slug}
                                className={` bg-white border-2 border-gray-100 shadow-xl rounded-3xl text-center flex flex-col items-center justify-center text-blue-900 font-brandon uppercase py-6 px-4 p-1 sm:p-4   lg:w-1/5`}
                            >
                                <a href={serviceSingle.href} className="flex flex-col items-center">
                                    <Image src={serviceSingle.img} alt="" className="w-2/3 py-2" />
                                    <div className=" flex flex-col ">
                                        <div className=" ">
                                            <p className="py-2 uppercase text-xs md:text-base font-medium lg:text-sm">
                                                {serviceSingle.text}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="py-1 text-orange-500 uppercase text-xs md:text-base font-medium">
                                                {serviceSingle.qtd}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <a href={ContentLinks.whatsapp} ><button className={` ${colorButton} transition  flex items-center font-medium rounded-full my-6 py-2 px-8 md:px-10 mx-auto md:block text-base md:text-lg uppercase`} >
                    entrar em contato
                </button></a>
            </div>
        </section >
    );
}
