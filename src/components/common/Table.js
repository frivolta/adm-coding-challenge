import styled from "@emotion/styled";
import {colors} from "../../globals/theme";

export const Table = styled.table`
  display: grid;
  grid-template-columns: repeat(${props => props.size ?? 'auto-fill'}, minmax(150px, 1fr));
  margin: 2rem 0;
  width: auto;
  border-radius: 5px;
  border-collapse: collapse;
  padding: 1rem 2rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: ${colors.light};
`