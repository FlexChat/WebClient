import React, { useEffect, useState } from "react";
import useDeviceDetect from "./useDeviceDetect";

const useForm = (formRef: React.MutableRefObject<HTMLElement | undefined>) => {
  const isMobile = useDeviceDetect();
  const [isValid] = useState(true);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    console.log("submit");
    event.preventDefault();
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
  };
};

export default useForm;
