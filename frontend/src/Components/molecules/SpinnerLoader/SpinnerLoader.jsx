import { useEffect, useState } from "react";
import {SpinnerWrapper, SpinnerContainer} from "./SpinnerLoader.style";
import Paragraph from "@atoms/Paragraph";
import Image from "@atoms/Image";

const SpinnerLoader = () => {

    const [text, setText] = useState('');
    const [showImg, setShowImg] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowImg(false);
            setText(
                'I waited for 3 seconds to be loaded, did you see the spinner?'
            )
        }, 3000)
    }, []);

  return (
    <SpinnerWrapper>
        <SpinnerContainer>
            {showImg ? (
                <Image src="/Images/spinner.svg" alt="spinner"/>
            ) : (
                <Paragraph $textAlignCenter text={text}/>
            )}
        </SpinnerContainer>
    </SpinnerWrapper>
  )
}

export default SpinnerLoader