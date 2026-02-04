import React from 'react'
import s from './doacao.module.scss'
import cards from "../../assets/icones/cards.png"
import cards1 from "../../assets/icones/cards1.png"
import cards2 from "../../assets/icones/cards2.png"

export default function Doacao() {
  return (
     <>
    <div className={s.doacao}>
        <div className={s.doacaotitulo}>
            <h1>Doação </h1>
        </div>

        <div className={s.doacaoconteudo}>
            <div className={s.cards}>
                <img src={cards}c alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src={cards1} alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src={cards2} alt="Ícone representando doação de alimentos" />
            </div>

    </div>
    </div>
    </>
  )

}
