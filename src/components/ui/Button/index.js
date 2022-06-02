import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  // PROPS VARIANT
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // PROPS FULL
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}

    /* ${(props) => props.size && css`
    font-size: ${props.theme.sizes[props.size].font};
    padding: ${props.theme.sizes[props.size].padding};
    `}

    //PROPS VARIANT
    background-color: ${({theme,variant}) => theme.colors[variant] || theme.colors["primary"]} */
`;

export default Button;
