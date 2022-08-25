import styled from "@emotion/styled";
import {colors, noWrap} from "../../globals/theme";

export const Td = styled.td`
  text-align: left;
  color: ${colors.secondary};
  padding: 1rem 1.75rem;
  font-size: 0.75rem;
  font-weight: normal;
  border-bottom: 1px solid ${colors.background};
  ${noWrap};
`
