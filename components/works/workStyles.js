import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    background-color: #112240;
    border-radius: 6px;
    box-shadow:  0 10px 30px -15px rgba(2,12,27,0.7);
`
export const CardHeader = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 35px;
    .project__folder {
        color: ${(props) => props.theme.colors.mainColor};
    }
    .project__links a {
        color: #fff;
    }
    svg {
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
`

export const CardTitle = styled.h3`

`

export const CardContent = styled.p`
    margin: 15px auto;
`
export const CardFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    span {
        color: gray;
        display: block;
    }
`