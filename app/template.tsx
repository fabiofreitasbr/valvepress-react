import BarraContato from "./parts/Componentes/BarraContato";
import Footer from "./parts/estrutura/Footer";
import Menu from "./parts/estrutura/menu";

export default function Template({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BarraContato />
            <Menu />
            {children}
            <Footer />
        </>
    )
}