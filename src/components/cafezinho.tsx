import { Coffee, X } from "phosphor-react";
import { useState } from "react";
import qrCode from "../assets/extras/QRCode.png"


export function Cafezinho() {
    const [modal, setModal] = useState(false)
    const showModal = () => setModal(!modal)

    function ModalPix() {
        return (
            <div className="
            fixed z-50 left-6 top-28 bg-blitz bg-cover flex-col justify-center items-center w-10/12 h-auto p-6 border-solid border-blue-600 border-2 rounded-md shadow-xl
            md:w-3/4 md:h-auto md:top-1/4 md:left-28
            xl:w-1/2 xl:h-auto xl:top-1/4 xl:left-1/4
            2xl:w-2/4 2xl:h-1/2 2xl:top-1/4 2xl:left-[22%]
            ">
                <X className="absolute right-3 top-3 cursor-pointer" onClick={showModal} size={32} />
                <div className="flex flex-col items-center justify-center w-11/12">
                        <p className="text-base font-bold text-left bg-white/80 text-black"> Este site/portifólio esta sendo meu primeiro trabalho publicado e hospedado, foi um grande desafio, demorei mas finalizei!! </p>
                        <p className="text-base font-bold text-left bg-white/80 text-black"> Entrando em contato por minhas redes sociais, vou aceitar dicas, feedbacks até mesmo criticas! e caso queira colaborar com o famoso cafezinho do DEV, so utilizar o QRcode abaixo ou copiar a chave aleatória! </p>
                        <p className="text-base font-bold text-left bg-white/80 text-black"> Desde já agradeço a atenção e colaboração!!!! </p>
                </div>
                <div className="
                flex items-center flex-col justify-evenly mt-4
                md:flex-row xl:flex-row
                ">
                    <div className="flex flex-col items-center justify-center">
                        <img src={qrCode} alt="QR Code Pix" className="flex self-center w-52 h-52" />
                    </div>
                    <div className="flex flex-row items-center justify-center bg-white border-solid border-blue-600 border-2 p-2 rounded-md">
                        <input type="text" id="pixKey" className=" hidden text-sm text-center bg-white text-black ml-1" value="beaf0f17-0c49-45bd-912d-59fa81f8debc" readOnly />
                        <button className="text-base text-center bg-white text-black ml-1 w-36 h-8" onClick={CopyText}> Copiar chave PIX </button>
                    </div>
                </div>
            </div>            
        )
    }

    function CopyText() {
        const copyText = document.getElementById("pixKey") as HTMLInputElement;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Chave pix copiada!");
    }
        
    

    return (
        <>
            <div className="fixed w-16 hover:w-96 h-16 rounded-full right-4 top-24 shadow-md text-transparent hover:text-black hover:duration-700 animate-pulse hover:animate-none">

                <div className="flex flex-row-reverse items-center  rounded-full shadow-xl bg-emerald-500 w-16 hover:w-96 h-16 p-0">
                    <div className="fixed w-16 h-16 bg-blue-600 rounded-full items-center justify-center p-3 shadow-xl hover:animate-none">
                        <Coffee className="flex text-white self-center h-auto" size={39} />
                    </div>
                    <div className='h-16 w-full rounded-full bg-emerald-500 justify-center items-center flex hover:cursor-pointer'
                        onClick={showModal}>
                        <div className=" flex">
                            <strong className="text-sm -ml-4  mr-4 w-80"> Se você gostou do meu trabalho,<br />considere me pagar um cafézinho. Obrigado! </strong>
                        </div>
                    </div>
                </div>
                {/* <nav className="flex w-auto z-20 -ml-72 pr-12 -mt-14 select-none">
                    {open && (
                        <div 
                        className="flex  w-auto h-14 bg-blue-600 rounded-lg rounded-tr-none rounded-br-none  flex-col justify-center items-center"
                        onClick={showModal}
                        >
                            <p className="text-sm text-black ml-1"> Se você gostou do meu trabalho, considere me pagar um cafézinho. Obrigado! </p>
                        </div>
                    )}
                </nav> */}

            </div>
            {modal && <ModalPix />}
        </>
    )
}