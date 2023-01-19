import { Coffee } from "phosphor-react";
import { useState } from "react";
import qrCode from "../assets/extras/QRCode.png"


export function Cafezinho() {
    const [open, setOpen] = useState(false)
    const showCard = () => setOpen(!open)

    const [modal, setModal] = useState(false)
    const showModal = () => setModal(!modal)

    function ModalPix() {
        return (
            <div className="fixed left-1/3 top-1/3 bg-blitz bg-cover flex-col justify-center items-center w-1/3 h-1/2 p-6 border-solid border-blue-600 border-2 rounded-md shadow-xl">
                <div className="flex flex-col items-center justify-center w-11/12">
                        <p className="text-base font-bold text-left bg-white/80 text-black"> Este site/portifólio esta sendo meu primeiro trabalho publicado e hospedado, foi um grande desafio, demorei mas finalizei!! </p>
                        <p className="text-base font-bold text-left bg-white/80 text-black"> Entrando em contato por minhas redes sociais, vou aceitar dicas, feedbacks até mesmo criticas! e caso queira colaborar com o famoso cafezinho do DEV, so utilizar o QRcode abaixo ou copiar a chave aleatória! </p>
                        <p className="text-base font-bold text-left bg-white/80 text-black"> Desde já agradeço a atenção e colaboração!!!! </p>
                </div>
                <div className="flex flex-rpl items-center justify-evenly mt-4">
                    <div className="flex flex-col items-center justify-center">
                        <img src={qrCode} alt="QR Code Pix" className="flex self-center w-52 h-52" />
                    </div>
                    <div className="flex flex-row items-center justify-center bg-white border-solid border-blue-600 border-2 p-2 rounded-md">
                        <input type="text" id="pixKey" className=" hidden text-sm text-center bg-white text-black ml-1" value="beaf0f17-0c49-45bd-912d-59fa81f8debc" readOnly />
                        <button className="text-sm text-center bg-white text-black ml-1" onClick={CopyText}> Copiar chave PIX </button>
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
            <div className="fixed flex-row w-14 h-14  right-2 top-24 hover:animate-pulse hover:cursor-help shadow-md">

                <button 
                className="flex w-full h-full z-10 rounded-lg bg-blue-600 text-white items-center justify-center hover:cursor-help"
                onClick={showCard}
                >
                    <Coffee size={32} />
                </button>
                <nav className="flex w-auto z-20 -ml-72 pr-12 -mt-14 select-none">
                    {open && (
                        <div 
                        className="flex  w-auto h-14 bg-blue-600 rounded-lg rounded-tr-none rounded-br-none  flex-col justify-center items-center"
                        onClick={showModal}
                        >
                            <p className="text-sm text-black ml-1"> Se você gostou do meu trabalho, considere me pagar um cafézinho. Obrigado! </p>
                        </div>
                    )}
                </nav>

            </div>
            {modal && <ModalPix />}
        </>
    )
}