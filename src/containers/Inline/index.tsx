import React, { useContext } from "react";
import { Wrapper, ContainerWrap } from "./style";

const GapContext = React.createContext<number>(-1);

type Props = {
  children?: React.ReactNode;
}

type ContainerProps = {
  flex?: string,
} & Props;

const Container: React.FC<ContainerProps> = ({ children, flex }) => {
  const gap = useContext(GapContext);
  return (
    <ContainerWrap gap={gap} flex={flex}>{children}</ContainerWrap>
  );
};

type LineProps = {
  gap: number;
} & Props;

const Inline:React.FC<LineProps> & {Container: React.FC<ContainerProps>} = ({ children, gap }) => (
  <GapContext.Provider value={gap}>
    <Wrapper>
      {children}
    </Wrapper>
  </GapContext.Provider>
);

Inline.Container = Container;

export default Inline;
// export {
// Container,
// };
