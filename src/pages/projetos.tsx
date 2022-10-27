import { useEffect, useState } from 'react'
import axios from 'axios'
import CardProjectApi from '../lib/CardProjectApi'

interface Data { 
    id: number
    name: string
    html_url: string
    description: string
    language: []
}

export function Projetos() {
    const [data, setData] = useState<Data[]>([] as Data[]);
    
    useEffect(() => {
        axios.get('https://api.github.com/users/SperandioIcaro/repos')
            .then(({data}) => {
                setData(data);
                console.log(data)
            })
    }, [])
   
    
    return (
        <div className='flex flex-col items-center justify-center pt-10'>
            <span>
                Você está ma pagina de Projetos!
            </span> 
            <ul className="">
                {data.map(card => 
                <li className='' key={card.id}>
                    <CardProjectApi id={card.id} />
                </li>
            )}
            </ul>
        </div>
    )
}