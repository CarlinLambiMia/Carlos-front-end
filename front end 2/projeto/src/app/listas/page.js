import style from "./lista.module.css"

export default function Listas() {
    const rasas = ["Vira-lata", "Pit-bull", "Shitsu", "Labrador"]

    const rasasObj = [
        {
            id:1,
            rasa:"Vira-lata",
        },
        {
            id:2,
            rasa:"Pit-bull",
        },
        {
            id:3,
            rasa:"Shitsu",
        },
        {
            id:4,
            rasa:"labrador",
        }
    ]

    return(
        <div>
            <h1>Listas</h1>
            <p>{rasasObj[0].rasa}</p>
            <h1>lista comum</h1>
            <ul>
                {rasas.map((rasa, i)=> (
                    <li key={i}> {i+1} - {rasa}</li>
                ))}
            </ul>
            <div>
                <h2>lista de Objetos </h2>
                {rasasObj.map((rasaObj)=> (
                    <div key={rasaObj.id}>
                        <h3>{rasaObj.id}</h3>
                        <p>{rasaObj.rasa}</p>
                    </div>
                ))}
            </div>
            <ul>
                
            </ul>
        </div>
    )
}