import ts from '../assets/ts.webp'

interface Props {
    title: string
    description: string
    image: string
}

export function CardSkill(props: Props) {
    return(
        <div className="
            flex flex-row border-solid border-spacing-8 rounded-xl shadow-xl bg-zinc-300 lg:w-96 lg:h-24 lg:m-2 max-w-fit
            w-48 h-12 m-2
            ">
            <div className="
                flex w-12 bg-slate-50 rounded-lg items-center justify-center p-1 flex-1 overflow-clip shadow-xl
                xl:w-24
                md:w-24 md:h-24
                ">
                <img src={props.image} className="self-center h-auto w-24"/>
            </div>
            <div className='
                lg:flex lg:w-8 h-auto rounded-xl bg-zinc-300 justify-center items-center lg:hover:w-72 lg:hover:ease-linear lg:hover:duration-200 lg:hover:text-black hover:z-20
                hidden
                '>

                <div className="
                    lg:inline lg:w-72 flex-col p-2 text-transparent hover:overflow-auto lg:hover:text-black scrollbar-thin hover:scrollbar-thin hover:scrollbar-thumb-blue-600 hover:scrollbar-track-blue-200 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                    hidden
                    ">
                    <h3 className=" text-base text-left font-sans font-bold">
                    {props.title}
                    </h3>
                    <p className="
                        lg:h-14 text-left text-sm font-inco  
                        h-14
                        ">
                        {props.description} 
                    </p>
                </div>
            </div>
        </div>
    )
}