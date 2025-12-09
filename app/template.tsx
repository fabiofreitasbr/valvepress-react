"use client";
import BarraContato from "./parts/Componentes/BarraContato";
import Footer from "./parts/estrutura/Footer";
import Menu from "./parts/estrutura/menu";
import { usePathname } from 'next/navigation';


export default function Template({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  // rotas onde  NÃO quer mostrar menu/footer

  const hideLayoutRoutes = ['/landingPage']; // ajuste conforme  rota 
  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <BarraContato />}
      {!shouldHideLayout && <Menu />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
}