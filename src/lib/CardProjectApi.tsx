import axios from 'axios';
import { useEffect, useState } from 'react';

interface Data {
    id: number
    name: string
    html_url: string
    description: string
}
interface Icard {
    id: number
}
export default function CardProjectApi({id}:Icard) {
  const [post, setPost] = useState<any>({} as Data);
  
    useEffect(() =>{
        axios.get('https://api.github.com/users/SperandioIcaro/repos')
          .then(({data}) => {
             setPost(data);
          })
      }, [])

    return ;
}