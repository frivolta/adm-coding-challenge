import styled from "@emotion/styled";
import {colors} from "../../globals/theme";
import {memo} from "react";

const Header = memo(({title, subtitle}) => {
    return (
        <>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </>
    )
})

Header.defaultProps = {
    title: "",
    subtitle: "",
}

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${colors.primary};
  margin: 0.6rem 0
`
const Subtitle = styled.p`
  font-size: 1rem;
  color: ${colors.secondary};
  margin: 0.2rem 0;
`

export default Header