import axios from 'axios';
import { useEffect, useState } from 'react';

interface Data {
    id: number
    name: string
    html_url: string
    description: string
    language: []
}
interface Icard {
    id: number
}

export default function CardProjectApi({id}:Icard) {
  const [post, setPost] = useState<any>({} as Data);
  
  useEffect(() => {
    axios.get(`https://api.github.com/repos/SperandioIcaro/${id}`)
      .then(({data}) => {
        setPost(data);
      })
  }, [])

  return (
    <div className='flex flex-col items-center justify-center pt-10'>
      <span>
        Você está ma pagina de Projetos!
      </span>
      <ul id={post} >
        <li className='' key={post.id}>
          <div className='flex flex-col items-center justify-center pt-10'>
            <span>
              {post.name}
            </span>
            <span>
              {post.description}
            </span>
            <span>
              {post.language}
            </span>
            <span>
              {post.html_url}
            </span>
          </div>
        </li>
      </ul>
    </div>
  )    
}