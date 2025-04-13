import React from "react";
import { TextFieldProps } from "../../types/interfaces/formFields";
import { form } from "../../styles";

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  className = "",
  type = "text",
}) => {
  return (
    <div className={form.container(className)}>
      <label className={form.label.base}>{label}</label>
      <input
        type={type}
        className={`${form.input.base} ${form.input.focus}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
