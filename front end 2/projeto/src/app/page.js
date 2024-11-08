//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'carlos'
  return (
    <div>
      <h1>Página principal</h1>
      <p>Paragrafo da pagina principal</p>
      <p>Nome: {nome}</p>
      <Image className={styles.imagem} src='/images/download.jpg' alt='imagem aleatoria' width={600} height={400}></Image>
    </div>
  );
}
