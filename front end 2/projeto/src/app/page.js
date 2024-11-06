//import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'carlos'
  return (
    <div>
      <h1>Página principal</h1>
      <p>Paragrafo da pagina principal</p>
      <p>Nome: {nome}</p>
    </div>
  );
}
