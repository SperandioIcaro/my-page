import { CardSkill } from "./cardSkill";

import ts from '../assets/ts.webp'
import react from '../assets/react-logo.webp'
import node from '../assets/nodejs.webp'
import html from '../assets/html.webp'
import css from '../assets/css.webp'
import js from '../assets/js.webp'
import c from '../assets/c.webp'
import angular from '../assets/angular.webp'
import java from '../assets/java.webp'
import wp from '../assets/wp.webp'
import tail from '../assets/tail.webp'
import aws from '../assets/aws.webp'
import HyGraphQL from '../assets/hygraph.svg'
import BoxSkill from "../lib/BoxSkill";
import Php from "../assets/php.png";

export function MySkills() {
    return (
        <div className="
            flex flex-col self-center justify-center cursor-default border-solid border-black border rounded-xl shadow-lg bg-zinc-100 mt-10 w-11/12 h-auto ml-4 p-2 mb-0
            xl:h-full xl:mt-20 xl:ml-28 xl:p-5 
            lg:h-full lg:mt-20 lg:ml-16 lg:p-5
            md:mt-10 md:ml-12 md:p-2
            ">
            <h1 className="
                font-Press font-bold text-lg text-left
                xl:text-center xl:text-4xl xl:my-2 
                lg:text-center lg:text-4xl lg:my-2
                md:text-center md:text-2xl md:my-2
                ">
                Minhas habilidades em:
            </h1>
            
            <BoxSkill title={"Front-end"} addcomponent={
                <>
                    <CardSkill title={"TypeScript"} description={"TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem"} image={ts} />
                    
                    <CardSkill title={"JavaScript"} description={"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."} image={js} />
                    
                    <CardSkill title={"HTML 5"} description={"HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software."} image={html} />

                    <CardSkill title={"CSS 3"} description={"CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em uma linguagem de marcação como HTML."} image={css} />

                    <CardSkill title={"React"} description={"React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."} image={react} />

                    <CardSkill title={"Angular"} description={"Angular é um framework JavaScript de código aberto mantido pela Google e por uma comunidade de indivíduos e corporações."} image={angular} />

                    <CardSkill title={"Tailwind"} description={"Tailwind CSS é um framework de utilitários de CSS para construir interfaces de usuário."} image={tail} />

                    <CardSkill title={"Wordpress"} description={"WordPress é um sistema de gerenciamento de conteúdo para internet, baseado em PHP e banco de dados MySQL."} image={wp} />
                </>
            } />

            <BoxSkill title={"Back-end"} addcomponent={
                <>
                    <CardSkill title={"Java"} description={"Java é uma linguagem de programação orientada a objetos, desenvolvida pela empresa Sun Microsystems (que foi adquirida pela Oracle, em 2010)." } image={java} />
                    
                    <CardSkill title={"C#"} description={"C# é uma linguagem de programação multi-paradigma desenvolvida pela Microsoft como parte da plataforma .NET."} image={c} />

                    <CardSkill title={"NodeJS"} description={"Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, focado em migrar a programação do Javascript do cliente para os servidores."} image={node} />

                    <CardSkill title={"TypeScript"} description={"TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem"} image={ts} />

                    <CardSkill title={"JavaScript"} description={"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."} image={js} />

                    <CardSkill title={"PHP"} description={"PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web."} image={Php} />
                </>
            } />

            <BoxSkill title={"API e banco de dados"} addcomponent={
                <>    
                    <CardSkill title={'HyGraphQL'} description={"HyGraphQL é uma biblioteca que permite a criação de APIs GraphQL com base em um banco de dados relacional."} image={HyGraphQL} />

                    <CardSkill title={"AWS"} description={"Amazon Web Services (AWS) é uma plataforma de computação em nuvem oferecida pela Amazon.com que oferece serviços de computação sob demanda, armazenamento em nuvem e serviços de banco de dados online."} image={aws} />
                </>
            } />

        </div>
    )
}