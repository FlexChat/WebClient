import React from "react";
import Header from "components/Header";
import {
  Wrapper, Main, Footer, FooterText,
} from "./style";

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
      <FooterText>
        Flex by
        {" "}
        <a href="https://github.com/AlexZhaba" target="_blank" rel="noreferrer" tabIndex={-1}>AlexZhaba</a>
        {" "}
        &
        {" "}
        <a href="https://github.com/de1phin" target="_blank" rel="noreferrer" tabIndex={-1}>De1phin</a>
      </FooterText>
    </Footer>
  </Wrapper>
);

export default CommonPage;
