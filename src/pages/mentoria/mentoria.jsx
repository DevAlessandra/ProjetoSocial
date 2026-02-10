import React from 'react'
import s from "../Style.module.scss"
import InfoCard from "../../components/infoCard/infoCard"
import mentoriacarreiraemprego from "../../assets/icones/mentoriacarreiraemprego.png"
import compartilheexperiencia from "../../assets/icones/compartilheexperiencia.png"
import acompanhamento from "../../assets/icones/acompanhamento.png" 

export default function Mentoria() {
  return (
    <main className={s.main}>
    <div className={s.mentoria}>
           <h1>Mentoria </h1>
      <section className={s.cards}>
          <article>
            <InfoCard 
              img={mentoriacarreiraemprego}
              subtitulo="Mentoria em Carreira e Emprego"
              paragrafo="Receba orientações sobre carreira e emprego com profissionais qualificados."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>

           <article>
            <InfoCard 
              img={compartilheexperiencia}
              subtitulo="Compartilhe sua Experiência"
              paragrafo="Compartilhe sua experiência profissional com jovens em busca de orientação."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>
         <article>
            <InfoCard 
              img={acompanhamento}
              subtitulo="Acompanhamento Individual"
              paragrafo="Receba acompanhamento individualizado para desenvolver suas habilidades."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          
          </article>

          
        </section>
      </div>
      </main>
    )
}
