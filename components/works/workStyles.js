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
    background-color: #112240;
    border-radius: 6px;
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
`
export const CardHeader = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    padding: 2rem 1.75rem;
    align-items: center;
    /* margin-bottom: 35px; */
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

export const ImgContainer = styled.div`
    width: 100%;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(44, 73, 216, 0.7) 3%,  rgba(0,0,0,0.1) 95%, rgba(0,0,0,0.1) 100%);
        z-index: 1;
    }
    img {
        max-width: 100%;
        height: 300px;
    }
`

export const CardTitle = styled.h3`
    padding: 2rem 1.75rem 1rem;
    position: absolute;
    top: 20px;
    left: 10px;
    z-index: 2;
`

export const CardContent = styled.p`
    padding: 2rem 1.75rem 0rem;
    color: #bababa;

`
export const CardFooter = styled.footer`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 1rem 1.75rem ;

    span {
        color: gray;
        padding: 6px;
        border-radius: 2px;
        background: #2c49d826;
        display: block;
    }
`
