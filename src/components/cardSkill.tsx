import { CaretRight } from 'phosphor-react'
import ts from '../assets/ts.png'

export function CardSkill() {
    return(
        <div className="
            flex flex-row border-solid border-spacing-8 rounded-xl shadow-lg bg-zinc-300 lg:w-96 lg:h-24 lg:m-2 max-w-fit
            w-48 h-12 m-2
            ">
            <div className="
                flex lg:w-24
                w-12
                ">
                <img src={ts} className="self-center"/>
            </div>
            <div className='
                lg:flex lg:w-8 h-auto rounded-xl bg-zinc-300 justify-center items-center lg:hover:w-72 lg:hover:ease-linear lg:hover:duration-200 lg:hover:text-black
                hidden
                '>

                <div className="
                    lg:inline lg:w-72 flex-col p-1 text-transparent lg:hover:text-black
                    hidden
                    ">
                    <h3 className=" text-base text-left font-sans">
                    Lorem Ipsum
                    </h3>
                    <p className="
                        lg:h-14 text-center text-sm font-inco
                        h-14
                        ">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... 
                    </p>
                </div>
            </div>
        </div>
    )
}