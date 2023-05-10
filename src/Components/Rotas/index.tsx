import styles from "./styles.module.css";
import Head from "../Head";
import Steps from "../Steps";
import { useSelector } from "react-redux";
import { useSteps } from "../../redux/sliceSteps";
import Sexo from "../Pages/Sexo";
import Idade from "../Pages/Idade";
import Altura from "../Pages/Altura";
import Peso from "../Pages/Peso";

const index = () => {
  const { step } = useSelector(useSteps);

  const handleContent = () => {
    switch (step) {
      case 0:
        return <Sexo />;
      case 1:
        return <Idade />;
      case 2:
        return <Altura />;
      case 3:
        return <Peso />;
      default:
        return <Sexo />;
    }
  };

  return (
    <section className={`${styles.calorias}`}>
      <Head
        title="Lotus | Calorias Diárias"
        description="Faça a contagem de calorias diárias de forma fácil e rápida, baseadas no seu nível de atividade física e objetivo!"
      />
      <h1 className={styles.title}>Calorias diárias</h1>
      <div className={styles.content}>
        <Steps />
        {handleContent()}
      </div>
    </section>
  );
};

export default index;
