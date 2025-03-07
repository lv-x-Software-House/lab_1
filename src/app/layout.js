import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}