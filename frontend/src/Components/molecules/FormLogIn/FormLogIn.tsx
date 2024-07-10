import Button from "@Components/atoms/Button";
import Input from "@Components/atoms/Input";
import FormTemplate from "@Components/templates/FormTemplate";
import schema from "Utils/Validation/loginValidation";
import { useForm } from "react-hook-form";

const FormLogIn = () => {
  const initialValues = {
      email: "",
      password: "",
    };
    
  const { register, handleSubmit } = useForm({ 
    // initialValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      // Call API or handle form data
      console.log(data);
      // reset(); // Clear form
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <FormTemplate
      initialValues={initialValues}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type="email" placeholder="Email" value={""} />
      <Input type="password" placeholder="Password" value={""} />
      <Button text={"Continue"} />
    </FormTemplate>
  );
};

export default FormLogIn;
function yupResolver(schema: any): import("react-hook-form").Resolver<import("react-hook-form").FieldValues, any> | undefined {
    throw new Error("Function not implemented.");
}

