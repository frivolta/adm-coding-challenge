import styled from "@emotion/styled";
import {colors} from "../../globals/theme";

export const SecondaryBtn = styled.button`
  text-align: left;
  color: ${(props) => props.disabled ? colors.background : colors.secondary};
  padding: 0.35rem 0.65rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: underline;
  transition: all .5s;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
    transition: all .5s;
  }
`