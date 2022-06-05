import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  & label > span {
    display: none; 
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

export const ErrorText = styled.span`
  color: #C84C30;
  margin-top: 10px;
  margin-bottom: -5px;
  font-size: 14px;
  display: block;
`;

export const Wrapper = styled.span`

`;

interface InputProps {
  isIcon: boolean;
}

export const InputMain = styled.input<InputProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.primary_dark_light};
  border: 1px solid ${({ theme }) => theme.colors.background.secondary_light};
  border-radius: 10px;
  padding: 15px 20px;
  outline: none;
  color-scheme: dark;
  color: ${({ theme }) => theme.colors.text.primary_light};
  font-size: 14px;
  line-height: 18px;
  transition: border .15s;

  ${(props) => props.isIcon && `
    padding-left: 45px;
  `}

  &:focus {
    transition: border .15s;
    border: 1px solid ${({ theme }) => theme.colors.text.primary_light_dark};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.primary_light_dark};
  }
`;
