import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary_light};
  margin-bottom: 50px;
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
  text-align: center;
`;

interface RefProp {
  // TODO: remove
  ref: any;
}

export const Form = styled.form<RefProp>`
  margin-top: 20px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.background.primary_dark_light};
  border-radius: 15px;
  width: 550px;
  max-width: calc(100vw - 40px);
`;

export const FormBottom = styled.p`
  font-size: 14px;
  width: 100%;
  text-align: center;
  display: block;
  margin-top: 30px;
  margin-bottom: 0px;

  & a {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.background.secondary_colorful};
  }

  & a:focus {
    outline: 1px solid ${({ theme }) => theme.colors.background.secondary_colorful};
  }
`;

export const OrLine = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin: 25px 0;

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
