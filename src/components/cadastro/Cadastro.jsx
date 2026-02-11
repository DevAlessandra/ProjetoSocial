import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./cadastro.module.scss";
import Swal from "sweetalert2";

export default function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cnpj: "",
    descricao: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Empresa cadastrada com sucesso!",
      showConfirmButton: false,
      timer: 2500
    });
  }
  return (
    <main className={s.main}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h1>Cadastro de Empresa</h1>

        <input
          type="text"
          name="nome"
          placeholder="Nome da empresa"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cnpj"
          placeholder="CNPJ"
          value={form.cnpj}
          onChange={handleChange}
        />

        <textarea
          name="descricao"
          placeholder="Descreva a empresa"
          value={form.descricao}
          onChange={handleChange}
        />

        <div className={s.botoes}>
       <button onClick={() =>  
       Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Empresa cadastrada com sucesso!",
         showConfirmButton: false,
         timer: 2500
          })}>Cadastrar</button>


          <button type="button" onClick={() => navigate("/")}>
            Voltar ao início
          </button>
        </div>
      </form>
    </main>
  );
}
