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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const FooterText = styled.span`
  color: ${({ theme }) => theme.colors.text.primary_light};
  font-size: 11px;
  letter-spacing: 2px;

  a {
    transition: .15s color;
  }

  a:hover {
    transition: .15s color;
    color: ${({ theme }) => theme.colors.background.secondary_colorful}
  }
`;

export const Main = styled.main`
  display: flex;
`;
