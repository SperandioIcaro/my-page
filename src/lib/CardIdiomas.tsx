interface Data {
    idioma: string;
    nivel: 'Nativo' | 'Fluente' | 'Avançado' | 'Intermediário' | 'Básico';
}

export default function CardIdiomas(info: Data) {
    return (
        <div className="flex flex-col m-2 capitalize">
            <p className=" 
                mb-0 text-lg font-inco underline
                xl:text-2xl font-normal
                md:text-xl md:mb-1
            ">
                {info.idioma}
            </p>
            <span className="
                        font-sans text-base font-bold text-left ml-12
                        xl:text-lg xl:ml-14
                ">
                {info.nivel}
            </span> 
        </div>
    )
}