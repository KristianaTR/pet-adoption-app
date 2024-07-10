import { FormContainer } from "./FormTemplate.style";
import { FormProps } from "./FormTemplate.types";

const FormTemplate = ({ initialValues, onSubmit, children }: FormProps) => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </FormContainer>
  );
};

export default FormTemplate;
