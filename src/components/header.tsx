import { Rocket }from "phosphor-react"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <div className="2xl:flex md:flex md:flex-row fixed w-full h-12 bg-zinc-200 items-center top-0 justify-between container">
            
            <div className="flex flex-row w-auto h-auto 2xl:ml-12 md:ml-1 mt-1">
                <Link to={`/`} >
                    <a className="text-justify cursor-pointer font-sans text-lg text-black hover:text-black/80 hover:animate-pulse">
                        <Rocket className="inline mb-2 hover:animate-spin" size={32} /> Ícaro Sperandio
                    </a>
                </Link>
            </div>

            <div className="relative 2xl:flex flex flex-row w-auto h-auto mt-1 items-center content-center justify-center 2xl:mr-10 -right-20">
                <button className="relative 2xl:flex md:flex box-content w-8 h-0 border-none 2xl:m-5 m-2 items-center content-center justify-center p-1 cursor-pointer -top-12 ">
                    <Link to={`/sobre`} >
                        <p className="font-sans text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            sobre
                        </p>
                    </Link>
                </button>
                <button className="relative 2xl:flex md:flex box-content w-8 h-0 border-none 2xl:m-5 m-2 items-center content-center justify-center p-1 cursor-pointer -top-12 ">
                    <Link to={`/skills`} >
                        <p className="font-sans text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            skills
                        </p>
                    </Link>
                </button>
                <button className="relative 2xl:flex md:flex box-content w-8 h-0 border-none 2xl:m-5 m-2 items-center content-center justify-center p-1 cursor-pointer -top-12 ">
                    <Link to={`/projetos`} >
                        <p className="font-sans text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            projetos
                        </p>
                    </Link>
                </button>
            </div>
        </div>
    )
}