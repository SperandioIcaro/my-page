import { LightbulbFilament, WhatsappLogo } from "phosphor-react";
import Astrounaut from "../assets/astronautCachAPizza.jpg"

export function Main() {
    return (
            <div className="
                    flex flex-col-reverse w-full max-h-min items-center
                    xl:flex-row xl:mt-20 xl:justify-around xl:p-6 xl:-ml-4
                    md:flex-row md:justify-evenly md:mt-16 
                    ">
                <div className="
                        flex flex-col w-11/12 -mt-10 z-10 mr-2
                        xl:w-auto xl:h-full xl:m-12
                        md:m-0 md:w-1/4
                        ">

                    <div className="
                            flex w-32 h-14 ml-4 -mb-2 relative rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-none items-center bg-gradient-to-tl from-blue-700 via-blue-500 to-cyan-300 justify-center shadow-xl
                            xl:flex xl:w-44 xl:h-20 xl:m-0 
                            ">
                        <p className="
                                font-sans font-bold text-3xl text-white text-center
                                xl:text-4xl
                                ">
                            Olá! <LightbulbFilament className="inline mb-1" size={32} color="#fbff00" />
                        </p>
                    </div>

                    <h3 className="
                            font-Press w-48 leading-10 text-4xl text-justify m-4 mb-0 text-black z-10
                            xl:m-1 xl:text-5xl xl:w-64
                            ">
                        Meu nome é Ícaro!
                    </h3>

                    <p className="
                            font-inco text-xl text-left text-black w-80 m-4 -mb-4
                            xl:m-1 xl:w-96 xl:text-2xl xl:mb-0
                            ">
                    Sou um desenvolvedor front-end e estudante de análise e desenvolvimento de sistemas e design de games!
                    </p>

                    <div className="w-auto h-auto flex flex-row content-between items-center right-0
                    md:mr-0
                    ">

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
                    <img className="
                            flex w-60 h-60 rounded-full shadow-xl mt-6 rotate-45 z-0
                            xl:flex xl:w-[500px] xl:h-[500px] xl:m-12
                            md:w-96 md:h-96 md:m-12 
                            "
                        src={Astrounaut} alt="astronauta" />
                </div>
            </div>
    )
}