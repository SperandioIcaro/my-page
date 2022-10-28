interface PropsSkill {
    title: string
    addcomponent: JSX.Element;
}

export default function BoxSkill(props: PropsSkill) {
    return (
        <div  className="
            flex flex-col w-11/12 h-auto self-center justify-center cursor-default border-solid border-black border rounded-xl shadow-xl bg-zinc-100 mt-4 p-2 mb-10 
            xl:my-6 xl:p-6
            md:my-4 md:p-5
            ">
                <h3 className="
                    text-left mb-3 font-bold text-lg font-sans
                    xl:text-4xl xl:font-Press  
                    md:text-2xl md:font-Press
                    ">
                    {props.title}
                </h3>
                <div className="
                    grid grid-flow-col gap-1 grid-rows-2 
                    xl:grid-rows xl:grid-cols xl:gap-1
                    ">

                    {props.addcomponent}

                </div>
            </div>
    )
}