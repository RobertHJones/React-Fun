interface Props {
  type: string;
  text: string;
  onChange: (item: string) => void;
}

const Button = ({ type, text, onChange }: Props) => {
  return (
    <div onClick={onChange} className={type}>
      {text}
    </div>
  );
};

export default Button;
