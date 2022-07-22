import { Rocket }from "phosphor-react"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <div className="flex flex-row fixed w-full h-12 bg-zinc-200 items-center top-0">
            
            <div className="flex flex-row w-auto h-auto ml-12 mt-1">
                <Link to={`/`} >
                    <a className="text-justify cursor-pointer font-sans text-lg text-black hover:text-black/80 hover:animate-pulse">
                        <Rocket className="inline mb-2 hover:animate-spin" size={32} /> Ícaro Sperandio
                    </a>
                </Link>
            </div>

            <div className="relative flex flex-row w-auto h-auto mt-1 items-center content-center justify-center left-2/4">
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <Link to={`/sobre`} >
                        <p className="font-sans text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            sobre
                        </p>
                    </Link>
                </button>
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <Link to={`/resumo`} >
                        <p className="font-sans text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            resumo
                        </p>
                    </Link>
                </button>
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <Link to={`/skills`} >
                        <p className="font-sans text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            skills
                        </p>
                    </Link>
                </button>
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <Link to={`/projetos`} >
                        <p className="font-sans text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            projetos
                        </p>
                    </Link>
                </button>
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <Link to={`/contato`} >
                        <p className="font-sans text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            contato
                        </p>
                    </Link>
                </button>
            </div>
        </div>
    )
}