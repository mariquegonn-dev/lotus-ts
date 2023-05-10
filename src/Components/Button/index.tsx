import styles from "./styles.module.css";

type buttonType = {
  text: string;
  side?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const index = ({ text, side, onClick }: buttonType) => {
  return (
    <button
      onClick={onClick}
      className={
        side === "left"
          ? `${styles.button} ${styles.buttonLeft}`
          : styles.button
      }
    >
      <span className={side === "left" ? styles.left : ""}></span>
      <p>{text}</p>
      <span className={side === "left" ? "" : styles.right}></span>
    </button>
  );
};

export default index;
