import { ArrowSquareOut } from "phosphor-react";

interface Data {
    curso: string;
    emissao: string;
    link: string;
}

export default function Certificado(info: Data) {
    return (
        <div className="flex flex-col m-2">
            <p className=" 
                mb-0 text-lg font-inco underline
                xl:text-2xl font-normal
                md:text-xl md:mb-1
            ">
                {info.curso}
            </p>
            <span className="
                        font-sans text-base font-bold
                        xl:text-lg
                ">
                Emitido em {info.emissao}
            </span>
            <a 
                href={info.link} 
                target="_blank" 
                className="
                    flex flex-row self-end h-min w-22 justify-end items-center text-base font-sans text-right lowercase hover:text-blue-700
                    xl:text-lg xl:-mt-6
                    
                ">
                Exibir credencial<ArrowSquareOut size={16} className="inline -mt-4" />
            </a>
        </div>
    )
}