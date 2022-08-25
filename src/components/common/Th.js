import styled from "@emotion/styled";
import {colors, noWrap} from "../../globals/theme";

export const Th = styled.th`
  position: sticky;
  top: 0;
  text-align: left;
  background: ${colors.headers};
  color: ${colors.secondary};
  padding: 1rem 1.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  ${noWrap};
`