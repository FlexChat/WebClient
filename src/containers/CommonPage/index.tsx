import React from "react";
import Header from "components/Header";
import { Wrapper, Main, Footer } from "./style";

type Props = {
  children?: React.ReactNode;
}

const CommonPage: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer>
      <div>123</div>
    </Footer>
  </Wrapper>
);

export default CommonPage;
