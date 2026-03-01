import { useState } from "react";
import styles from "./login.module.scss";
import logo from "../../assets/icones/img.png"
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className={styles.container}>
      
      {/* LADO ESQUERDO */}
      <div className={styles.left}>
        <img src={logo} alt="Logo Projeto Social" className={styles.logo} />
        <h1 className={styles.title}>
          Projetos Sociais <br /> que transformam
        </h1>
      </div>

      {/* LADO DIREITO */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.formTitle}>Entrar</h2>

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

       <Link to="/PaginaInicial" type="submit" className={styles.button}>        
          Entrar
        </Link>
      </form>
    </div>
  );
}