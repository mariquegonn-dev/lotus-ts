import styles from "./styles.module.css";

type inputSelectType = {
  label: string;
  desc: string;
  name: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  onClick: React.PointerEventHandler<HTMLSelectElement>;
  children: React.ReactNode | string | undefined;
  className?: string;
};

const index = ({
  label,
  desc,
  name,
  value,
  onChange,
  onClick,
  children,
  className,
}: inputSelectType) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <p className={styles.desc}>{desc}</p>
      <select
        className={className ? `${styles.select} ${className}` : styles.select}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onClick={onClick}
      >
        {children}
      </select>
    </>
  );
};

export default index;
