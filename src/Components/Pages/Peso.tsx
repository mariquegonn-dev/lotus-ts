import styles from "./Pages.module.css";
import Button from "../Button";
import Input from "../Input/InputDigit";
import PesoImg from "../../assets/png/peso.png";
import { useDispatch, useSelector } from "react-redux";
import { addError, addPeso, addSteps, useSteps } from "../../redux/sliceSteps";

const Peso = () => {
  const { step, peso, error } = useSelector(useSteps);
  const dispatch = useDispatch();

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          type="number"
          name="peso"
          label="Qual o seu peso?"
          desc="Especifique o seu peso em quilogramas (kg)"
          value={peso === "" ? "" : peso}
          placeholder={peso !== "" ? "" : "70"}
          onChange={({ target }) => dispatch(addPeso(target.value))}
          auxiliar="kg"
        />

        {error && peso === "" && (
          <p className="error">Insira o seu peso antes de avançar.</p>
        )}

        <div className={styles.buttons}>
          <Button
            side="left"
            text="ANTE"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addSteps(step - 1));
            }}
          />

          <Button
            text="PRÓX"
            onClick={(e) => {
              e.preventDefault();
              if (peso !== "") {
                if (step !== 7) {
                  dispatch(addSteps(step + 1));
                  dispatch(addError(false));
                }
              } else dispatch(addError(true));
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={PesoImg} alt="" />
    </div>
  );
};

export default Peso;
