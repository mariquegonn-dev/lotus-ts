import React from "react";
import styles from "./Pages.module.css";
import atividadeFisicaImg from "../../assets/png/atividadeFisica.png";
import Button from "../Button";
import Input from "../Input/InputSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  addAtividadeFisica,
  addError,
  addSteps,
  useSteps,
} from "../../redux/sliceSteps";

const AtividadeFisica = () => {
  const { step, atividadeFisica, error } = useSelector(useSteps);

  const dispatch = useDispatch();

  const [active, setActive] = React.useState("selecione");

  const atividadeArray = [
    {
      label: "Selecione",
      value: "selecione",
      desc: "Selecione um dos níveis para saber sua descrição.",
    },
    {
      label: "Sedentário",
      value: "sedentario",
      desc: "Pratica pouca ou nenhuma atividade física relevante.",
    },
    {
      label: "Levemente Ativo",
      value: "leveAtivo",
      desc: "Pratica pouca ou alguma atividade física, 1-3 dias por semana.",
    },
    {
      label: "Ativo",
      value: "ativo",
      desc: "Pratica atividade física regularmente, de 3-5 dias por semana.",
    },
    {
      label: "Muito Ativo",
      value: "muitoAtivo",
      desc: "Pratica muita atividade física, 6-7 dias por semana.",
    },
    {
      label: "Extremamente Ativo",
      value: "extremeAtivo",
      desc: "Pratica muita atividade física, 2x por dia ou mais, todos ou quase todos os dias da semana.",
    },
  ];

  return (
    <div className={`animeLeft ${styles.content}`}>
      <form className={styles.form}>
        <Input
          className="input100"
          name="atividadeFisica"
          label="Qual o seu nível de atividade física?"
          desc="Especifique o seu nível de atividade física."
          value={atividadeFisica === undefined ? "" : atividadeFisica}
          onChange={({ target }) => {
            dispatch(addAtividadeFisica(target.value));
            setActive(target.value);
          }}
          onClick={({ currentTarget }) => {
            atividadeFisica !== undefined
              ? (currentTarget[0].disabled = true)
              : undefined;
          }}
        >
          {atividadeArray?.map(({ label, value }, id) => (
            <option key={id} value={value}>
              {label}
            </option>
          ))}
        </Input>

        {atividadeArray?.map(({ desc, value }, id) => (
          <p
            key={id}
            className={
              active === value
                ? `${styles.atividadeFisicaDesc} ${styles.active}`
                : styles.atividadeFisicaDesc
            }
          >
            {desc}
          </p>
        ))}

        {error && atividadeFisica === undefined && (
          <p className="error">Escolha um nível antes de avançar.</p>
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
              if (atividadeFisica !== undefined) {
                if (step !== 7) {
                  dispatch(addSteps(step + 1));
                  dispatch(addError(false));
                }
              } else dispatch(addError(true));
            }}
          />
        </div>
      </form>

      <img className="imgPerfil" src={atividadeFisicaImg} alt="" />
    </div>
  );
};

export default AtividadeFisica;
