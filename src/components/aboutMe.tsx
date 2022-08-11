import { ArrowSquareOut } from "phosphor-react";

export function About() {
    return (
        <div className="
            flex flex-col lg:w-10/12 h-full lg:mt-20 lg:mb-10 lg:ml-32 self-center justify-center lg:p-10 cursor-default border-solid border-black border rounded-xl shadow-lg bg-zinc-200
            w-10/12 mt-16 ml-7 p-5 mb-20
        ">
            <div className="
                flex flex-col lg:m-2
                m-1
                ">
                <h1 className="text-center font-sans text-cyan-800 text-4xl">
                    Um pouco sobre mim!
                </h1>
                <span className="
                    flex text-center lg:ml-96 font-Press text-cyan-900 lg:-mt-2 lg:mb-4 text-lg underline
                    ml-24
                    ">
                    pode ser que seja interessante.
                </span>
            </div>

            <div className="
                flex lg:mt-8 lg:p-1
                mt-2
                ">
                <p className="flex text-justify font-inco text-base text-black">
                    Olá, meu nome é Ícaro Sperandio, tenho 25 anos e sou estudante de analise e desenvolvimento de sistemas e design de games. Dito isso darei um breve resumo sobre mim!
                    <br /><br />
                    Tudo começou pela arte, em minha família por parte de mãe todos possuem um talento especifico para a arte, alguns pintam quadros, outros são musicistas e alguns só desenham, eu peguei um pouco de cada um, mas o que eu mais gostava de fazer era desenhar, sempre desenhava um personagem de algum filme o qual eu gostava, de animações, e também desde sempre eu amei animações desde os desenhos animados americanos até os animes japoneses.<br /><br />   Eu sempre senti isso estimular minha imaginação a ponto dela pular para fora da minha mente, seja em forma de desenhos ou ganhando vida em minha mente, isso sempre me ajudou nas aulas de artes na escola, e com o tempo eu fiz um curso de design gráfico e eu percebi que essa mesma facilidade que eu tinha nas aulas também me ajudou na criação de panfletos, cardápios e etc.<br /><br />    Mas, vi que focar em apenas isso não era para mim, o tempo passou eu acabei perdendo o gosto por desenhar, fiquei confuso em que profissão seguir, ate que eu conheci algumas pessoas da área de programação que me apresentou a profissão e peguei um certo interesse, comecei a estudar o back-end, depois de alguns dias estudando recebi um anuncio referente a um curso de programação de jogos, fiquei extremamente animado, já que juntava a profissão que estava me conquistando e jogos o qual é algo que eu sempre gostei, iniciei o curso o mais rápido possível.<br /><br />     Durante o curso conheci algumas pessoas extremamente talentosas para a arte digital a qual inclui a própria professora a qual graças a ela, dando dicas, estimulando a prática e até mesmo alguns exercícios práticos, o meu gosto por desenhar voltou com tudo e evoluiu para o desenho digital, e nesse momento de felicidade que me veio a luz, que eu poderia unir a minha arte e a programação com uma maior facilidade no front-end.<br /><br />    A partir dai mudei meu cronograma de estudos, participei de um projeto voluntario, e graças a essas experiências hoje eu me sinto pronto para ingressar profissionalmente na área de desenvolvimento front-end. Sigo estudando diariamente para me manter atualizado e ganhar ainda mais experiência!
                </p>
            </div>

            <div className="
                flex lg:flex-row justify-between
                flex-col mt-6
                ">
                <div className="
                    flex flex-col lg:mt-4 lg:m-6 border-solid border-black border rounded-xl shadow-lg bg-zinc-200 lg:w-1/3 
                    w-11/12 h-auto p-3 m-3
                    ">
                    <h3 className="flex font-mono text-xl text-cyan-800">
                        Formação
                    </h3>                    
                        <div className="flex flex-col m-2">
                            <p className=" mb-3 text-lg font-inco underline">
                                Analise e desenvolvimento de sistemas.
                            </p>
                            <div className="flex flex-row justify-between">
                                <a href="https://multivix.edu.br/" target="_blank" className="font-sans text-base font-bold hover:text-cyan-400">
                                    Multivix
                                </a>
                                <span className="text-sm text-yellow-700">
                                    em andamento
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col m-2">
                            <p className=" mb-3 text-lg font-inco underline">
                                Design de games.
                            </p>
                            <div className="flex flex-row justify-between">
                                <a href="https://www.saga.com.br/" target="_blank" className="font-sans text-base font-bold hover:text-cyan-400">
                                    Escola Saga
                                </a>
                                <span className="text-sm text-yellow-700">
                                    em andamento
                                </span>
                            </div>
                        </div>
                    
                </div>

                <div className="
                    flex flex-col lg:mt-4 lg:m-6 border-solid border-black border rounded-xl shadow-lg bg-zinc-200 lg:w-1/3 
                    w-11/12 h-auto p-3 m-3
                    ">
                    <h3 className="flex font-mono text-xl text-cyan-800">
                        Certificados
                    </h3>

                    <div className="flex flex-col m-2">
                        <p className=" mb-px text-lg font-inco underline">
                            Carrefour Web Developer
                        </p>
                        <span className="text-sm  m-0 font-bold">
                            Emitido em maio de 2022
                        </span>
                        <a href="https://www.dio.me/certificate/0565F4AC/share" target="_blank" className="text-base font-sans text-right hover:text-blue-700" >
                            Exibir credencial<ArrowSquareOut size={16} className="inline -mt-4" />
                        </a>
                    </div>
                    <div className="flex flex-col m-2">
                        <p className=" mb-px text-lg font-inco underline">
                            GFT Start #5 .NET
                        </p>
                        <span className="text-sm  m-0 font-bold">
                            Emitido em maio de 2022
                        </span>
                        <a href="https://www.dio.me/certificate/9D77A6E1/share" target="_blank" className="text-base font-sans text-right hover:text-blue-700">
                            Exibir credencial<ArrowSquareOut size={16} className="inline -mt-4" />
                        </a>
                    </div>
                    <div className="flex flex-col m-2">
                        <p className=" mb-px text-lg font-inco underline">
                            Impulso react web developer
                        </p>
                        <span className="text-sm  m-0 font-bold">
                            Emitido em novembro de 2021
                        </span>
                        <a href="https://www.dio.me/certificate/0BA03700/share" target="_blank" className="text-base font-sans text-right hover:text-blue-700">
                            Exibir credencial<ArrowSquareOut size={16} className="inline -mt-4" />
                        </a>
                    </div>
                </div>

                <div className="
                    flex flex-col lg:mt-4 lg:m-6 border-solid border-black border rounded-xl shadow-lg bg-zinc-200 lg:w-1/3 
                    w-11/12 h-auto p-3 m-3
                    ">
                    <h3 className="flex font-mono text-xl text-cyan-800">
                        Idiomas
                    </h3>                    
                        <div className="flex flex-col m-2">
                            <p className=" mb-1 text-lg font-inco underline">
                                Português
                           </p>
                           <span className="text-sm font-bold ml-10">
                               Nativo
                            </span> 
                        </div>
                        <div className="flex flex-col m-2">
                            <p className=" mb-1 text-lg font-inco underline">
                                Inglês
                            </p>
                            <span className="text-sm font-bold ml-10">
                                Conversasional
                            </span>
                        </div>
                        <div className="flex flex-col m-2">
                            <p className=" mb-1 text-lg font-inco underline">
                                Espanhol
                            </p>
                            <span className="text-sm font-bold ml-10">
                                Iniciante
                            </span>
                        </div>
                        <div className="flex flex-col m-2">
                            <p className=" mb-1 text-lg font-inco underline">
                                Francês
                            </p>
                            <span className="text-sm font-bold ml-10">
                                Iniciante
                            </span>
                        </div>
                    
                </div>
            </div>


        </div>
        )
}