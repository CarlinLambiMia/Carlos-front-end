import style from './props.module.css'
import Card from '@/components/Card'

export default function props() {

    const dogs = [
        {
            id:1,
            nome:'Perigo',
            raca: 'Vira-lata',
            peso:1.5,
            cor:'Branco'
        },
        {
            id:2,
            nome:'Black',
            raca: 'Pit-bull',
            peso:1.3,
            cor:'Preto'
        },
        {
            id:3,
            nome:'Nico',
            raca: 'Vira-lata',
            peso:1.4,
            cor:'Amarelo'
        }
    ]

    return(
        <div>
            <h1>props</h1>
            <div>
                {dogs.map((dog) =>(
                    <Card key={dog.id} nome = {dog.nome} raca = {dog.raca} peso = {dog.peso} cor = {dog.cor} />
                ))}
            </div>
        </div>
    )
}