import React from 'react'
import s from './voluntariado.module.scss'

export default function Voluntariado() {
  return (
     <>
    <div className={s.voluntariado}>
        <div className={s.voluntariadotitulo}>
            <h1>Voluntariado </h1>
        </div>

        <div className={s.voluntariadoconteudo}>
            <div className={s.cards}>
                <img src="./src/assets/icones/Frame 47 (2).png" alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src="./src/assets/icones/Frame (6).png" alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src="./src/assets/icones/Frame 47 (1).png" alt="Ícone representando doação de alimentos" />
            </div>

    </div>
    </div>
    </>
  )

}
