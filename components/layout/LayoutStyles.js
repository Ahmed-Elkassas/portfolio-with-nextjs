import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 90%;
margin: auto;
padding: 10px 25px;
@media ${props => props.theme.breakpoints.sm} {
    padding: 10px 10px;
}
`;