import { EnvelopeOpen, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export function SocialBar() {
    return (
        <div className="
                flex relative flex-row ml-16 mt-10 bottom-0 w-auto h-auto 
                xl:fixed xl:flex-col xl:ml-8 xl:top-80 
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