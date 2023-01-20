import { EnvelopeOpen, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export function SocialBar() {
    return (
        <div className="
                flex relative flex-row mt-16 bottom-1 w-full h-auto justify-evenly
                xl:fixed xl:flex-col xl:ml-4 xl:top-10 xl:w-auto  
                lg:fixed lg:flex-col lg:ml-2 lg:top-8 lg:w-auto 
                md:fixed md:flex-col md:ml-0 md:top-6  md-w-auto
                ">
            <a className="flex w-10 text-black relative m-1 hover:text-cyan-600 hover:animate-bounce"
                href="https://twitter.com/SperandioIcaro" target='_blank'>
                    <TwitterLogo className="inline m-0 h-min w-min" size={38} />
            </a>
            <a className="flex w-10 text-black relative m-1 hover:text-cyan-600 hover:animate-bounce"
                href="mailto:sperandioicaro@gmail.com?subject=Contato front-end" target='_blank'>
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
                href="https://www.linkedin.com/in/sperandioicaro/" target='_blank'>
                    <LinkedinLogo className="inline m-0 h-min w-min" size={38} />
            </a>
        </div>
    )
}