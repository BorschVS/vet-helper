import React from "react";
import { CheckboxGroupProps } from "../../types/interfaces/formFields";

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  values,
  onChange,
  className = "",
  columns = 2,
}) => {
  return (
    <div className={className}>
      <label className="block mb-2 font-medium">{label}</label>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-2`}>
        {options.map((option) => (
          <label key={option.key} className="inline-flex items-center">
            <input
              type="checkbox"
              checked={Boolean(values[option.key])}
              onChange={(e) => onChange(option.key, e.target.checked)}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
