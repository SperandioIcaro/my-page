import { Rocket }from "phosphor-react"

export function Header() {
    return (
        <div className="flex flex-row fixed w-full h-12 bg-zinc-200 items-center top-0">
            
            <div className="flex flex-row w-auto h-auto ml-12 mt-1">
                <a className="text-justify cursor-pointer font-sans text-lg text-black hover:text-black/80 ">
                    <Rocket className="inline mb-2" size={32} /> Ícaro Sperandio
                </a>
            </div>

            <div className="relative flex flex-row w-auto h-auto mt-1 items-center content-center justify-center left-2/4">
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <p className="font-sans text-lg text-black content-end hover:text-zinc-400">
                        sobre
                    </p>
                </button>
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <p className="font-sans text-lg text-black content-end hover:text-zinc-400">
                        resumo
                    </p>
                </button>
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <p className="font-sans text-lg text-black content-end hover:text-zinc-400">
                        skills
                    </p>
                </button>
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <p className="font-sans text-lg text-black content-end hover:text-zinc-400">
                        projetos
                    </p>
                </button>
                <button className="flex box-content w-8 h-0 border-none m-5 items-center content-center justify-center p-1 cursor-pointer ">
                    <p className="font-sans text-lg text-black content-end hover:text-zinc-400">
                        contato
                    </p>
                </button>
            </div>
        </div>
    )
}