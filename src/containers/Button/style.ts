import styled from "styled-components";

const Wrapper = styled.button`
  padding: 15px 25px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.background.secondary_light};
  color: ${({ theme }) => theme.colors.text.primary_light};
  transition: background .15s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.background.secondary_dark};
    transition: background .15s;
  }
  &:active {
    background: ${({ theme }) => theme.colors.background.secondary_darker};
    transition: background .15s;
  }
`;

export default Wrapper;
