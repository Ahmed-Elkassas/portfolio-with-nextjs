
import styled from "styled-components";

export const FooterSec = styled.footer`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    text-align: center;
    margin: 16px auto 10px;
    a {
        color: ${props => props.theme.colors.primary};
        width: max-content;
        margin: auto;
        transition: all 0.3 ease-in;
    }
    & a:hover {
        color: ${props => props.theme.colors.mainColor}
    }
`