import s from "./usuario.module.scss"
import { MdOutlinePlace } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { SlEvent } from "react-icons/sl";


const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <img src="https://avatars.githubusercontent.com/u/152770924?v=4" alt="Imagem do perfil do usuário" />
        <div className={s.div}>
          <h1>Alessandra Santana</h1>
          <h2>Voluntário Ativo</h2>
          <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
          <ul>
            <li><MdOutlinePlace /> Rio de Janeiro - RJ</li>
            <li><CiMail />alesy@gmail.com</li>
            <li><SlEvent />Membro desde Fevereiro 2026</li>
          </ul>
          <ul className={s.tipo}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
export default Usuario