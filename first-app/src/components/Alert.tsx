import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary">
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;

// interface Props {
//   children: string
// }

// const Alert = ({ children }: Props) => {
//   return (
//     <div className="alert alert-primary">{children}</div>
//   )
// }

// interface Props {
//   text: string
// }

// const Alert = ({ text }: Props) => {
//   return (
//     <div className="alert alert-primary">{text}</div>
//   )
// }
