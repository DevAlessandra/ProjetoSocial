import React from 'react'
import s from '../Style.module.scss'

import InfoCard from "../../components/infoCard/infoCard"
import empoderandojovensfuturo from "../../assets/icones/empoderandojovensfuturo.png"
import tecnologiaquetransforma from "../../assets/icones/tecnologiaquetransforma.png"
import carreiraprimeiroemprego from "../../assets/icones/carreiraprimeiroemprego.png"

export default function EventosEP() {
  return (
     <main className={s.main}>
     <div className={s.eventosEP}>
        <h1>Eventos & Palestras </h1>
      <section className={s.cards}>
          <article>
            <InfoCard 
              img={empoderandojovensfuturo}
              subtitulo="Empoderando Jovens para o Futuro"
              paragrafo="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
              segParagrafo=" Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
              textoBotao="Quero Participar"
            />
          </article>

           <article>
            <InfoCard 
              img={tecnologiaquetransforma}
              subtitulo="Tecnologia que Transforma"
              paragrafo="Atividade: Workshop de introdução à programação e inovação digital."

              segParagrafo="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
              textoBotao="Quero Participar"
            />
          </article>
         
         <article>
            <InfoCard 
              img={carreiraprimeiroemprego}
              subtitulo="Carreira no Primeiro Emprego"
              paragrafo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."

              segParagrafo="Impacto: Ajudar jovens a conquistar oportunidades de trabalho. dicas e estratégias para ter sucesso no seu primeiro emprego."

              textoBotao="Quero Participar"
            />
            </article>
        </section>
      </div>
      </main>
    )
}
