import React from "react";
import CommonPage from "containers/CommonPage";
import Inline from "containers/Inline";
import Button from "containers/Button";
import Google from "assets/images/google.svg";
import Apple from "assets/images/apple.svg";

import {
  Wrapper, Title, SubTitle, Form, OrLine,
} from "./style";

const LoginPage: React.FC = () => (
  <CommonPage>
    <Wrapper>
      <Title>Getting started</Title>
      <SubTitle>Create an account to continue and connect with the people</SubTitle>
      <Form>
        <Inline gap={20}>
          <Inline.Container>
            <Button>
              <Inline gap={0}>
                <Inline.Container flex="none">
                  <img src={Google} alt="google" width="20" height="20" />
                </Inline.Container>
                <Inline.Container>
                  <span>Log in with google</span>
                </Inline.Container>
              </Inline>
            </Button>
            {/* <img src={Google} alt="google" width="20" height="20" /> */}
          </Inline.Container>
          <Inline.Container>
            <Button>
              <Inline gap={0}>
                <Inline.Container flex="none">
                  <img src={Apple} alt="apple" width="20" height="20" />
                </Inline.Container>
                <Inline.Container>
                  <span>Log in with apple</span>
                </Inline.Container>
              </Inline>
            </Button>
          </Inline.Container>
        </Inline>

        <OrLine>Or</OrLine>
      </Form>
    </Wrapper>
  </CommonPage>
);

export default LoginPage;
