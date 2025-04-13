import React from "react";
import { TextArea, TextField, RadioGroup, CheckboxGroup } from "../../FormFields";
import { AnamnesisMorbiState } from "../../../types/interfaces/anamnesis";
import { HandleChangeFunction, HandleNestedChangeFunction } from "../../../types/types/changeHandlers";
import { VomitingSection } from "../AnamnesisMorbi/VomitingSection";

interface AnamnesisMorbiFormProps {
  data: AnamnesisMorbiState;
  handleChange: HandleChangeFunction;
  handleNestedChange: HandleNestedChangeFunction;
}

const mucousMembraneOptions = [
  { value: "normal", label: "Нормальні" },
  { value: "pale", label: "Бліді" },
  { value: "jaundiced", label: "Жовтяничні" },
  { value: "hyperemic", label: "Гіперемовані" },
  { value: "cyanotic", label: "Ціанотичні" },
];

const respiratoryTypeOptions = [
  { value: "normal", label: "Нормальне" },
  { value: "difficult", label: "Утруднене" },
  { value: "accelerated", label: "Прискорене" },
  { value: "shallow", label: "Поверхневе" },
];

const heartRhythmOptions = [
  { value: "regular", label: "Регулярний" },
  { value: "irregular", label: "Нерегулярний" },
];

const abdominalWallOptions = [
  { value: "soft", label: "М'яка" },
  { value: "tense", label: "Напружена" },
  { value: "painful", label: "Болюча" },
  { value: "swollen", label: "Здута" },
];

const urineOptions = [
  { key: "normal", label: "Норма" },
  { key: "increased", label: "Поліурія" },
  { key: "decreased", label: "Олігурія" },
  { key: "absent", label: "Анурія" },
  { key: "bloody", label: "З кров'ю" },
  { key: "cloudy", label: "Мутна" },
];

const fecesOptions = [
  { key: "normal", label: "Норма" },
  { key: "diarrhea", label: "Діарея" },
  { key: "constipation", label: "Запор" },
  { key: "bloody", label: "З кров'ю" },
  { key: "mucus", label: "Зі слизом" },
  { key: "absent", label: "Відсутній" },
];

const vomitingOptions = [
  { key: "diarrhea", label: "Слиз" },
  { key: "constipation", label: "Кров" },
  { key: "bloody", label: "Жовч" },
  { key: "mucus", label: "Домішки їжі" },
  { key: "absent", label: "Піна" },
];

const additionalSymptomsOptions = [
  { key: "cough", label: "Кашель" },
  { key: "sneezing", label: "Чхання" },
  { key: "discharge", label: "Виділення" },
  { key: "itching", label: "Свербіж" },
  { key: "hairLoss", label: "Випадіння шерсті" },
  { key: "weakness", label: "Слабкість" },
  { key: "apathy", label: "Апатія" },
  { key: "aggression", label: "Агресія" },
];

const AnamnesisMorbiForm: React.FC<AnamnesisMorbiFormProps> = ({ data, handleChange, handleNestedChange }) => {
  return (
    <section className="bg-secondary-bg p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-accent-primary">Anamnesis morbi (Історія хвороби)</h2>

      <TextArea
        label="Скарги"
        value={data.complaints}
        onChange={(value) => handleChange("complaints", value)}
        placeholder="Опишіть скарги власника тварини..."
        className="mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <TextField
          label="Температура тіла (°C)"
          value={data.temperature}
          onChange={(value) => handleChange("temperature", value)}
          placeholder="38.5"
        />

        <RadioGroup
          label="Слизові оболонки"
          name="mucousMembrane"
          options={mucousMembraneOptions}
          value={data.mucousMembrane}
          onChange={(value) => handleChange("mucousMembrane", value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <TextField
          label="Частота дихання (вдихів/хв)"
          value={data.respiratoryRate}
          onChange={(value) => handleChange("respiratoryRate", value)}
          placeholder="20"
        />

        <RadioGroup
          label="Тип дихання"
          name="respiratoryType"
          options={respiratoryTypeOptions}
          value={data.respiratoryType}
          onChange={(value) => handleChange("respiratoryType", value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <TextField
          label="Частота серцевих скорочень (ударів/хв)"
          value={data.heartRate}
          onChange={(value) => handleChange("heartRate", value)}
          placeholder="80"
        />

        <RadioGroup
          label="Серцевий ритм"
          name="heartRhythm"
          options={heartRhythmOptions}
          value={data.heartRhythm}
          onChange={(value) => handleChange("heartRhythm", value)}
        />
      </div>

      <RadioGroup
        label="Стан черевної стінки"
        name="abdominalWall"
        options={abdominalWallOptions}
        value={data.abdominalWall}
        onChange={(value) => handleChange("abdominalWall", value)}
        className="mb-4"
      />

      <div className="mb-4">
        <h3 className="text-lg font-medium mb-3">Виділення</h3>

        <CheckboxGroup
          label="Сеча"
          options={urineOptions}
          values={data.urineOutput}
          onChange={(key, checked) => handleNestedChange("urineOutput", key, checked)}
          className="mb-3"
          columns={3}
        />

        <CheckboxGroup
          label="Кал"
          options={fecesOptions}
          values={data.feces}
          onChange={(key, checked) => handleNestedChange("feces", key, checked)}
          className="mb-3"
          columns={3}
        />

        <CheckboxGroup
          label="Блювота"
          options={vomitingOptions}
          values={data.vomiting}
          onChange={(key, checked) => handleNestedChange("vomiting", key, checked)}
          className="mb-3"
          columns={3}
        />

        <VomitingSection vomiting={data.vomiting} handleNestedChange={handleNestedChange} />
      </div>

      <CheckboxGroup
        label="Додаткові симптоми"
        options={additionalSymptomsOptions}
        values={data.additionalSymptoms}
        onChange={(key, checked) => handleNestedChange("additionalSymptoms", key, checked)}
        className="mb-4"
        columns={4}
      />

      <TextArea
        label="Додаткові примітки"
        value={data.notes}
        onChange={(value) => handleChange("notes", value)}
        placeholder="Додаткова інформація про поточний стан тварини..."
        className="mb-4"
      />
    </section>
  );
};

export default AnamnesisMorbiForm;
