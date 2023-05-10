import styles from "./styles.module.css";
import Head from "../Head";
import useMedia from "../../Hooks/useMedia";
import Gym from "../../assets/gym.json";
import Lottie from "lottie-react";

const index = () => {
  const mobile = useMedia("(max-width: 450px)");
  const width = mobile ? 300 : 400;

  return (
    <section className={styles.main}>
      <Head
        title="Lotus | Saúde e Estética"
        description="Aprenda mais sobre saúde e estética. Calcule a contagem de calorias e macronutrientes feita exclusivamente para o seu objetivo. Tudo isso gratuitamente, de forma rápida, fácil e objetiva."
      />

      <div className={styles.mainLeft}>
        <h1 className={styles.title}>Lotus, o melhor do fitness!</h1>
        <div className={styles.subLeft}>
          <p>
            Você está procurando um conteúdo objetivo, sem enrolação e de
            qualidade? Pois bem, você está no lugar certo. E permita-me
            complementar: aqui você terá tudo isso{" "}
            <span className={styles.span}>GRATUITAMENTE</span>.
          </p>
          <p>Navegue entre os links do menu para mais informações.</p>
        </div>
      </div>

      <div className={styles.lottie}>
        <Lottie animationData={Gym} width={width} height={width} />
      </div>
    </section>
  );
};

export default index;
