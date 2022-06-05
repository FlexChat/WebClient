import React, { useRef, useState } from "react";
import CommonPage from "containers/CommonPage";
import Inline from "containers/Inline";
import Button from "containers/Button";
import Input from "components/Input";
import EyeVisible from "components/Input/EyeVIsible";
import useForm from "hooks/useForm";

import Google from "assets/images/google.svg";
import Apple from "assets/images/apple.svg";
import Email from "assets/images/email.svg";
import Person from "assets/images/person.svg";
import Key from "assets/images/key.svg";

import {
  Wrapper, Title, SubTitle, Form, OrLine,
} from "./style";

const LoginPage: React.FC = () => {
  const formRef = useRef<HTMLElement>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [passwordType, setPasswordType] = useState<"text" | "password" | "email">("password");
  const firstPasswordRef = useRef<HTMLInputElement | null>(null);
  const secondPasswordRef = useRef<HTMLInputElement | null>(null);

  const {
    handleSubmit,
    handleButtonClick,
  } = useForm(formRef, {
    firstPasswordRef,
    secondPasswordRef,
  });

  return (
    <CommonPage>
      <Wrapper>
        <Title>Getting started</Title>
        <SubTitle>Create an account to continue and connect with the people</SubTitle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Inline gap={20}>
            <Inline.Container>
              <Button type="button">
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
              <Button type="button">
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
              <Input
                placeholder="Your Email"
                type="email"
                iconPath={Email}
                ref={inputRef}
                required
              />
            </Inline.Container>
            <Inline.Container>
              <Input
                placeholder="Your Login"
                iconPath={Person}
                maxLength={15}
                minLength={4}
                required
              />
            </Inline.Container>
            <Inline.Container>
              <Input
                placeholder="Your Password"
                type={passwordType}
                iconPath={Key}
                minLength={4}
                maxLength={30}
                RightComponent={EyeVisible}
                setPasswordType={setPasswordType}
                ref={firstPasswordRef}
                required
              />
            </Inline.Container>
            <Inline.Container>
              <Input
                placeholder="Repeat Your Password"
                type={passwordType}
                iconPath={Key}
                minLength={4}
                maxLength={30}
                RightComponent={EyeVisible}
                setPasswordType={setPasswordType}
                ref={secondPasswordRef}
                required
              />
            </Inline.Container>
          </Inline>
          <Button maxWidth primary onClick={handleButtonClick}>Sign up</Button>
        </Form>
      </Wrapper>
    </CommonPage>
  );
};

export default LoginPage;
