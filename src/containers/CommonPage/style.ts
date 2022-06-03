import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.background.primary_dark};
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.background.primary_dark_light};
`;

export const Main = styled.main`
  display: flex;
`;
