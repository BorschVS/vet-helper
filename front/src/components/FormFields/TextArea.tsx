import React from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  className = '',
  rows = 3
}) => {
  return (
    <div className={className}>
      <label className="block mb-2 font-medium">{label}</label>
      <textarea
        className="w-full p-2 border rounded-md bg-primary-bg"
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;