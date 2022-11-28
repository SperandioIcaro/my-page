import { useEffect, useState } from 'react'
import axios from 'axios'
import CardApi from '../lib/CardApi'

interface Data {
    id: number
    name: string
    html_url: string
    description: string
    language: []
}

export function CardProjectApi( ) {
    const [posts, setPosts] = useState<Data[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.github.com/users/SperandioIcaro/repos`)
            .then(response => {
                setPosts(response.data)
                setLoading(false)
                console.log(response.data)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
                console.log(error.message)
            })
    }, [])

    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <h1 className='text-2xl font-bold text-gray-700'>
              Meus Projetos
            </h1>
            
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {posts.map(post => (
                <CardApi key={post.id} {...post}/>
            ))}
        </div>
    )
}