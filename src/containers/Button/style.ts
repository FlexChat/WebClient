import styled from "styled-components";

interface Props {
  maxWidth?: boolean;
  primary?: boolean;
}

const Wrapper = styled.button<Props>`
  padding: 15px 25px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.background.secondary_light};
  color: ${({ theme }) => theme.colors.text.primary_light};
  transition: background .15s, transform .15s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.background.secondary_dark};
    transition: background .15s;
  }
  &:active, &:focus {
    background: ${({ theme }) => theme.colors.background.secondary_darker};
    transition: background .15s;
  }

  &:focus {
    outline: none;
    transform: scale(0.99);
    /* box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.colors.text.primary_light_dark}; */
  }

  ${(props) => props.maxWidth && `
    width: 100%;
  `};

  ${(props) => props.primary && `
    background: ${props.theme.colors.background.secondary_colorful};
    
    &:hover {
      background: ${props.theme.colors.background.secondary_colorful_2};
    }

    &:active, &:focus {
      background: ${props.theme.colors.background.secondary_colorful_3};
    }

    &:focus {
      outline: none;
      // box-shadow: 0px 0px 1px 1px ${props.theme.colors.text.primary_light_dark};
    }
  `};
`;

export default Wrapper;
