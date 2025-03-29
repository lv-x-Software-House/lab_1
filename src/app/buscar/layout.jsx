import React from "react";

// Cria a função Workspaces_Layout, que vai trazer o layout da página deste caminho
// Dentro da função é quase um "código html", a função traz o prop children
// Esse children será a pagina que estará na rota em questão, nessa questão é o page.jsx devido a estarem no "./lab_1/app/buscar"
export default function Workspaces_Layout({ children }) {
  return (
    // Chama o prop children que nesse caso é o page.jsx para a posição definida, passando que é o elemento
    // principal da página com a tag main
    <main>{children}</main>
  );
}
