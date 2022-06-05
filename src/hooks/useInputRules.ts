import React, { useCallback } from "react";

interface Rules {
  valueMissing: boolean;
  tooShort: boolean;
  tooLong: boolean;
  typeMismatch: boolean;
}

type InvalidRuleMessages = {
  // eslint-disable-next-line no-unused-vars
  [name in keyof Rules]: string;
};

// eslint-disable-next-line no-unused-vars
type FunctionRules = (iinputRef: React.RefObject<HTMLInputElement | null>) => () => string | null;

const useInputRules: FunctionRules = (inputRef: React.RefObject<HTMLInputElement | null>) => {
  const getValidateMessage = useCallback(() => {
    if (!inputRef.current) return null;
    const validityState = inputRef.current.validity;

    const rulesMessages: InvalidRuleMessages = {
      tooLong: "Too long value",
      tooShort: "Too short value",
      valueMissing: "Field is empty",
      typeMismatch: "Field is incorrect",
    };
    if (validityState.valueMissing) {
      return rulesMessages.valueMissing;
    } if (validityState.tooShort) {
      return rulesMessages.tooShort;
    } if (validityState.tooLong) {
      return rulesMessages.tooLong;
    } if (validityState.typeMismatch) {
      return rulesMessages.typeMismatch;
    }

    return null;
  }, [inputRef]);

  return getValidateMessage;
};

export default useInputRules;
