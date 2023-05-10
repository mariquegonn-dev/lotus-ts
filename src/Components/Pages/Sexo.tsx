import styles from "./Pages.module.css";
import Button from "../Button";
import Input from "../Input/InputSelect";
import SexoImg from "../../assets/png/sexo.png";
import { useSelector, useDispatch } from "react-redux";
import { addSteps, addError, addSexo, useSteps } from "../../redux/sliceSteps";

const Sexo = () => {
  const { sexo, step, error } = useSelector(useSteps);

  const dispatch = useDispatch();

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          label="Qual o seu sexo?"
          desc="Especifique o seu sexo."
          name="sexo"
          value={sexo === undefined ? "" : sexo}
          onChange={({ target }) => {
            dispatch(addSexo(target.value));
          }}
          onClick={({ currentTarget }) => {
            sexo !== undefined ? (currentTarget[0].disabled = true) : undefined;
          }}
        >
          <option>Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </Input>

        {error && sexo === undefined && (
          <p className="error">Selecione um sexo antes de avançar.</p>
        )}

        <Button
          text="PRÓX"
          onClick={(e) => {
            e.preventDefault();
            if (sexo !== undefined) {
              if (step !== 7) {
                dispatch(addSteps(step + 1));
                dispatch(addError(false));
              }
            } else dispatch(addError(true));
          }}
        />
      </form>

      <img className="imgPerfil" src={SexoImg} alt="" />
    </div>
  );
};

export default Sexo;
