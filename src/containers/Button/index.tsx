import React from "react";
import Wrapper from "./style";

type Props = {
  children?: React.ReactNode;
  maxWidth?: boolean;
  primary?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({
  children, maxWidth, primary, type, id, onClick,
}) => (
  <Wrapper maxWidth={maxWidth} primary={primary} type={type} id={id} onClick={onClick}>
    {children}
  </Wrapper>
);

export default Button;
