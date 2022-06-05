import React, { useEffect, useState } from "react";
import useDeviceDetect from "./useDeviceDetect";

const useForm = (formRef: React.MutableRefObject<HTMLElement | undefined>) => {
  const isMobile = useDeviceDetect();
  const [isValid] = useState(true);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    formRef.current?.blur();
  };

  // eslint-disable-next-line no-unused-vars
  type ButtonClick<T> = (e: React.MouseEvent<T, MouseEvent>) => void

  const handleButtonClick: ButtonClick<HTMLButtonElement> = (event) => {
    const target = event.target as HTMLButtonElement;
    target.blur();
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
