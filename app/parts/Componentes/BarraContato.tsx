import { faPhone } from "@fortawesome/free-solid-svg-icons";
import RedesSociais from "./RedesSociais";
import { ContentLinks } from "@/app/parts/dados/contentLinks";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function BarraContato() {
  return (
    <div className="h-10 py-2 bg-orange-500 w-full relative">
      <div className="container px-4 mx-auto justify-between flex items-center">
        <div className="flex items-center justify-center ">
          <RedesSociais
            cor="text-white"
            hover="hover:text-blue-900"
            estilo="flex relative "
          />
        </div>
        <div className="font-medium  md:px-5 bg-orange text-xs md:text-sm flex md:gap-4 uppercase text-white">
          <a href={ContentLinks.whatsapp} target="_blank">
            <div className="flex justify-start items-center text-xs md:text-sm hover:text-blue-900">
              <div className="px-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="  w-5 h-5 sm:w-6 sm:h-6 2xl:w-4 2xl:h-4"
                />
              </div>
              <div>
                <div className="hidden lg:block">{ContentLinks.emailShow}</div>
              </div>
            </div>
          </a>
          <a href={ContentLinks.whatsapp} target="_blank">
            <div className="flex justify-start items-center text-xs md:text-sm hover:text-blue-900">
              <div className="px-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className=" w-5 h-5 sm:w-6 sm:h-6 2xl:w-4 2xl:h-4"
                />
              </div>
              <div>
                <div className="hidden lg:block">{ContentLinks.phoneShow}</div>
              </div>
            </div>
          </a>
          <a href={ContentLinks.whatsapp} target="_blank">
            <div className="flex justify-start items-center text-xs md:text-sm hover:text-blue-900">
              <div className="px-2">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="  w-5 h-5 sm:w-6 sm:h-6 2xl:w-4 2xl:h-4"
                />
              </div>
              <div>
                <div className="hidden md:block">{ContentLinks.whatsappShow}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
