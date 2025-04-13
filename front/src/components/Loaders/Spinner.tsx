import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: "primary" | "secondary" | "white";
  label?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = "md", className = "", color = "primary", label = "Загрузка..." }) => {
  const sizeClasses = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-3",
    lg: "h-16 w-16 border-4",
  }[size];

  const colorClasses = {
    primary: "border-accent-primary/30 border-t-accent-primary",
    secondary: "border-gray-300 border-t-gray-600",
    white: "border-white/30 border-t-white",
  }[color];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses} ${colorClasses} rounded-full animate-spin`} role="status" aria-label={label} />
      {label && <span className="sr-only">{label}</span>}
    </div>
  );
};

export default Spinner;
