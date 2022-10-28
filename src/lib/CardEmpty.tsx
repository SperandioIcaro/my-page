interface Card {
    title: string;
    addcomponent: JSX.Element;
}

export default function CardEmpty(info: Card) {

    return (
        <div className="
                    flex flex-col border-solid border-black border rounded-xl shadow-lg bg-zinc-50 w-11/12 h-auto p-4 m-4
                    xl:mt-4 xl:m-6 xl:p-6
                    md:m-4 md:p-4
                    ">
                    <h3 className="
                        flex font-mono text-2xl text-cyan-800
                        xl:text-4xl xl:m-4
                        md:text-3xl md:m-3 
                        ">
                        {info.title}
                    </h3>                    
                    
                     {info.addcomponent}
                    
                </div>
    )
}