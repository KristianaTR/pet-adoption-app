import { ContainerProps } from "./ContainerTemplate.types";
import { Container } from './ContainerTemplate.style';

const ContainerTemplate = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>;
};

export default ContainerTemplate;
