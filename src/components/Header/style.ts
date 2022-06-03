import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 20px;
`;

export const CompanyName = styled.span`
  color: ${({ theme }) => theme.colors.text.primary_light};
  font-size: 26px;
`;
