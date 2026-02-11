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
              paragrafo="Receba orientações sobre Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>

           <article>
            <InfoCard 
              img={compartilheexperiencia}
              subtitulo="Compartilhe sua Experiência"
              paragrafo="Oriente jovens e profissionais iniciantes em sua área."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>
         <article>
            <InfoCard 
              img={acompanhamento}
              subtitulo="Acompanhamento Individual"
              paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento. "
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          
          </article>

          
        </section>
      </div>
      </main>
    )
}
