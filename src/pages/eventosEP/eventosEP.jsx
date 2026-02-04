import React from 'react'
import s from './eventosEP.module.scss'
import Empoderando_jovens from "../../assets/icones/Empoderando_jovens.png"
import Tecnologia from "../../assets/icones/Tecnologia.png"
import Carreira from "../../assets/icones/Carreira.png"

export default function EventosEP() {
  return (
     <>
    <div className={s.eventosEP}>
        <div className={s.eventostitulo}>
            <h1>Eventos & Palestras </h1>
        </div>

        <div className={s.eventosconteudo}>
            <div className={s.cards}>
                <img src={Empoderando_jovens} alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src={Tecnologia} alt="Ícone representando doação de alimentos" />
            </div>
             <div className={s.cards}>
                <img src={Carreira} alt="Ícone representando doação de alimentos" />
            </div>

    </div>
    </div>
    </>
  )

}
