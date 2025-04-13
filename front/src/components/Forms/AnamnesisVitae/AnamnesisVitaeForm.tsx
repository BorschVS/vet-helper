import React from "react";
import { TextArea, RadioGroup, CheckboxGroup } from "../../FormFields";
import { AnamnesisVitaeState } from "../../../types/interfaces/anamnesis";
import { HandleChangeFunction, HandleNestedChangeFunction } from "../../../types/types/changeHandlers";
import { VaccinationSection } from "./VaccinationSection";
import { DewormingSection } from "./DewormingSection";
import { DietSection } from "./DietSection";

interface AnamnesisVitaeFormProps {
  data: AnamnesisVitaeState;
  handleChange: HandleChangeFunction;
  handleNestedChange: HandleNestedChangeFunction;
}

const reproductiveStatusOptions = [
  { value: "neutered", label: "Кастрований/Стерилізована" },
  { value: "intact", label: "Не кастрований/Не стерилізована" },
  { value: "unknown", label: "Невідомо" },
];

const habitatOptions = [
  { key: "indoor", label: "У приміщенні" },
  { key: "outdoor", label: "На вулиці" },
  { key: "mixed", label: "Змішаний тип" },
];

const AnamnesisVitaeForm: React.FC<AnamnesisVitaeFormProps> = ({ data, handleChange, handleNestedChange }) => {
  return (
    <section className="bg-secondary-bg p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-accent-primary">Anamnesis vitae (Історія життя)</h2>

      <VaccinationSection vaccination={data.vaccination} handleNestedChange={handleNestedChange} className="mb-4" />

      <DewormingSection deworming={data.deworming} handleNestedChange={handleNestedChange} className="mb-4" />

      <DietSection diet={data.diet} handleNestedChange={handleNestedChange} className="mb-4" />

      <CheckboxGroup
        label="Умови утримання"
        options={habitatOptions}
        values={data.habitat}
        onChange={(key, checked) => handleNestedChange("habitat", key, checked)}
        className="mb-4"
      />

      <TextArea
        label="Перенесені захворювання"
        value={data.pastIllnesses}
        onChange={(value) => handleChange("pastIllnesses", value)}
        placeholder="Історія попередніх захворювань..."
        className="mb-4"
        rows={2}
      />

      <TextArea
        label="Хронічні захворювання"
        value={data.chronicConditions}
        onChange={(value) => handleChange("chronicConditions", value)}
        placeholder="Наявні хронічні захворювання..."
        className="mb-4"
        rows={2}
      />

      <TextArea
        label="Алергії"
        value={data.allergies}
        onChange={(value) => handleChange("allergies", value)}
        placeholder="Відомі алергічні реакції..."
        className="mb-4"
        rows={2}
      />

      <TextArea
        label="Попереднє лікування"
        value={data.previousTreatments}
        onChange={(value) => handleChange("previousTreatments", value)}
        placeholder="Інформація про попереднє лікування..."
        className="mb-4"
        rows={2}
      />

      <RadioGroup
        label="Репродуктивний статус"
        name="reproductiveStatus"
        options={reproductiveStatusOptions}
        value={data.reproductiveStatus}
        onChange={(value) => handleChange("reproductiveStatus", value)}
        className="mb-4"
      />
    </section>
  );
};

export default AnamnesisVitaeForm;
