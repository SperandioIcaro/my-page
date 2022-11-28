import { PushPin } from "phosphor-react"

interface Data {
    id: number
    name: string
    html_url: string
    description: string
    language: []
}

export default function CardApi(post: Data) {
  

  return (
    <div className='flex flex-col w-11/12 h-auto justify-center p-4 my-4 bg-white rounded-lg shadow-lg'
    >
        <a href={post.html_url} target='_blank' rel='noreferrer'>
            <ul className="flex flex-col w-full">
                <li key={post.name}>
                    <div className="flex flex-col w-full items-start ">
                        <h2 className="text-lg font-bold">
                            {post.name}
                        </h2>
                        <span className="text-base mt-3" >
                            {post.description}
                        </span>
                    </div>
                    <div className="flex flex-row justify-end items-end bottom-0 mb-0">
                        <div className="flex '{selectColor}' rounded-2xl w-auto h-6 p-0 items-center" >
                            <small className="flex text-right text m-4 right-0" >
                                {post.language} 
                                <PushPin size={14} />
                            </small>
                        </div>
                    </div>
                </li>
            </ul>
        </a>
    </div>
  )
}