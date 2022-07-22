import { LightbulbFilament, WhatsappLogo } from "phosphor-react";

export function Main() {
    return (
        <div className="flex-column w-auto h-full mt-24 mb-6 ml-40 bg-transparent">
            <div className="w-auto h-full flex-col m-2">

                <div className="flex w-40 h-12 relative rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-none items-center bg-gradient-to-tl from-blue-700 via-blue-500 to-cyan-300 justify-center shadow-xl" >
                    <p className="font-sans font-bold text-3xl text-white text-center">
                        Olá! <LightbulbFilament className="inline" size={32} color="#fbff00" />
                    </p>
                </div>

                <h3 className="font-Press w-48 leading-10 text-4xl text-justify m-1 text-black">
                    Meu nome é Ícaro!
                </h3>

                <p className="font-inco text-xl text-justify m-1 text-black w-96">
                Sou um desenvolvedor front-end e estudante de análise e desenvolvimento de sistemas e design de games!
                </p>

                <div className="w-auto h-auto flex flex-row content-between items-center right-0">

                    <button className="flex w-44 h-14 border-2 border-solid border-white rounded-lg pb-16 mt-8 cursor-pointer justify-center shadow-xl  shadow-gray-700/50 bg-gradient-to-br from-blue-700 to-blue-500 mx-2 hover:invert-0" >
                        <a href="https://cdn2.hubspot.net/hubfs/22201216/CV%20Icaro%20Sperandio.pdf" download="CV Icaro Sperandio" target="_blank" rel="noreferrer">
                            <p className="font-mono font-bold text-xl text-center text-slate-200 mt-5">
                                Baixar CV
                            </p>
                        </a>
                    </button>

                    <button className="relative flex w-44 h-14 border-2 border-solid border-white rounded-lg pb-16 mt-8 cursor-pointer justify-center shadow-xl shadow-gray-700/50 bg-gradient-to-bl from-green-700 to-emerald-500 mx-2 hover:invert-0 " >
                        <p className="font-mono font-bold text-xl text-center text-slate-200 mt-4">
                            Chama no <WhatsappLogo className="inline" size={32} />
                        </p>
                    </button>

                </div>
            </div>

        </div>
    )
}