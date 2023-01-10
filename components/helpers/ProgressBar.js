
import { useEffect, useState } from "react";
import { Progress, ProgressDiv } from "./progressBarStyles";

export const ProgressBar =  ({width, percent, title, color}) => {

    const [value, setValue] = useState(0);

    useEffect(() => {
      setValue(percent * width);
    }, [percent, width]);
  
  
    let progress = percent * width;

    return (
      <ProgressDiv style={{width: width}} title={title}>
           <Progress style={{width: `${progress}px`, background: color}} />
      </ProgressDiv>
    )
}