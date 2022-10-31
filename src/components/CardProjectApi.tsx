import { useEffect, useState } from 'react'
import axios from 'axios'
import CardApi from '../lib/CardApi'

interface Data {
  id: number
  name: string
  html_url: string
  description: string
  language: string
}

export default function CardsGroup() {
    const [data, setData] = useState<Data[]>([] as Data[]);
    
    useEffect(() =>{
        axios.get<Data[]>('https://api.github.com/users/SperandioIcaro/repos/')
          .then(({ data }) => {
            setData(data)
          })
      }, [])
    
    return (  
      <div>
        <h1>Pagina de projetos</h1>
        <ul >
            {data.map(card => 
            <li  key={card.id}>
                <div >
                    <div >
                        <CardApi id={card.id} />
                    </div>
                </div> 
            </li>
        )}
        </ul>
      </div>
    )

}