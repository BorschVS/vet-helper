import React from "react";
import { RadioGroup, ConditionalFields, DateField, TextField } from "../../FormFields";
import { VaccinationDewormingState } from "../../../types/interfaces/anamnesis";
import { HandleNestedChangeFunction } from "../../../types/types/changeHandlers";

interface DewormingSectionProps {
  deworming: VaccinationDewormingState;
  handleNestedChange: HandleNestedChangeFunction;
  className?: string;
}

const dewormingStatusOptions = [
  { value: "done", label: "Проведена" },
  { value: "notDone", label: "Не проведена" },
  { value: "unknown", label: "Невідомо" },
];

export const DewormingSection: React.FC<DewormingSectionProps> = ({
  deworming,
  handleNestedChange,
  className = "",
}) => {
  return (
    <div className={className}>
      <h3 className="text-lg font-medium mb-2">Дегельмінтизація</h3>

      <RadioGroup
        label=""
        name="dewormingStatus"
        options={dewormingStatusOptions}
        value={deworming.status}
        onChange={(value) => handleNestedChange("deworming", "status", value)}
        className="mb-2"
      />

      <ConditionalFields
        condition={deworming.status === "done"}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 mt-3"
      >
        <DateField
          label="Дата останньої дегельмінтизації"
          value={deworming.lastDate}
          onChange={(value) => handleNestedChange("deworming", "lastDate", value)}
        />

        <TextField
          label="Препарат"
          value={deworming.drug || ""}
          onChange={(value) => handleNestedChange("deworming", "drug", value)}
          placeholder="Назва препарату"
        />
      </ConditionalFields>
    </div>
  );
};
