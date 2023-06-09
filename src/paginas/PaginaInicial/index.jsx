import styles from './PaginaInicial.module.scss'
import banner from './banner.png'
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa de fotos do espaço!</h1>
            <img  src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
      </main>
    </>
  );
}
