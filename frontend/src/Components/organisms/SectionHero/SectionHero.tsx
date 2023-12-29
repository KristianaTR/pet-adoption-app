import Heading from "@Components/atoms/Heading";
import SectionTemplate from "@templates/SectionTemplate";
import Image from "@atoms/Image";

const SectionHero = () => {
  return (
    <SectionTemplate>
        <Heading text="Adopt now and save lives"/>
        <Image src="/Images/hero-img.jpg" alt="pets img"/>
    </SectionTemplate>
  )
}

export default SectionHero