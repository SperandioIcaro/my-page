import { EnvelopeOpen, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export function SocialBar() {
    return (
        <div className="
                        lg:fixed flex lg:flex-col w-auto h-auto lg:ml-8 lg:top-80 
                        relative flex-row ml-16 bottom-10
                        ">
            <a className="flex w-10 text-black relative m-1 hover:text-cyan-600 hover:animate-bounce"
                href="https://twitter.com/SperandioIcaro" target='_blank'>
                    <TwitterLogo className="inline m-0 h-min w-min" size={38} />
            </a>
            <a className="flex w-10 text-black relative m-1 hover:text-cyan-600 hover:animate-bounce"
                href="mailto:icaro.sperandio@gmail.com?subject=Contato front-end" target='_blank'>
                    <EnvelopeOpen className="inline m-0 h-min w-min" size={38} />
            </a>
            <a className="flex w-10 text-black relative m-1 hover:text-cyan-600 hover:animate-bounce"
                href="https://github.com/SperandioIcaro" target='_blank'>
                    <GithubLogo className="inline m-0 h-min w-min" size={38} />
            </a>
            <a className="flex w-10 text-black relative m-1 hover:text-cyan-600 hover:animate-bounce"
                href="https://www.instagram.com/ihcaraio?igshid=YmMyMTA2M2Y=" target='_blank'>
                    <InstagramLogo className="inline m-0 h-min w-min" size={38} />
            </a>
            <a className="flex w-10 text-black relative m-1 hover:text-cyan-600 hover:animate-bounce"
                href="https://www.linkedin.com/in/icaro-sperandio/" target='_blank'>
                    <LinkedinLogo className="inline m-0 h-min w-min" size={38} />
            </a>
        </div>
    )
}