import React from 'react'
import s from './doacao.module.scss'

export default function Doacao() {
  return (
     <>
    <div className={s.doacao}>
        <div className={s.doacaotitulo}>
            <h1>Doação </h1>
        </div>

        <div className={s.doacaoconteudo}>
            <div className={s.cards}>
                <img src="./src/assets/icones/cards.png" alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src="./src/assets/icones/cards(1).png" alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src="./src/assets/icones/cards(2).png" alt="Ícone representando doação de alimentos" />
            </div>

    </div>
    </div>
    </>
  )

}
