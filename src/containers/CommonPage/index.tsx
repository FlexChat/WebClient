import React from "react";
import { Wrapper, Main } from "./style";

type Props = {
  children?: React.ReactNode;
}

const CommonPage: React.FC<Props> = ({ children }) => (
  <Wrapper>
    header
    <Main>
      {children}
    </Main>
  </Wrapper>
);

export default CommonPage;
