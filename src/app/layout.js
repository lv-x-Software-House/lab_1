import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/src/components/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lab",
  description: "Laboratório",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://storage.googleapis.com/xerp-test/ivx_placeholder.png" />
      </head>
      <body className={inter.className}>
        <div className="flex h-screen">
          {/* Sidebar fixo na esquerda */}
          <Sidebar />  
          {/* Conteúdo da página */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
