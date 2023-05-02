import styles from "./styles.module.css";
import Head from "../Head/Head";

const index = () => {
  return (
    <section>
      <Head
        title="Lotus | Calorias Diárias"
        description="Faça a contagem de calorias diárias de forma fácil e rápida, baseadas no seu nível de atividade física e objetivo!"
      />
      <h1 className={styles.title}>Calorias diárias</h1>
      <div className={styles.content}></div>
    </section>
  );
};

export default index;
