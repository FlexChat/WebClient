import useCombinedRef from "hooks/useCombinedRef";
import useInputRules from "hooks/useInputRules";
import React, {
  useId, useEffect, useRef, useState,
} from "react";
import {
  InputWrapper, Icon, InputMain, ErrorText, Wrapper,
} from "./style";

interface Props {
  placeholder?: string;
  type?: string;
  iconPath?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(({
  placeholder, type, iconPath, maxLength, minLength, required,
}, ref) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [invalidMessage, setInvalidMessage] = useState<null | string>(null);
  const getDefaultValidate = useInputRules(inputRef);
  const cbRef = useCombinedRef(ref as React.MutableRefObject<HTMLElement | null>, inputRef);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.addEventListener("invalid", (event) => {
      console.log("invalid");
      setInvalidMessage(getDefaultValidate());
      event.preventDefault();
    });
    inputRef.current.addEventListener("input", (event) => {
      setInvalidMessage(null);
      event.preventDefault();
    });
  }, []);

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor={id}>
          {iconPath && <Icon src={iconPath} width="20" height="20" alt={placeholder} />}
          <span>{placeholder}</span>
        </label>
        <InputMain
          placeholder={placeholder}
          type={type || "text"}
          isIcon={iconPath !== null}
          id={id}
          maxLength={maxLength}
          minLength={minLength}
          ref={cbRef}
          required={required}
        />
      </InputWrapper>
      {invalidMessage && <ErrorText>{invalidMessage}</ErrorText>}
    </Wrapper>
  );
});

export default Input;
