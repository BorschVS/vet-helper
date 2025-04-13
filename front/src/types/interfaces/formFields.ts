export interface СheckboxOption {
  key: string;
  label: string;
}

export interface RadioOption {
  value: string;
  label: string;
}

export interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  rows?: number;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export interface RadioGroupProps {
  name: string;
  label: string;
  value: string;
  className?: string;
  options: RadioOption[];
  onChange: (value: string) => void;
}

export interface CheckboxGroupProps {
  label: string;
  columns?: number;
  className?: string;
  options: СheckboxOption[];
  values: Record<string, boolean> | { [key: string]: boolean | undefined | string };
  onChange: (key: string, checked: boolean) => void;
}

export interface DateFieldProps {
  label: string;
  value: string;
  name?: string;
  minDate?: string;
  maxDate?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export interface TextFieldProps {
  label: string;
  value: string;
  className?: string;
  placeholder?: string;
  type?: "text" | "date" | "number";
  onChange: (value: string) => void;
}

export interface ConditionalFieldsProps {
  condition: boolean;
  className?: string;
  children: React.ReactNode;
}
