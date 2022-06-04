import styled from "styled-components";

interface ColumnProp {
  column?: boolean;
}

export const Wrapper = styled.div<ColumnProp>`
  display: flex;
  align-items: center;
  ${(props) => props.column && `
    flex-direction: column;
    justify-content: center;
  `}
`;

interface GapProps {
  gap: number;
  flex?: string;
  column?: boolean;
}

export const ContainerWrap = styled.div<GapProps>`
  flex: ${(props) => props.flex || 1};

  & button {
    width: 100%;
  }
  margin-right: ${({ gap }) => gap}px;

  ${(props) => props.column && `
    margin-right: 0;
    margin-bottom: ${props.gap}px;
    width: 100%;
  `};

  &:last-child {
    margin-right: 0px;
  }
`;
