import React from "react";
import { RadioGroup, ConditionalFields } from "../../FormFields";
import { DietState } from "../../../types/interfaces/anamnesis";
import { HandleNestedChangeFunction } from "../../../types/types/changeHandlers";

interface DietSectionProps {
  diet: DietState;
  handleNestedChange: HandleNestedChangeFunction;
  className?: string;
}

const dietTypeOptions = [
  { value: "natural", label: "Натуральне харчування" },
  { value: "dryFood", label: "Сухий корм" },
  { value: "wetFood", label: "Вологий корм" },
  { value: "mixed", label: "Змішане харчування" },
  { value: "unknown", label: "Невідомо" },
];

export const DietSection: React.FC<DietSectionProps> = ({ diet, handleNestedChange, className = "" }) => {
  return (
    <div className={className}>
      <h3 className="text-lg font-medium mb-2">Раціон</h3>

      <RadioGroup
        label=""
        name="dietType"
        options={dietTypeOptions}
        value={diet.type}
        onChange={(value) => handleNestedChange("diet", "type", value)}
        className="mb-2"
      />

      <ConditionalFields condition={diet.type !== "unknown" && diet.type !== "natural"} className="pl-5 mt-3">
        <div>
          <label className="block mb-1 text-sm">Бренд корму</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md bg-primary-bg"
            value={diet.brand}
            onChange={(e) => handleNestedChange("diet", "brand", e.target.value)}
            placeholder="Назва корму"
          />
        </div>
      </ConditionalFields>

      <div className="mt-3">
        <label className="block mb-1 text-sm">Додаткова інформація про харчування</label>
        <textarea
          className="w-full p-2 border rounded-md bg-primary-bg"
          rows={2}
          value={diet.details}
          onChange={(e) => handleNestedChange("diet", "details", e.target.value)}
          placeholder="Деталі раціону, режим годування..."
        />
      </div>
    </div>
  );
};
