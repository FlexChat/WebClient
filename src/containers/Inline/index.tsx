import React, { useContext, useMemo } from "react";
import { Wrapper, ContainerWrap } from "./style";

const GapContext = React.createContext<{gap: number, column?: boolean}>({
  gap: 1,
  column: false,
});

type Props = {
  children?: React.ReactNode;
}

type ContainerProps = {
  flex?: string,
} & Props;

const Container: React.FC<ContainerProps> = ({ children, flex }) => {
  const { gap, column } = useContext(GapContext);
  return (
    <ContainerWrap gap={gap} column={column} flex={flex}>{children}</ContainerWrap>
  );
};

type LineProps = {
  gap: number;
  column?: boolean;
} & Props;

const Inline:React.FC<LineProps> & {Container: React.FC<ContainerProps>} = ({
  children, gap, column,
}) => {
  const data = useMemo(() => ({
    gap, column,
  }), [gap, column]);

  return (
    <GapContext.Provider value={data}>
      <Wrapper column={column}>
        {children}
      </Wrapper>
    </GapContext.Provider>
  );
};

Inline.Container = Container;

export default Inline;
// export {
// Container,
// };
