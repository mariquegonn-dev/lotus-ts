import styles from "./styles.module.css";
import Head from "../Head";
import Steps from "../Steps";
import { useSelector } from "react-redux";
import { useSteps } from "../../redux/sliceSteps";
import Sexo from "../Pages/Sexo";

const index = () => {
  const { step } = useSelector(useSteps);

  const handleContent = () => {
    switch (step) {
      case 0:
        return <Sexo />;
      default:
        return <Sexo />;
    }
  };

  return (
    <section>
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
