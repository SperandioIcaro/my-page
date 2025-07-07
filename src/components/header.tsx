import { Moon, Rocket, Sun }from "phosphor-react"
import React from "react";
import { Link } from "react-router-dom"

export function Header() {
    const [dark, setDark] = React.useState(!true);
    const darkMode = () => setDark(!dark);
    
    function toggleTheme(e: any) {
        e.preventDefault();
        darkMode();
        if (dark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    return (
        
            <div 
                className="
                    flex flex-row bg-zinc-200 items-center top-0 justify-between w-full h-16 shadow-lg
                    xl:h-12 xl:px-16 xl:w-full
                    md:h-14 md:px-12
                    dark:bg-blue-900
                ">
                
                <div className="
                        flex flex-row w-auto h-auto items-center justify-evenly
                        dark:text-white
                    ">
                    <Link to={`/`} className="flex items-center" >
                        <Rocket className="
                                    flex hover:animate-spin ml-3
                                    xl:mx-2
                                    md:mx-4
                                    " 
                                size={32} />
                        <a className="
                            hidden
                            xl:flex xl:text-justify xl:cursor-pointer xl:text-2xl xl:mt-1 xl:text-black xl:hover:text-black/80 xl:hover:animate-pulse
                            md:flex md:text-justify md:cursor-pointer md:text-xl md:mt-1 md:text-black md:hover:text-black/80 md:hover:animate-pulse
                            "> Ícaro Sperandio
                        </a>
                    </Link>
                </div>
                
                <div className="flex flex-row dark:text-white bg-zinc-200 right-0">
                    <div className="
                            flex 
                            xl:relative xl:flex xl:flex-row xl:w-auto xl:h-auto xl:items-center xl:content-center xl:justify-center xl:
                            md:m-0 md:right-0 md:justify-end md:items-center md:content-center md:flex-row md:w-auto md:h-auto md:ml-0 md:mr-10  md:text-xl
                        ">
                        <button className="relative flex box-content w-auto h-0 border-none my-5 mx-2 items-center content-center justify-center p-1 cursor-pointer">
                            <Link to={`/sobre`} >
                                <p className=" text-2xl text-black content-end hover:text-cyan-600 hover:animate-pulse">
                                    sobre
                                </p>
                            </Link>
                        </button>
                        <button className="relative flex box-content w-auto h-0 border-none my-5 mx-2 items-center content-center justify-center p-1 cursor-pointer">
                            <Link to={`/skills`} >
                                <p className=" text-2xl text-black content-end hover:text-cyan-600 hover:animate-pulse">
                                    skills
                                </p>
                            </Link>
                        </button>
                        <button className="relative flex box-content w-auto h-0 border-none my-5 mx-2 items-center content-center justify-center p-1 cursor-pointer">
                            <Link to={`/projetos`} >
                                <p className=" text-2xl text-black content-end hover:text-cyan-600 hover:animate-pulse">
                                    repositório
                                </p>
                            </Link>
                        </button>
                    </div>
                    {/* <div className="flex w-auto ml-10 justify-center items-center dark:text-white"
                        onClick={e => toggleTheme(e)}>
                        <div
                        className="hover:animate-spin transition duration-700 cursor-pointer -mr-8 ">
                            {dark  ? <Sun size={32} /> : <Moon size={32} />}
                        </div>
                    </div> */}
                </div>
            </div>
        
    )
}