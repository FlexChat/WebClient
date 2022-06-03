import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary_light};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 48px;
`;

export const SubTitle = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 38px;
`;

export const Form = styled.form`
  margin-top: 20px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.background.primary_dark_light};
  border-radius: 15px;
  width: 550px;
`;

export const OrLine = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-top: 25px;

  &::after {
    content: "";
    height: 1px;
    flex: 1;
    background: ${({ theme }) => theme.colors.background.secondary_light};
    margin-left: 15px;
  }

  &::before {
    content: "";
    height: 1px;
    flex: 1;
    background: ${({ theme }) => theme.colors.background.secondary_light};
    margin-right: 15px;
  }
`;
