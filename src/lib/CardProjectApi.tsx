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
    <div 
      key={post.id}  
      className='flex flex-col items-center justify-center pt-10'
    >
      <ul>
        <li key={post.id}>
          <span>{post.name}</span>
          <span>{post.html_url}</span>
          <span>{post.description}</span>
          <span>{post.language}</span>
        </li>
      </ul>
    </div>
  )
}