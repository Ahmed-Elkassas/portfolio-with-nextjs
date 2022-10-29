import { CardContent } from 'components/works/workStyles';
import {useState} from 'react'
import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    color: #b3ffae;
    border: none;
    padding: 6px;
`

export const ShowMoreButton = ({children, textLimit}) => {

    const [isShown, setIsShow] = useState(false);

    const toggleHanlder = () => {
        setIsShow(prevState => !prevState)
    }

  return (
    <>
        <CardContent>{isShown ? children : children.substr(0, textLimit) + "..."}<Button onClick={toggleHanlder}>{isShown ? 'Read less' : "Read more"}</Button></CardContent>
       
    </>
  )
}
