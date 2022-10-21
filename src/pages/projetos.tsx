import { useEffect, useState } from 'react'
import axios from 'axios'
import CardProjectApi from '../lib/CardProjectApi'

interface Data {
    userId: number
    id: number
    title: string
    body: string
}

export function Projetos() {
    // const [data, setData] = useState<Data[]>([] as Data[]);
    
    // useEffect(() =>{
    //     axios.get<Data[]>('https://api.github.com/users/SperandioIcaro/repos')
    //       .then(({ data }) => {
    //         setData(data)
    //       })
    //   }, [])
    
    return (
        <div>
            <span>
                Você está ma pagina de Projetos!
            </span> 
            {/* <ul >
                {data.map(card => 
                <li  key={card.id}>
                    <div >
                        <div >
                            <CardProjectApi id={card.id} />
                        </div>
                    </div> 
                </li>
            )}
            </ul> */}
        </div>
    )
}