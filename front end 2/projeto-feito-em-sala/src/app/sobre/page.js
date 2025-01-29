import style from "./sobre.module.css"

export default function sobre() {
    return(
        <main>
        <h1>Sobre</h1>
        <p className={style.paragrafo}>minha segunda pagina</p>
        <p id ={style.paragrafoUnico}>meu paragrafo especial</p>
        </main>
    )
}
