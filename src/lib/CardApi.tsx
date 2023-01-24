import { empty } from "@apollo/client"
import { PushPin, Star } from "phosphor-react"

interface Data {
    id: number
    name: string
    html_url: string
    description: string
    language: []
    size: number
    stargazers_count: number
}


export default function CardApi(post: Data) {  

    const starred = post.stargazers_count
    const sizeColor = post.size

    function Stars() {
        if(starred > 0) {
            return (
                    <div className="flex">
                        <Star className="flex z-10 bg-transparent text-yellow-400" size={24} >
                            <small className=" flex z-20 text-red-800">{starred}</small>
                        </Star>
                    </div>
            )
        } else {
            null
    }
}

    function Size() {
        if(sizeColor <= 400) {
            return(
                <small className="self-end -mt-3 ml-1 text-green-600">
                    {sizeColor}kb
                </small>
            )

        } else if(sizeColor <= 999) {
            return(
                <small className="self-end -mt-3 ml-1 text-yellow-600">
                    {sizeColor}kb
                </small>
            )
        } else if(sizeColor > 1000) {
            return(
                <small className="self-end -mt-3 ml-1 text-red-600">
                    {sizeColor}kb
                </small>
            )
        } else {
            null
        }
    }

  return (
    <a href={post.html_url} target='_blank' rel='noreferrer'>            
        <div className='flex flex-col w-full h-44 justify-between p-4 my-4 bg-white rounded-lg shadow-lg border-solid border-blue-600 border'>
            <ul className="flex flex-col justify-between w-full h-full">
                <li key={post.name} className="flex flex-col w-full h-full">
                    <div className="flex flex-row justify-between w-full h-1/3 items-start ">
                        <div className="flex flex-row">
                            <h2 className="text-xl font-bold underline">
                                {post.name}
                            </h2>
                           { Size() }
                        </div>

                        {Stars()}
                        
                        
                    </div>
                    <div className="flex w-10/12 -mt-4 mb-2 h-1/3 items-start">
                        <span className="text-base" >
                            {post.description}
                        </span>
                    </div>
                    <div className="flex flex-row-reverse w-full mt-2 h-1/3 items-end " >
                        <small className="flex text-sm bottom-0 right-0" >
                            {post.language} 
                            <PushPin size={14} />
                        </small>
                    </div>
                </li>
            </ul>
        </div>
    </a>
  )
}