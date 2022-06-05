import useCombinedRef from "hooks/useCombinedRef";
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
  onInvalidFormMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(({
  placeholder, type, iconPath, maxLength, minLength, onInvalidFormMessage,
}, ref) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isValid, setIsValid] = useState(true);
  const cbRef = useCombinedRef(ref as React.MutableRefObject<HTMLElement | null>, inputRef);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.addEventListener("invalid", (event) => {
      setIsValid(false);
      event.preventDefault();
    });
    inputRef.current.addEventListener("input", (event) => {
      setIsValid(true);
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
        />
      </InputWrapper>
      {!isValid && <ErrorText>{onInvalidFormMessage}</ErrorText>}
    </Wrapper>
  );
});

export default Input;
