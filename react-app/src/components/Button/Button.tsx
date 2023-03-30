import styles from "./Button.module.css";

interface Props {
  type: string;
  text: string;
  onChange: () => void;
}

const Button = ({ type, text, onChange }: Props) => {
  return (
    <div onClick={onChange} className={styles.button}>
      {text}
    </div>
  );
};

export default Button;
