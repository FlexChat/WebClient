import React, { useRef } from "react";
import CommonPage from "containers/CommonPage";
import Inline from "containers/Inline";
import Button from "containers/Button";
import Input from "components/Input";

import Google from "assets/images/google.svg";
import Apple from "assets/images/apple.svg";
import Email from "assets/images/email.svg";
import Person from "assets/images/person.svg";
import Key from "assets/images/key.svg";

import {
  Wrapper, Title, SubTitle, Form, OrLine,
} from "./style";

const LoginPage: React.FC = () => {
  const formRef = useRef();
  return (
    <CommonPage>
      <Wrapper>
        <Title>Getting started</Title>
        <SubTitle>Create an account to continue and connect with the people</SubTitle>
        <Form ref={formRef}>
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
          <Inline gap={20} column>
            <Inline.Container>
              <Input placeholder="Your Email" type="email" iconPath={Email} />
            </Inline.Container>
            <Inline.Container>
              <Input placeholder="Your Name" iconPath={Person} maxLength={15} />
            </Inline.Container>
            <Inline.Container>
              <Input placeholder="Your Password" type="password" iconPath={Key} />
            </Inline.Container>
          </Inline>
          <Button maxWidth primary>Sign up</Button>
        </Form>
      </Wrapper>
    </CommonPage>
  );
};

export default LoginPage;
