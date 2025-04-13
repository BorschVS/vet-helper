import React from "react";
import { DateFieldProps } from "../../types/interfaces/formFields";
import { form } from "../../styles";

const DateField: React.FC<DateFieldProps> = ({
  label,
  value,
  onChange,
  className = "",
  placeholder = "",
  name,
  required = false,
  minDate,
  maxDate,
}) => {
  return (
    <div className={form.container(className)}>
      <label className={form.label.base}>
        {label}
        {required && <span className={form.label.required}>*</span>}
      </label>
      <input
        type="date"
        className={`${form.input.base} ${form.input.focus}`}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        min={minDate}
        max={maxDate}
      />
    </div>
  );
};

export default DateField;
