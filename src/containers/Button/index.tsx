import React from "react";
import Wrapper from "./style";

type Props = {
  children?: React.ReactNode;
  maxWidth?: boolean;
  primary?: boolean;
}

const Button: React.FC<Props> = ({ children, maxWidth, primary }) => (
  <Wrapper maxWidth={maxWidth} primary={primary}>
    {children}
  </Wrapper>
);

export default Button;
