import BoxText from "../lib/BoxText";
import CardCurso from "../lib/CardCurso";
import CardEmpty from "../lib/CardEmpty";
import CardIdiomas from "../lib/CardIdiomas";
import Certificado from "../lib/Certificado";

export function About() {
    return (

        <BoxText 
            title={"Um pouco sobre mim!"} 
            subtitle={"pode ser que seja interessante."} 
            text={
                <>
                    Olá, meu nome é Ícaro Sperandio, tenho 26 anos e sou estudante de analise e desenvolvimento de sistemas e design de games. Dito isso darei um breve resumo sobre mim!
                    <br /><br />
                    Tudo começou pela arte, em minha família por parte de mãe todos possuem um talento especifico para a arte, alguns pintam quadros, outros são musicistas e alguns só desenham, eu peguei um pouco de cada um, mas o que eu mais gostava de fazer era desenhar, sempre desenhava um personagem de algum filme o qual eu gostava, de animações, e também desde sempre eu amei animações desde os desenhos animados americanos até os animes japoneses.<br /><br />   Eu sempre senti isso estimular minha imaginação a ponto dela pular para fora da minha mente, seja em forma de desenhos ou ganhando vida em minha mente, isso sempre me ajudou nas aulas de artes na escola, e com o tempo eu fiz um curso de design gráfico e eu percebi que essa mesma facilidade que eu tinha nas aulas também me ajudou na criação de panfletos, cardápios e etc.<br /><br />    Mas, vi que focar em apenas isso não era para mim, o tempo passou eu acabei perdendo o gosto por desenhar, fiquei confuso em que profissão seguir, ate que eu conheci algumas pessoas da área de programação que me apresentou a profissão e peguei um certo interesse, comecei a estudar o back-end, depois de alguns dias estudando recebi um anuncio referente a um curso de programação de jogos, fiquei extremamente animado, já que juntava a profissão que estava me conquistando e jogos o qual é algo que eu sempre gostei, iniciei o curso o mais rápido possível.<br /><br />     Durante o curso conheci algumas pessoas extremamente talentosas para a arte digital a qual inclui a própria professora a qual graças a ela, dando dicas, estimulando a prática e até mesmo alguns exercícios práticos, o meu gosto por desenhar voltou com tudo e evoluiu para o desenho digital, e nesse momento de felicidade que me veio a luz, que eu poderia unir a minha arte e a programação com uma maior facilidade no front-end.<br /><br />    A partir dai mudei meu cronograma de estudos, participei de um projeto voluntario, e graças a essas experiências hoje eu me sinto pronto para ingressar profissionalmente na área de desenvolvimento front-end. Sigo estudando diariamente para me manter atualizado e ganhar ainda mais experiência!
                </>} 
            addcomponent={
                <>
                    <CardEmpty title={"Formação"} addcomponent={
                        <>
                            <CardCurso curso={"Analise e desenvolvimento de sistemas"} local={"Multivix"} localLink={"https://multivix.edu.br/"} status={false} dataConclusao={""} />

                            <CardCurso curso={"Design de games"}local={"Escola Saga"}localLink={"https://www.saga.com.br/"}status={false} dataConclusao={""} />
                        </>
                    } />

                    <CardEmpty title={"Certificados"} addcomponent={
                        <>
                            <Certificado curso={"NTT DATA Diversidade em Tech"} emissao={"outubro de 2022"} link={"https://www.dio.me/certificate/BD86809D"}/>

                            <Certificado curso={"Orange Tech +"} emissao={"outubro de 2022"} link={"https://www.dio.me/certificate/92495ACC"}/>

                            <Certificado curso={"Carrefour Web Developer"} emissao={"maio de 2022"} link={"https://www.dio.me/certificate/0565F4AC"}/>

                            <Certificado curso={"GFT Start #5 .NET"} emissao={"maio de 2022"} link={"https://www.dio.me/certificate/9D77A6E1"}/>
                            
                            <Certificado curso={"Impulso react web developer"} emissao={"novembro de 2021"} link={"https://www.dio.me/certificate/0BA03700"}/>
                        </>
                    } />

                    <CardEmpty title={"Idiomas"} addcomponent={
                        <>

                            <CardIdiomas idioma={"Português"} nivel={"Nativo"} />

                            <CardIdiomas idioma={"Inglês"} nivel={"Intermediário"} />

                            <CardIdiomas idioma={"Espanhol"} nivel={"Básico"} />

                            <CardIdiomas idioma={"Francês"} nivel={"Básico"} />
                                                
                        </>
                    } />
                </>
            } 
        />

        
        )
}