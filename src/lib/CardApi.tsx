import axios from 'axios';
import { useEffect, useState } from 'react';

interface Data {
    id: number
    name: string
    html_url: string
    description: string
    language: string
}
interface Icard {
    id: number
}
export default function CardApi({id}:Icard) {
  const [post, setPost] = useState<any>({} as Data);
  
    useEffect(() =>{
        axios.get(`https://api.github.com/users/SperandioIcaro/repos/${id}`)
          .then(({data}) => {
             setPost(data);
          })
      }, [])

    return (
        
        <>
            <div key={id}>
                <a href={``} target='_blank'>
                <ul>
                    {/* {data((data: Data) => ( */}
                        <li key={post.name}>
                            <span>{post.description}</span>
                            <span>{post.language}</span>
                            
                        </li>
                    {/* ))} */}
                </ul>
                </a>
            </div>
        </>
        
    );
}