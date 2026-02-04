import React from 'react'
import s from './mentoria.module.scss'

export default function Mentoria() {
  return (
     <>
    <div className={s.mentoria}>
        <div className={s.mentoriatitulo}>
            <h1>Mentoria </h1>
        </div>

        <div className={s.mentoriaconteudo}>
            <div className={s.cards}>
                <img src="./src/assets/icones/cards (5).png" alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src="./src/assets/icones/cards (3).png" alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src="./src/assets/icones/cards (4).png" alt="Ícone representando doação de alimentos" />
            </div>

    </div>
    </div>
    </>
  )

}
