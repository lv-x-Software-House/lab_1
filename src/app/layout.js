// Faz a importação de fonte, os estilos css e do sidebar
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/src/components/sidebar/sidebar";

// Cria uma variavel inter para a Fonte Inter que foi importada
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lab",
  description: "Laboratório",
};

// Cria a função rootLayout, que vai trazer o layout da página deste caminho
// Dentro da função é quase um "código html", a função traz o prop children
// Esse children será a pagina que estará na rota em questão, nessa questão é o page.js devido a estarem no "./lab_1/app/"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Traz o logo do navegador */}
        <link
          rel="icon"
          href="https://storage.googleapis.com/xerp-test/ivx_placeholder.png"
        />
      </head>
      {/* Usa a "variavel" inter como um obejeto, assim fazendo com que o Body todo esteja com a fonte inter */}
      <body className={inter.className}>
        <div className="flex h-screen">
          {/* Chama o componente sideBar para a posição definida a cima */}
          <Sidebar />

          {/* Chama o prop children que nesse caso é o page.js para a posição definida, passando que é o elemento */}
          {/* principal da página com a tag main */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
