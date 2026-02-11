import React from 'react'
import s from "../Style.module.scss"
import InfoCard from "../../components/infoCard/infoCard"
import mutiraoreciclagem from "../../assets/icones/mutiraoreciclagem.png"
import aulastecnologia from "../../assets/icones/aulastecnologia.png"
import esporteinclusao from "../../assets/icones/esporteinclusao.png"

export default function Voluntariado() {
  return (
     <main className={s.main}>
    <div className={s.voluntariado}>
           <h1>Voluntariado </h1>
      <section className={s.cards}>
          <article>
            <InfoCard 
              img={mutiraoreciclagem}
              subtitulo="Mutirão de Reciclagem"
              paragrafo="Coletar materiais recicláveis e orientar sobre descarte consciente."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>

           <article>
            <InfoCard 
              img={aulastecnologia}
              subtitulo="Aulas de Tecnologia"
              paragrafo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>
         <article>
            <InfoCard 
              img={esporteinclusao}
              subtitulo="Esporte e Inclusão"
              paragrafo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
              segParagrafo=""
              textoBotao="Quero Participar"
            />
          </article>
        </section>
      </div>
      </main>
  )
}