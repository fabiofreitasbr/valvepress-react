import Banner from "./parts/Home/Banner";
import NossosProdutos from "./parts/Home/NossosProdutos";
import Parceiros from "./parts/Home/Parceiros";
import Contato from "./parts/Home/Contato";


export default function Home() {
    return (
        <div>
            <Banner />
            <NossosProdutos cor="bg-white" titulo="Nossos Produtos" corTitulo="text-blue-900" corBotao="bg-blue-900 hover:bg-blue-950 text-white" />
            <Parceiros cor="bg-trueGray-200 py-10 md:py-16" titulo="Parceiros" />
            <Contato />
        </div>
    );
}
