import useCombinedRef from "hooks/useCombinedRef";
import useInputRules from "hooks/useInputRules";
import React, {
  useId, useEffect, useRef, useState,
} from "react";
import {
  InputWrapper, Icon, InputMain, ErrorText, Wrapper, Right,
} from "./style";

interface RightComponentProps {
  type: "password" | "text" | "email";
  setType: Function;
}

interface Props {
  placeholder?: string;
  type?: "password" | "text" | "email";
  iconPath?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  RightComponent?: React.FC<RightComponentProps>,
  setPasswordType?: Function,
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(({
  placeholder, type, iconPath, maxLength, minLength, required, RightComponent, setPasswordType,
}, ref) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [invalidMessage, setInvalidMessage] = useState<null | string>(null);
  const [inputType, setInputType] = useState<"password" | "text" | "email" | undefined>(type);
  const getDefaultValidate = useInputRules(inputRef);
  const cbRef = useCombinedRef(ref as React.MutableRefObject<HTMLElement | null>, inputRef);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.addEventListener("invalid", (event) => {
      const { detail } = event as Event & { detail?: { error?: string } };
      if (detail && detail.error) {
        setInvalidMessage(detail.error);
        return;
      }
      setInvalidMessage(getDefaultValidate());
      event.preventDefault();
    });
    inputRef.current.addEventListener("input", (event) => {
      setInvalidMessage(null);
      event.preventDefault();
    });
  }, []);

  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor={id}>
          {iconPath && <Icon src={iconPath} width="20" height="20" alt={placeholder} />}
          <span>{placeholder}</span>
        </label>
        <InputMain
          placeholder={placeholder}
          type={inputType || "text"}
          isIcon={iconPath !== null}
          id={id}
          maxLength={maxLength}
          minLength={minLength}
          ref={cbRef}
          required={required}
        />
        <Right>
          {RightComponent && (
          <RightComponent
            type={inputType || "text"}
            setType={(typ: "text" | "email" | "password") => {
              setInputType(typ);
              if (setPasswordType) {
                setPasswordType(typ);
              }
            }}
          />
          )}
        </Right>
      </InputWrapper>
      {invalidMessage && <ErrorText>{invalidMessage}</ErrorText>}
    </Wrapper>
  );
});

export default Input;
