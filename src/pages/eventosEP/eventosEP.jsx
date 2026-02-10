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
              paragrafo="Participe de nossos eventos para empoderar jovens e prepará-los para o futuro."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>

           <article>
            <InfoCard 
              img={tecnologiaquetransforma}
              subtitulo="Tecnologia que Transforma"
              paragrafo="Conheça como a tecnologia pode transformar a vida dos jovens."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>
         <article>
            <InfoCard 
              img={carreiraprimeiroemprego}
              subtitulo="Carreira no Primeiro Emprego"
              paragrafo="Descubra dicas e estratégias para ter sucesso no seu primeiro emprego."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
            </article>
        </section>
      </div>
      </main>
    )
}
