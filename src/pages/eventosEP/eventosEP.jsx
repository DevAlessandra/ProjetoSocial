import React from 'react'
import s from './eventosEP.module.scss'

export default function EventosEP() {
  return (
     <>
    <div className={s.eventosEP}>
        <div className={s.eventostitulo}>
            <h1>Eventos & Palestras </h1>
        </div>

        <div className={s.eventosconteudo}>
            <div className={s.cards}>
                <img src="./src/assets/icones/Empoderando_jovens.png" alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src="./src/assets/icones/Tecnologia.png" alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src="./src/assets/icones/carreira.png" alt="Ícone representando doação de alimentos" />
            </div>

    </div>
    </div>
    </>
  )

}
