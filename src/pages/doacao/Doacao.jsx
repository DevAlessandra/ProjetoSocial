import InfoCard from "../../components/infoCard/infoCard"
import institutograndefamilia from "../../assets/icones/institutograndefamilia.png"
import projetofuturoescola from "../../assets/icones/projetofuturoescola.png"
import institutoconectajovem from "../../assets/icones/institutoconectajovem.png"
import s from "./doacao.module.scss"
export default function Doacao() {
    return (
      <div className={s.doacao}>
        <h1>Doação </h1>
      <section className={s.cards}>
          <article>
            <InfoCard 
              img={institutograndefamilia}
              subtitulo="Instituto Grande Família"
              paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
              segParagrafo=""
              textoBotao="Quero Doar"
            />
          </article>

           <article>
            <InfoCard 
              img={projetofuturoescola}
              subtitulo="Projeto Futuro na Escola"
              paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
              segParagrafo=""
              textoBotao="Quero Doar"
            />
          </article>
         <article>
            <InfoCard 
              img={institutoconectajovem}
              subtitulo="Instituto Conecta Jovem"
              paragrafo="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
              segParagrafo=""
              textoBotao="Quero Doar"
            />
          </article>

        </section>
      </div>
    )
}

