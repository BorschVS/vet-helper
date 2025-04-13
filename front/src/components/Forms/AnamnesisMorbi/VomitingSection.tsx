import React from "react";
import { VomitingState } from "../../../types/interfaces/anamnesis";
import { HandleNestedChangeFunction } from "../../../types/types/changeHandlers";
import { ConditionalFields } from "../../FormFields";

interface VomitingSectionProps {
  vomiting: VomitingState;
  handleNestedChange: HandleNestedChangeFunction;
}

export const VomitingSection: React.FC<VomitingSectionProps> = ({ vomiting, handleNestedChange }) => {
  return (
    <div>
      <div className="flex items-center mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={vomiting.present}
            onChange={(e) => handleNestedChange("vomiting", "present", e.target.checked)}
            className="mr-1"
          />
          Додатково
        </label>
      </div>

      <ConditionalFields condition={vomiting.present} className="pl-5 grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
        <div>
          <label className="block mb-1 text-sm">Частота</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md bg-primary-bg"
            value={vomiting.frequency}
            onChange={(e) => handleNestedChange("vomiting", "frequency", e.target.value)}
            placeholder="Скільки разів на добу?"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Вміст</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md bg-primary-bg"
            value={vomiting.content}
            onChange={(e) => handleNestedChange("vomiting", "content", e.target.value)}
            placeholder="Що містилось у блювотних масах?"
          />
        </div>
      </ConditionalFields>
    </div>
  );
};
