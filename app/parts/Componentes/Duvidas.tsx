import Link from "next/link";

export default function Duvidas() {
    return (
        <section id="duvidas" className="bg-gray-100 py-10 md:py-16">
            <div className="container mx-auto px-4 ">
                <div className="block lg:flex">
                    <div className=" lg:w-7/12">
                        <h3 className="text-center lg:text-left text-blue-900 text-xl md:text-3xl uppercase py-4 font-medium">
                            Possui alguma dúvida?
                        </h3>
                        <p className="text-center lg:text-left text-orange-500 md:text-xl">
                            Nós temos a melhor válvula para o seu negócio!
                        </p>
                    </div>
                    <div className="lg:w-5/12">
                        <Link href="/contato">
                            <button type="button" className="bg-blue-900 hover:bg-blue-950 transition text-white font-medium rounded-full my-4 py-2 md:py-3 px-8 md:px-10 xl:px-16 block text-lg mx-auto uppercase ">
                                Solicite um orçamento
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}