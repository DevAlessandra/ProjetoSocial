import s from "./infoCard.module.scss"


const InfoCard = (props) => {
return (
<article className={s.article}>
<img src={props.img} alt={props.alt} />
<div className={s.conteudo}>
<h2>{props.subtitulo}</h2>
<p>{props.paragrafo}</p>
<p>{props.segParagrafo}</p>
</div>
<button>{props.textoBotao}</button>
</article>
)
}

export default InfoCard