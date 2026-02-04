import React from 'react'
import s from './voluntariado.module.scss'
import reciclagem from "../../assets/icones/reciclagem.png"
import Tecnologia from "../../assets/icones/Tecnologia.png"
import esporte from "../../assets/icones/esporte.png"

export default function Voluntariado() {
  return (
     <>
    <div className={s.voluntariado}>
        <div className={s.voluntariadotitulo}>
            <h1>Voluntariado </h1>
        </div>

        <div className={s.voluntariadoconteudo}>
            <div className={s.cards}>
                <img src={reciclagem} alt="Ícone representando reciclagem" />
            </div>
             <div className={s.cards}>
                <img src={Tecnologia} alt="Ícone aulas tecnologia" />
            </div>
             <div className={s.cards}>
                <img src={esporte} alt="Ícone esporte e inclusão " />
            </div>

    </div>
    </div>
    </>
  )

}
