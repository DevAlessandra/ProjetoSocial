
import styles from "./paginaInicial.module.scss";
import img from "../../assets/icones/img.png"


const PaginaInicial = () => {
  return (
    <>
    <main className={styles.home}>
        <div className={styles.bannerHome}>
            <h2>Projetos Sociais</h2>
            <h2> que transformam</h2>
            <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
      
       
        <button className={styles.btnCadastro}>Cadastrar Empresa  </button>
      
       <div className={styles.quantidades}>
            <div className={styles.qtdEmpresas}>
                <h2>500+</h2>
                <p>Empresas Voluntárias</p>
            </div>
            <div className={styles.qtdRealizados}>
                <h2>1.2K+ </h2>
                <p>Projetos Realizados</p>
            </div>
            <div className={styles.qtdVidas}>
                <h2>50K+ </h2>
                <p>Vidas Impactadas </p>
            </div>
       </div>   
         </div>
          <article className={styles.sectionParceiros}>
  <div className={styles.imgensHome}>    
            <div className={styles.img1}>
                <img src={img} alt="Imagem de pessoas em um evento social" />
            </div>
    </div>
    </article>
       
    </main>
    
  
    </>
  )
}

export default PaginaInicial