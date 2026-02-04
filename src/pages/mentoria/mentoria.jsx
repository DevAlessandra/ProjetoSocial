import React from 'react'
import s from './mentoria.module.scss'
import cards3 from "../../assets/icones/cards3.png"
import cards4 from "../../assets/icones/cards4.png"
import cards5 from "../../assets/icones/cards5.png" 

export default function Mentoria() {
  return (
     <>
    <div className={s.mentoria}>
        <div className={s.mentoriatitulo}>
            <h1>Mentoria </h1>
        </div>

        <div className={s.mentoriaconteudo}>
            <div className={s.cards}>
                <img src={cards5} alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src={cards3} alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src={cards4} alt="Ícone representando doação de alimentos" />
            </div>

    </div>
    </div>
    </>
  )

}
