import React, { useCallback } from "react";

const useCombinedRef = (
  ...refs: (React.MutableRefObject<HTMLElement | null>)[]
) => {
  const combinedRef = useCallback((el: HTMLElement | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      // eslint-disable-next-line no-param-reassign
      ref.current = el;
    });
  }, refs);

  return combinedRef;
};

export default useCombinedRef;
