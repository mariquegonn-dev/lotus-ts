import styles from "./Pages.module.css";
import ObjetivoImg from "../../assets/png/objetivo.png";
import Button from "../Button";
import Input from "../Input/InputSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  addError,
  addObjetivo,
  addSteps,
  useSteps,
} from "../../redux/sliceSteps";

const Objetivo = () => {
  const { step, objetivo, error } = useSelector(useSteps);
  const dispatch = useDispatch();

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          name="objetivo"
          label="Qual o seu objetivo?"
          desc="Especifique o seu objetivo abaixo."
          value={objetivo === undefined ? "" : objetivo}
          onChange={({ target }) => dispatch(addObjetivo(target.value))}
          onClick={({ currentTarget }) => {
            objetivo !== undefined
              ? (currentTarget[0].disabled = true)
              : undefined;
          }}
        >
          <option>Selecione</option>
          <option value="perder">Perder Peso</option>
          <option value="manter">Manter Peso</option>
          <option value="ganhar">Ganhar Peso</option>
        </Input>

        {error && objetivo === undefined && (
          <p className="error">Defina um objetivo.</p>
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
            text="RESULT"
            onClick={(e) => {
              e.preventDefault();
              if (objetivo !== undefined) {
                if (step !== 7) {
                  dispatch(addSteps(step + 1));
                  dispatch(addError(false));
                }
              } else dispatch(addError(true));
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={ObjetivoImg} alt="" />
    </div>
  );
};

export default Objetivo;
