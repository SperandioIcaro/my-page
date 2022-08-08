import { CardSkill } from "./cardSkill";

export function MySkills() {
    return (
        <div className="flex flex-col w-9/12 h-full mt-20 mb-10 ml-48 self-center justify-center p-10 cursor-default border-solid border-black border rounded-xl shadow-lg bg-zinc-200">
            <h1>
                pagina de skills
            </h1>
            <div className="grid grid-rows-2 grid-flow-col gap-1">
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