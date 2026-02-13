import s from "./infoCard.module.scss"
import Swal from 'sweetalert2'



const InfoCard = (props) => {
return (
<section className={s.article}>
<img src={props.img} alt={props.alt} />
<div className={s.conteudo}>
<h2>{props.subtitulo}</h2>
<p>{props.paragrafo}</p>
<p>{props.segParagrafo}</p>
</div>
<button onClick={() =>  
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Inscrito com Sucesso!",
  showConfirmButton: false,
  timer: 1500
})}>{props.textoBotao}</button>
</section>
)
}

export default InfoCard