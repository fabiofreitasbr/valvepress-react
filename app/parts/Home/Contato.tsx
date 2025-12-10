import ContatoForm from "@/app/parts/Componentes/ContatoFormHome";
import { ContentLinks } from "@/app/parts/dados/contentLinks";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contato() {
  return (
    <div className="bg-white relative">
      <section id="contato" className="py-8 md:py-16">
        <div className="container mx-auto mb-2 md:mb-6 px-4">
          <div className="text-center">
            <h2 className="text-orange-500 uppercase font-medium text-xl md:text-3xl my-2">
              Entre em contato
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 ">
            <div className="text-sm md:text-xl text-white rounded-xl">
              <div className="text-md md:text-lg p-2 md:p-6 my-3 md:mt-0">
                <div className="text-lg md:text-xl text-center md:text-left pb-2">
                  <h3 className="font-bold text-xl text-blue-900 py-2 uppercase">
                    Quer fazer um orçamento?
                  </h3>
                  <p className="text-orange-500 py-2">
                    Preencha nosso formulário e nós entramos em contato para
                    esclarecer dúvidas ou fazer um orçamento!
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <hr className="border border-gray-100 w-full" />
                  <div className="p-4 text-orange-500 font-medium uppercase">
                    ou
                  </div>
                  <hr className="border border-gray-100 w-full" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
                  <Link
                    href={ContentLinks.phone}
                    className="w-full block"
                    target="_blank"
                  >
                    <button className="flex gap-2 items-center justify-center bg-blue-900 hover:bg-blue-950 font-medium rounded-full py-3 px-2  text-base uppercase transition w-full ">
                      <FontAwesomeIcon icon={faPhone} className="" />
                      LIGUE AGORA{" "}
                      <span className="hidden xl:block">MESMO!</span>
                    </button>
                  </Link>
                  <Link
                    href={ContentLinks.whatsapp}
                    className="w-full block"
                    target="_blank"
                  >
                    <button className="flex gap-2 items-center justify-center bg-lime-500 hover:bg-lime-600 font-medium rounded-full py-3 px-2  text-base uppercase transition w-full">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className=" "
                      />
                      Envie-nos mensagem!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-6 shadow-xl rounded-xl ">
                <h3 className="font-base text-blue-900 text-xl md:text-2xl my-2 py-4">
                  Nós ligamos para você!
                </h3>

                <ContatoForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
