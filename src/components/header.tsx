import { Rocket }from "phosphor-react"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <div className="
            flex flex-row bg-zinc-200 items-center top-0 justify-between w-full
            xl:h-16 xl:px-16 xl:w-full
            md:h-14 md:px-12 
            
            shadow-lg
            ">
            
            <div className="
                flex flex-row w-48 h-auto items-center justify-evenly
                ">
                <Link to={`/`} className="flex" >
                    <Rocket className="
                                        flex hover:animate-spin -ml-16
                                        xl:mx-2
                                        md:mx-4
                                        " 
                            size={32} />
                    <a className="
                        hidden
                        xl:flex xl:text-justify xl:cursor-pointer xl:font-sans xl:text-lg xl:mt-1 xl:text-black xl:hover:text-black/80 xl:hover:animate-pulse
                        md:flex md:text-justify md:cursor-pointer md:font-sans md:text-lg md:mt-1 md:text-black md:hover:text-black/80 md:hover:animate-pulse
                        "> Ícaro Sperandio
                    </a>
                    {/* <a className="
                        flex text-justify cursor-pointer font-sans text-lg text-black hover:text-black/80 hover:animate-pulse 
                        xl:hidden
                        
                        ">
                        <Rocket className="inline -ml-14 mb-2 hover:animate-spin" size={32} />
                    </a> */}
                </Link>
            </div>

            <div className="
                flex w-full -ml-24
                xl:relative xl:flex xl:flex-row xl:w-auto xl:h-auto xl:items-center xl:content-center xl:justify-center
                md:m-0 md:right-0 md:justify-end md:items-center md:content-center md:flex-row md:w-auto md:h-auto md:ml-0
                ">
                <button className="relative flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer">
                    <Link to={`/sobre`} >
                        <p className="font-sans lg:font-normal font-bold text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            sobre
                        </p>
                    </Link>
                </button>
                <button className="relative flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer">
                    <Link to={`/skills`} >
                        <p className="font-sans lg:font-normal font-bold text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            skills
                        </p>
                    </Link>
                </button>
                <button className="relative flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer">
                    <Link to={`/projetos`} >
                        <p className="font-sans lg:font-normal font-bold text-lg text-black content-end hover:text-cyan-600 hover:animate-pulse">
                            projetos
                        </p>
                    </Link>
                </button>
            </div>
        </div>
    )
}