import { LightbulbFilament, WhatsappLogo } from "phosphor-react";
import Astrounaut from "../assets/astronautCachAPizza.jpg"

export function Main() {
    return (
        <div className="
            md:flex-column w-full bg-transparent
            flex flex-row h-auto mt-36 justify-around items-center p-10"
            >
            <div className="flex w-auto h-full flex-col m-12">

                <div className="
                lg:flex lg:w-32 lg:h-12 lg:m-0 relative rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-none items-center bg-gradient-to-tl from-blue-700 via-blue-500 to-cyan-300 justify-center shadow-xl
                flex w-28 h-10 ml-4 -mb-2
                ">
                    <p className="font-sans font-bold text-3xl text-white text-center">
                        Olá! <LightbulbFilament className="inline" size={32} color="#fbff00" />
                    </p>
                </div>

                <h3 className="
                    font-Press w-48 leading-10 text-4xl text-justify lg:m-1 text-black
                    m-4
                    ">
                    Meu nome é Ícaro!
                </h3>

                <p className="font-inco text-xl text-justify lg:m-1 text-black lg:w-96
                    w-80 m-4 -mb-4
                    ">
                Sou um desenvolvedor front-end e estudante de análise e desenvolvimento de sistemas e design de games!
                </p>

                <div className="w-auto h-auto flex flex-row content-between items-center right-0">

                    <button className="flex w-44 h-14 border-2 border-solid border-white rounded-lg pb-16 mt-8 cursor-pointer justify-center shadow-xl  shadow-gray-700/50 bg-gradient-to-br from-blue-700 to-blue-500 mx-2 hover:animate-pulse" >
                        <a href="https://cdn2.hubspot.net/hubfs/22201216/CV%20Icaro%20Sperandio.pdf" download="CV Icaro Sperandio" target="_blank" rel="noreferrer">
                            <p className="font-mono font-bold text-xl text-center text-slate-200 mt-5">
                                Baixar CV
                            </p>
                        </a>
                    </button>

                    <button className="relative flex w-44 h-14 border-2 border-solid border-white rounded-lg pb-16 mt-8 cursor-pointer justify-center shadow-xl shadow-gray-700/50 bg-gradient-to-bl from-green-700 to-emerald-500 mx-2 hover:animate-pulse" >
                        <a href="https://wa.me/5527988569001" target='_blank'>
                            <p className="font-mono font-bold text-xl text-center text-slate-200 mt-4">
                                Chama no <WhatsappLogo className="inline" size={32} />
                            </p>
                        </a>
                    </button>

                </div>
            </div>
            <div>
                <img className="flex w-96 h-96 rounded-full shadow-xl m-12 rotate-45" src={Astrounaut} alt="astronauta" />
            </div>

        </div>
    )
}