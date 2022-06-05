import React, { useEffect, useState } from "react";
import useDeviceDetect from "./useDeviceDetect";

interface PasswordRefs {
  firstPasswordRef: React.RefObject<HTMLInputElement>,
  secondPasswordRef: React.RefObject<HTMLInputElement>,
}

const useForm = (formRef: React.MutableRefObject<HTMLElement | undefined>, passwordRefs: PasswordRefs) => {
  const isMobile = useDeviceDetect();
  const [isValid] = useState(true);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    console.log("submit");
    console.log(event);
    const { firstPasswordRef, secondPasswordRef } = passwordRefs;
    if (!firstPasswordRef.current || !secondPasswordRef.current) return;
    const isPasswordEqual = firstPasswordRef.current.value === secondPasswordRef.current.value;
    if (!isPasswordEqual) {
      const invalidEvent = new CustomEvent("invalid", {
        detail: {
          error: "Not equal passwords",
        },
      });
      secondPasswordRef.current.dispatchEvent(invalidEvent);
    }
  };

  // eslint-disable-next-line no-unused-vars
  type ButtonClick<T> = (e: React.MouseEvent<T, MouseEvent>) => void

  const handleButtonClick: ButtonClick<HTMLButtonElement> = (event) => {
    const target = event.target as HTMLButtonElement;
    target.blur();
    const firstInput = formRef.current?.querySelector("input:invalid") as HTMLInputElement;
    firstInput?.focus();
  };

  useEffect(() => {
    if (!formRef.current) return;
    if (!isMobile) {
      const firstInput = formRef.current.querySelector("input");
      firstInput?.focus();
    }
  }, []);

  return {
    isValid,
    handleSubmit,
    handleButtonClick,
  };
};

export default useForm;
