import React from "react";
import Wrapper from "./style";

type Props = {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Button;
