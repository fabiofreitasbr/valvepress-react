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
  const bgColor = cor;
  const textColor = corTitulo;
  const Title = titulo;
  const colorButton = corBotao;

  const primeiraFileira = ContentCategorias.slice(0, 3);
  const segundaFileira = ContentCategorias.slice(3, 7);

  return (
    <section id="produtos" className={`${bgColor} py-10`}>
      <div className="container mx-auto py-2 px-4">
        <div className="my-4 text-center">
          <h2
            className={`${textColor} text-orange-500 uppercase font-medium text-xl sm:text-2xl xl:text-3xl pt-4`}
          >
            {Title}
          </h2>
        </div>

        <div className="container mx-auto my-4 px-4 space-y-6">
          {/* Primeira fileira  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6 md:max-w-[80%] mx-auto">
            {primeiraFileira.map((serviceSingle) => (
              <div
                key={serviceSingle.slug}
                className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl text-center flex flex-col items-center justify-center text-blue-900 font-brandon uppercase py-6 px-4 sm:p-4 ]"
              >
                <a href={serviceSingle.href} className="flex flex-col items-center">
                  <Image
                    src={serviceSingle.img}
                    alt=""
                    className="w-20 md:w-30 lg:w-40 py-2"
                  />
                  <div className="flex flex-col">
                    <p className="py-2 uppercase text-xs sm:text-sm  font-medium">
                      {serviceSingle.text}
                    </p>
                    <p className="py-1 text-orange-500 uppercase text-xs sm:text-sm md:text-base font-medium">
                      {serviceSingle.qtd}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Segunda fileira */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-6 ">
            {segundaFileira.map((serviceSingle) => (
              <div
                key={serviceSingle.slug}
                className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl text-center flex flex-col items-center justify-center text-blue-900 font-brandon uppercase py-6 px-4 sm:p-4 ]"
              >
                <a href={serviceSingle.href} className="flex flex-col items-center">
                  <Image
                    src={serviceSingle.img}
                    alt=""
                    className="w-20 md:w-30 lg:w-40 py-2"
                  />
                  <div className="flex flex-col">
                    <p className="py-2 uppercase text-xs sm:text-sm  font-medium">
                      {serviceSingle.text}
                    </p>
                    <p className="py-1 text-orange-500 uppercase text-xs sm:text-sm md:text-base font-medium">
                      {serviceSingle.qtd}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <a href={ContentLinks.whatsapp}>
          <button
            className={`${colorButton} transition-all hover:opacity-90 flex items-center font-medium rounded-full my-6 py-2 px-8 md:px-10 mx-auto text-base sm:text-lg uppercase shadow-md`}
          >
            Entrar em contato
          </button>
        </a>
      </div>
    </section>
  );
}
