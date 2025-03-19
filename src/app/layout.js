import { Inter } from "next/font/google";
import "./globals.css";
//Importação do component Sidebar
import Sidebar from "@/src/components/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

//Definição do metadados da aba.
export const metadata = {
  title: "Lab",
  description: "Laboratório",
};

//Definição do layout.
//Em ordem as seguintes operação:
//1 - Definição do idioma para inglês.
//2 - Import da imagem do IVX para aparecer na aba da página.
//3 - Fontes do google
//4 - Utilização do component Sidebar.
//5 - Posicionamento da page.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://storage.googleapis.com/xerp-test/ivx_placeholder.png" />
      </head>
      <body className={inter.className}>
        
        <div className="flex h-screen">
          <Sidebar/>
          <main className="flex-1 p-4">{children}</main>
        </div>

        </body>
    </html>
  );
}