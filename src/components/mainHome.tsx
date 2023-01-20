import { LightbulbFilament, WhatsappLogo } from "phosphor-react";
import LigthPhoto from "../assets/profilePhotos/lightMode.png"
import DarkPhoto from "../assets/profilePhotos/darkMode.png"
import gsap from "gsap";
import React from "react";

export function Main() {
    const [dark, setDark] = React.useState(!true);
    const darkMode = () => setDark(!dark);

    return (
        
            <div className="
                    flex flex-col-reverse w-full max-h-min items-center
                    xl:flex-row xl:mt-14 xl:justify-around xl:p-6 xl:-ml-4
                    lg:flex-row lg:mt-12 lg:justify-around lg:p-6 lg:-ml-4
                    md:flex-row md:justify-around md:mt-10
                    ">
        
                <div className="
                        flex flex-col w-11/12 -mt-10 z-10 mr-2
                        xl:w-auto xl:h-full xl:m-8
                        md:m-0 md:w-1/4
                        ">

                    <div className="
                            flex w-32 h-14 ml-4 -mb-2 relative rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-none items-center bg-gradient-to-tl from-blue-700 via-blue-500 to-cyan-300 justify-center shadow-xl
                            xl:flex xl:w-44 xl:h-20 xl:m-0 
                            dark:bg-gradient-to-tl dark:from-gray-700 dark:via-gray-600 dark:to-gray-500
                            ">
                        <p className="
                                font-sans font-bold text-3xl text-white text-center
                                xl:text-4xl
                                dark:text-black
                                ">
                            Olá! <LightbulbFilament className="inline mb-1" size={32} color="#fbff00" />
                        </p>
                    </div>

                    <h3 className="
                            font-Press w-48 leading-10 text-4xl text-justify m-4 mb-0 text-black z-10
                            xl:m-1 xl:text-5xl xl:w-64
                            dark:text-white
                            ">
                        Meu nome é Ícaro!
                    </h3>

                    <p className="
                            text-xl text-left text-black w-80 m-4 -mb-4
                            xl:m-1 xl:w-96 xl:text-2xl xl:mb-0
                            dark:text-white
                            ">
                    Sou um desenvolvedor front-end e estudante de análise e desenvolvimento de sistemas e design de games!
                    </p>

                    <div className="
                            max-w-min h-auto flex flex-row justify-between items-center left-0 p-0
                            xl:mr-0  xl:w-full xl:-mt-4
                            lg:mr-0  lg:w-full
                            md:mr-0  md:w-full
                        ">

                        <button className="
                                    flex w-48 h-14 border-2 border-solid border-white rounded-lg pb-16 mt-8 cursor-pointer justify-center shadow-xl  shadow-gray-700/50 bg-gradient-to-br from-blue-700 to-blue-500 mx-1 hover:animate-pulse
                                    
                                    dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-500 dark:shadow--100/50
                                " >
                            <a href="https://cdn2.hubspot.net/hubfs/22201216/CV%20Icaro%20Sperandio.pdf" download="CV Icaro Sperandio" target="_blank" rel="noreferrer">
                                <p className="font-mono font-bold text-xl text-center text-slate-200 dark:text-slate-700 mt-5">
                                    Baixar CV
                                </p>
                            </a>
                        </button>

                        <button className="
                                flex w-48 h-14 border-2 border-solid border-white rounded-lg pb-16 mt-8 cursor-pointer justify-center shadow-xl shadow-gray-700/50 bg-gradient-to-bl from-green-700 to-emerald-500 mx-1 hover:animate-pulse
                                md:-mr-44
                                dark:bg-gradient-to-bl dark:from-gray-700 dark:to-gray-500 dark:shadow--100/50
                        " >
                            <a href="https://wa.me/5527996561579" target='_blank'>
                                <p className="font-mono font-bold text-xl text-center text-slate-200 mt-4  ">
                                    Chama no <WhatsappLogo className="inline" size={32} />
                                </p>
                            </a>
                        </button>

                    </div>
                </div>
                <div className="flex center m-0
                xl:right-4
                lg:right-2
                md:right-0
                 ">
                    
                    <img className="
                            flex w-80 h-auto mt-4 -mb-8 ml-4 
                            xl:flex xl:w-[700px] xl:h-auto xl:m-1
                            lg:flex lg:w-[400px] lg:h-[400px] lg:m-12
                            md:w-72 md:h-72 
                            "
                        src={dark ? DarkPhoto : LigthPhoto} alt="astronauta" />
                </div>
            </div>
    )
}