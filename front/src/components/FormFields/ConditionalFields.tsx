import React from "react";
import { ConditionalFieldsProps } from "../../types/interfaces/formFields";

const ConditionalFields: React.FC<ConditionalFieldsProps> = ({ condition, children, className = "" }) => {
  if (!condition) return null;

  return <div className={className}>{children}</div>;
};

export default ConditionalFields;
