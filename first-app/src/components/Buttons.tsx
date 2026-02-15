interface ButtonsProps {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger"; // optional prop with default value
  onClick: () => void;
}

const Buttons = ({ children, color = "primary", onClick }: ButtonsProps) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Buttons;
