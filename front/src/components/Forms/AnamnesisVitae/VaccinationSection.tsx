import React from "react";
import { RadioGroup, ConditionalFields } from "../../FormFields";
import { VaccinationDewormingState } from "../../../types/interfaces/anamnesis";
import { HandleNestedChangeFunction } from "../../../types/types/changeHandlers";

interface VaccinationSectionProps {
  vaccination: VaccinationDewormingState;
  handleNestedChange: HandleNestedChangeFunction;
  className?: string;
}

const vaccinationStatusOptions = [
  { value: "vaccinated", label: "Вакцинований(-а)" },
  { value: "notVaccinated", label: "Не вакцинований(-а)" },
  { value: "unknown", label: "Невідомо" },
];

export const VaccinationSection: React.FC<VaccinationSectionProps> = ({
  vaccination,
  handleNestedChange,
  className = "",
}) => {
  return (
    <div className={className}>
      <h3 className="text-lg font-medium mb-2">Вакцинація</h3>

      <RadioGroup
        label=""
        name="vaccinationStatus"
        options={vaccinationStatusOptions}
        value={vaccination.status}
        onChange={(value) => handleNestedChange("vaccination", "status", value)}
        className="mb-2"
      />

      <ConditionalFields
        condition={vaccination.status === "vaccinated"}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 mt-3"
      >
        <div>
          <label className="block mb-1 text-sm">Дата останньої вакцинації</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md bg-primary-bg"
            value={vaccination.lastDate}
            onChange={(e) => handleNestedChange("vaccination", "lastDate", e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Вакцина</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md bg-primary-bg"
            value={vaccination.vaccine}
            onChange={(e) => handleNestedChange("vaccination", "vaccine", e.target.value)}
            placeholder="Назва вакцини"
          />
        </div>
      </ConditionalFields>
    </div>
  );
};
