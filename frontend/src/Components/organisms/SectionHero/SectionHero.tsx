import Heading from "@Components/atoms/Heading";
import SectionTemplate from "@templates/SectionTemplate";
import Image from "@atoms/Image";

const SectionHero = () => {
  return (
    <div>
        <SectionTemplate>
            <Heading text="ADOPT NOW AND SAVE LIVES"/>
            <Image src="/Images/hero-img.jpg" alt="pets img"/>
        </SectionTemplate>
    </div>
  )
}

export default SectionHero