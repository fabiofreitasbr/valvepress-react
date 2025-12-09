import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "ValvePress",
    description: "A ValvePress oferece soluções industriais completas em válvulas, purgadores, filtros e automação, garantindo qualidade, segurança e suporte técnico especializado para diversos setores.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
