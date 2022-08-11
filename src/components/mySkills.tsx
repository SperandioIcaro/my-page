import { CardSkill } from "./cardSkill";

export function MySkills() {
    return (
        <div className="
            flex flex-col lg:w-10/12 lg:h-full lg:mt-20 lg:mb-10 lg:ml-32 self-center justify-center lg:p-5 cursor-default border-solid border-black border rounded-xl shadow-lg bg-zinc-200
            mt-20 w-5/6 h-auto ml-7 p-2 mb-20
            ">
            <h1 className="
                lg:text-center lg:text-2xl font-Press font-bold
                text-lg text-left            
                ">
                Minhas habilidades em:
            </h1>
            <div  className="
            flex flex-col w-11/12 lg:h-full lg:mt-6 lg:mb-5 self-center justify-center lg:p-5 cursor-default border-solid border-black border rounded-xl shadow-xl bg-zinc-200
            mt-4 h-auto p-2 mb-10
            ">
                <h3 className="
                    text-left lg:text-2xl lg:font-Press mb-3 font-bold
                    text-lg font-sans 
                    ">
                    Front-end
                </h3>
                <div className="
                    grid lg:grid-rows-2 grid-flow-col gap-1
                    grid-rows-2 
                    ">
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                </div>
            </div>
            
            <div  className="
            flex flex-col w-11/12 lg:h-full lg:mt-6 lg:mb-5 self-center justify-center lg:p-5 cursor-default border-solid border-black border rounded-xl shadow-xl bg-zinc-200
            mt-1 h-auto p-2 mb-10
            ">
                <h3 className="
                    text-left lg:text-2xl lg:font-Press mb-3 font-bold
                    text-lg font-sans 
                    ">
                    Back-end
                </h3>
                <div className="
                    grid lg:grid-rows-1 grid-flow-col gap-1
                    grid-rows-2 
                    ">
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                </div>
            </div>            
            
            <div  className="
            flex flex-col w-11/12 lg:h-full lg:mt-6 lg:mb-5 self-center justify-center lg:p-5 cursor-default border-solid border-black border rounded-xl shadow-xl bg-zinc-200
            mt-1 h-auto p-2 mb-10
            ">
                <h3 className="
                    text-left lg:text-2xl lg:font-Press mb-3 font-bold
                    text-lg font-sans 
                    ">
                    API e banco de dados
                </h3>
                <div className="
                    grid lg:grid-rows-1 grid-flow-col gap-1
                    grid-rows-1 
                    ">
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                </div>
            </div>

        </div>
    )
}