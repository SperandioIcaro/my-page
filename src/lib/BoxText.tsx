interface Props {
    title: string;
    subtitle: string;
    text: JSX.Element;
    addcomponent: JSX.Element;
}

export default function BoxText(props: Props) {
    return (
        <div className="
            flex flex-col h-full self-center justify-center cursor-default border-solid border-black border rounded-xl shadow-lg bg-zinc-100 w-11/12 mt-12 ml-4 p-5 mb-12
            xl:mb-10 xl:ml-28 xl:p-10 xl:mt-16
            lg:mb-10 lg:ml-16 lg:p-6 lg:mt-14
            md:mb-10 md:ml-12 md:p-5 md:mt-12
        ">
            <div className="
                flex flex-col m-1
                xl:m-2
                ">
                <h1 className="
                        text-center font-sans text-cyan-800 text-4xl
                        xl:text-5xl
                        ">
                    {props.title}
                </h1>
                <span className="
                    flex text-center font-Press text-cyan-900 text-lg underline ml-24
                    md:ml-96 md:-mt-2 md:mb-4 
                    xl:self-center xl:text-xl
                    ">
                    {props.subtitle}
                </span>
            </div>

            <div className="
                flex mt-4
                xl:mt-8 xl:p-1
                md:mt-6
                ">
                <p className="
                    flex text-justify font-inco text-lg text-black
                    xl:text-xl
                ">
                    {props.text}
                </p>
            </div>

            <div className="
                flex justify-between flex-1 flex-col mt-6
                lg:flex-row 
                ">
                {props.addcomponent}
            </div>
        </div>
    )
}