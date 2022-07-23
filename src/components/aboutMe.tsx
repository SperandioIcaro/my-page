export function About() {
    return (
        <div className="flex flex-col w-9/12 h-full mt-14 ml-48 self-center justify-center p-1 pt-10 cursor-default">
            <div >
                <h1 className="text-center font-sans text-cyan-800 text-4xl">
                    Um pouco sobre mim!
                </h1>
                <span className="flex text-center ml-96 font-Press text-cyan-900 -mt-2 mb-4 text-lg underline">
                    pode ser que seja interessante.
                </span>
            </div>

            <div className="flex">
                <p className="flex text-justify font-inco text-base text-black">
                    Olá, meu nome é Ícaro Sperandio, tenho 25 anos e sou estudante de analise e desenvolvimento de sistemas e design de games. Dito isso darei um breve resumo sobre mim!
                    <br /><br />
                    Tudo começou pela arte, em minha família por parte de mãe todos possuem um talento especifico para a arte, alguns pintam quadros, outros são musicistas e alguns só desenham, eu peguei um pouco de cada um, mas o que eu mais gostava de fazer era desenhar, sempre desenhava um personagem de algum filme o qual eu gostava, de animações, e também desde sempre eu amei animações desde os desenhos animados americanos até os animes japoneses, eu sempre senti isso estimular minha imaginação a ponto dela pular para fora da minha mente, seja em forma de desenhos ou ganhando vida em minha mente, isso sempre me ajudou nas aulas de artes na escola, e com o tempo eu fiz um curso de design gráfico e eu percebi que essa mesma facilidade que eu tinha nas aulas também me ajudou na criação de panfletos, cardápios e etc. Mas, vi que focar em apenas isso não era para mim, o tempo passou eu acabei perdendo o gosto por desenhar, fiquei confuso em que profissão seguir, ate que eu conheci algumas pessoas da área de programação que me apresentou a profissão e peguei um certo interesse, comecei a estudar o back-end, depois de alguns dias estudando recebi um anuncio referente a um curso de programação de jogos, fiquei extremamente animado, já que juntava a profissão que estava me conquistando e jogos o qual é algo que eu sempre gostei, iniciei o curso o mais rápido possível. Durante o curso conheci algumas pessoas extremamente talentosas para a arte digital a qual inclui a própria professora a qual graças a ela, dando dicas, estimulando a prática e até mesmo alguns exercícios práticos, o meu gosto por desenhar voltou com tudo e evoluiu para o desenho digital, e nesse momento de felicidade que me veio a luz, que eu poderia unir a minha arte e a programação com uma maior facilidade no front-end. A partir dai mudei meu cronograma de estudos, participei de um projeto voluntario, e graças a essas experiências hoje eu me sinto pronto para ingressar profissionalmente na área de desenvolvimento front-end. Sigo estudando diariamente para me manter atualizado e ganhar ainda mais experiência!
                </p>
            </div>

            <div className="flex flex-row mt-10 justify-between">
                <div className="flex flex-col m-2">
                    <h3 className="flex font-mono text-xl text-cyan-800">
                        Formação
                    </h3>                    
                        <div className="flex flex-col m-2">
                            <p>
                                Analise e desenvolvimento de sistemas.
                            </p>
                            <strong>
                                Multivix
                            </strong>
                            <span>
                                em andamento
                            </span>
                        </div>
                        <div className="flex flex-col m-2">
                            <p>
                                Design de games.
                            </p>
                            <strong>
                                Escola Saga
                            </strong>
                            <span>
                                em andamento
                            </span>
                        </div>
                    
                </div>

                <div className="flex flex-col mt-2">
                    <h3 className="flex font-mono text-xl text-cyan-800">
                        Certificados
                    </h3>

                    <div className="flex flex-col m-2">
                        <p>
                            Carrefour Web Developer
                        </p>
                        <span>
                            Emitido em maio de 2022
                        </span>
                        <a className="cursor-pointer" >Exibir credencial</a>
                    </div>
                    <div className="flex flex-col m-2">
                        <p>
                            GFT Start #5 .NET
                        </p>
                        <span>
                            Emitido em maio de 2022
                        </span>
                        <a className="cursor-pointer">Exibir credencial</a>
                    </div>
                    <div className="flex flex-col m-2">
                        <p>
                            Impulso react web developer
                        </p>
                        <span>
                            Emitido em novembro de 2021
                        </span>
                        <a className="cursor-pointer">Exibir credencial</a>
                    </div>
                </div>

                <div className="flex flex-col m-2">
                    <h3 className="flex font-mono text-xl text-cyan-800">
                        Idiomas
                    </h3>                    
                        <div className="flex flex-col m-2">
                            <p>
                                Português
                           </p>
                           <span>
                               Nativo
                            </span> 
                        </div>
                        <div className="flex flex-col m-2">
                            <p>
                                Inglês
                            </p>
                            <span>
                                Conversasional
                            </span>
                        </div>
                        <div className="flex flex-col m-2">
                            <p>
                                Francês
                            </p>
                            <span>
                                Iniciante
                            </span>
                        </div>
                    
                </div>
            </div>


        </div>
        )
}