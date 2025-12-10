
"use client";
import ContatoFormPage from "@/app/parts/Componentes/ContatoFormPage";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import { ContentLinks } from "@/app/parts/dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contato = () => {
  return (
    <>
      <HeaderTitle title="Contato" />
      <section id="contato" className="py-8 md:py-16">
        <div className="container mx-auto mb-2 md:mb-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 ">
            <div className="text-sm md:text-xl text-black rounded-xl order-2">
              <div className="text-md md:text-lg p-6 my-3 md:mt-0">
                <div className="text-lg md:text-xl pb-2">
                  <h2 className="font-medium uppercase">
                    Será um prazer te atender!
                  </h2>
                  <p>
                    Preencha nosso formulário ou entre em contato conosco para
                    esclarecer dúvidas ou fazer um orçamento!
                  </p>
                </div>
                <a href={ContentLinks.phone} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-900">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-blue-900 h-10 w-10"
                      />
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
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-blue-900 h-10 w-10"
                      />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">WhatsApp:</div>
                      <div>{ContentLinks.whatsappShow}</div>
                    </div>
                  </div>
                </a>
                <a href={ContentLinks.whatsapp} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-900">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-blue-900 h-10 w-10"
                      />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">E-mail:</div>
                      <div>{ContentLinks.emailShow}</div>
                      <div>{ContentLinks.emailShow2}</div>
                    </div>
                  </div>
                </a>
                <a href={ContentLinks.maps} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-900">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-blue-900 h-10 w-10"
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
            <div className=" order-1">
              <div className="p-6 shadow-xl rounded-xl ">
                <h2 className="font-base text-blue-900 text-xl md:text-2xl my-2 py-4">
                  Entre em contato conosco
                </h2>

                <ContatoFormPage />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="call" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 flex flex-col justify-center">
              
                <h2 className="text-center lg:text-left text-blue-900 text-xl md:text-3xl uppercase font-medium">
                  onde estamos?
                </h2>
                <p className="text-center lg:text-left text-orange-500 md:text-xl py-6">
                  Estamos localizados no Rio de Janeiro, em Niterói e
                  trabalhamos com entregas para todo o Brasil.
                </p>
            </div>
            <div className="w-full md:w-6/12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235523.79345646678!2d-43.70163433417679!3d-22.72603819033608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983670c331d6d%3A0xc0b065bc7e392ed1!2svalvepress!5e0!3m2!1spt-BR!2sbr!4v1673154682664!5m2!1spt-BR!2sbr"
                className="w-full rounded-xl aspect-video b-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy={"no-referrer-when-downgrade"}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};
export default Contato;
