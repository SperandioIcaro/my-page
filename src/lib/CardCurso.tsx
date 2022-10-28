interface Data {
    curso: string;
    local: string;
    localLink: string;
    status: boolean
    dataConclusao: string;
}

export default function CardCurso(info: Data) {
    return(
        <div className="flex flex-col m-2 capitalize">
            <p className=" 
                mb-3 text-lg font-inco underline
                xl:text-2xl font-normal
            ">
                {info.curso}.
            </p>
            <div className="flex flex-row justify-between mb-4">
                <a 
                    href={info.localLink} 
                    target="_blank" 
                    className="
                        font-sans text-base font-bold hover:text-cyan-400
                        xl:text-lg
                ">
                    {info.local}
                </a>
                <span className="
                    text-base text-yellow-700 uppercase
                    xl:text-lg xl:font-light
                ">
                    {info.status ? `concluído em  ${info.dataConclusao}`: "em andamento"}
                </span>
            </div>
        </div>
        )
    }