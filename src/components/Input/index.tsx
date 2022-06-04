import React, { useId } from "react";
import { InputWrapper, Icon, InputMain } from "./style";

interface Props {
  placeholder?: string;
  type?: string;
  iconPath?: string;
  maxLength?: number;
}

const Input: React.FC<Props> = ({
  placeholder, type, iconPath, maxLength,
}) => {
  const id = useId();
  return (
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
      />
    </InputWrapper>
  );
};

export default Input;
