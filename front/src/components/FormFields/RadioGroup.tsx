import React from "react";
import { RadioGroupProps } from "../../types/interfaces/formFields";

const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options, value, onChange, className = "" }) => {
  return (
    <div className={className}>
      <label className="block mb-2 font-medium">{label}</label>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
