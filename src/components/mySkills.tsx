import { CardSkill } from "./cardSkill";

export function MySkills() {
    return (
        <div className="
            flex flex-col lg:w-9/12 lg:h-full lg:mt-20 lg:mb-10 lg:ml-48 self-center justify-center lg:p-10 cursor-default border-solid border-black border rounded-xl shadow-lg bg-zinc-200
            mt-24 w-5/6 h-auto ml-10 p-2 mb-40
            ">
            <h1>
                pagina de skills
            </h1>
            <div className="
                grid lg:grid-rows-2 grid-flow-col gap-1
                grid-rows-4 
                ">
                <CardSkill />
                <CardSkill />
                <CardSkill />
                <CardSkill />
                <CardSkill />
                <CardSkill />
                <CardSkill />
                <CardSkill />
            </div>
        </div>
    )
}