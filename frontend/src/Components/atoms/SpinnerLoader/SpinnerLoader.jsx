import { useEffect, useState } from "react";
import {SpinnerWrapper} from "./SpinnerLoader.style";
import SectionTemplate from "@Components/templates/SectionTemplate";

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
    <SectionTemplate>
        {showImg ? (
            <img src="/Images/spinner.svg" alt="spinner"/>
        ) : (
            <h3>{text}</h3>
        )}
    </SectionTemplate>
  )
}

export default SpinnerLoader