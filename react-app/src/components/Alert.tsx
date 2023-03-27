import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onChange: () => void;
}

const Alert = ({ children, onChange }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onChange}
      ></button>
    </div>
  );
};

export default Alert;
