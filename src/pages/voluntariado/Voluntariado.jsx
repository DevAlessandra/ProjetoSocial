import React from 'react'
import s from './voluntariado.module.scss'
import InfoCard from "../../components/infoCard/infoCard"
import mutiraoreciclagem from "../../assets/icones/mutiraoreciclagem.png"
import aulastecnologia from "../../assets/icones/aulastecnologia.png"
import esporteinclusao from "../../assets/icones/esporteinclusao.png"

export default function Voluntariado() {
  return (
     
    <div className={s.voluntariado}>
           <h1>Voluntariado </h1>
      <section className={s.cards}>
          <article>
            <InfoCard 
              img={mutiraoreciclagem}
              subtitulo="Mutirão de Reciclagem"
              paragrafo="Participe de nossos mutirões e ajude a reciclar materiais que podem ser reutilizados."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>

           <article>
            <InfoCard 
              img={aulastecnologia}
              subtitulo="Aulas de Tecnologia"
              paragrafo="Ministre aulas de tecnologia para jovens em situação de vulnerabilidade social."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>
         <article>
            <InfoCard 
              img={esporteinclusao}
              subtitulo="Esporte e Inclusão"
              paragrafo="Promova atividades esportivas inclusivas para jovens com deficiência."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>
        </section>
      </div>
  )
}