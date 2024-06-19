import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/ui/input";

const FormTextField = ({ name, label, ...props }: any) => {
  return (
    <Controller
      name={name}
      rules={{ required: true }}
      render={({ field }) => (
        <Input type="email" placeholder={label} {...field} {...props} />
      )}
    />
  );
};

export default FormTextField;
