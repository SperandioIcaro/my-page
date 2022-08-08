import { CaretRight } from 'phosphor-react'
import ts from '../assets/ts.png'

export function CardSkill() {
    return(
        <div className="flex flex-row border-solid border-spacing-8 rounded-xl shadow-lg bg-zinc-300 w-96 h-24 m-2 max-w-fit">
            <div className="flex w-24">
                <img src={ts} className="self-center"/>
            </div>
            <div className='flex w-8 h-auto rounded-xl bg-zinc-300 justify-center items-center hover:w-72 hover:ease-linear hover:duration-200 hover:text-black'>

                <div className="inline w-72 flex-col p-1 text-transparent hover:text-black">
                    <h3 className=" text-base text-left font-sans">
                    Lorem Ipsum
                    </h3>
                    <p className="h-14 text-center text-sm font-inco">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... 
                    </p>
                </div>
            </div>
        </div>
    )
}