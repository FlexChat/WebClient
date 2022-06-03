import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface GapProps {
  gap: number;
  flex?: string;
}

export const ContainerWrap = styled.div<GapProps>`
  flex: ${(props) => props.flex || 1};

  & button {
    width: 100%;
  }
  margin-right: ${({ gap }) => gap}px;

  &:last-child {
    margin-right: 0px;
  }
`;
