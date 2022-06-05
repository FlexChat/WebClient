import React from "react";
import Wrapper from "./style";

type Props = {
  children?: React.ReactNode;
  maxWidth?: boolean;
  primary?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({
  children, maxWidth, primary, type,
}) => (
  <Wrapper maxWidth={maxWidth} primary={primary} type={type}>
    {children}
  </Wrapper>
);

export default Button;
