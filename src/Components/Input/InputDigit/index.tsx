import styles from "./styles.module.css";

type inputDigitType = {
  type: string;
  label: string;
  desc: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  auxiliar?: string;
  placeholder?: string | number;
};

const index = ({
  type,
  label,
  desc,
  name,
  value,
  onChange,
  auxiliar,
  ...props
}: inputDigitType) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.auxiliar}>
        <input
          {...props}
          className={styles.input}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        />
        <span>{auxiliar}</span>
      </div>
    </>
  );
};

export default index;
