import { useState } from "react";
import { AnamnesisMorbiState, AnamnesisVitaeState } from "../types/interfaces/anamnesis";
import { HandleChangeFunction, HandleNestedChangeFunction } from "../types/types/changeHandlers";
import { createChangeHandler, createNestedChangeHandler } from "../utils/changeHandlers";
import AnamnesisMorbiForm from "../components/Forms/AnamnesisMorbi/AnamnesisMorbiForm";
import AnamnesisVitaeForm from "../components/Forms/AnamnesisVitae/AnamnesisVitaeForm";

const AnamnesisPage = () => {
  const [anamnesisMorbi, setAnamnesisMorbi] = useState<AnamnesisMorbiState>({
    complaints: "",
    temperature: "",
    mucousMembrane: "normal",
    respiratoryRate: "",
    respiratoryType: "normal",
    heartRate: "",
    heartRhythm: "regular",
    abdominalWall: "soft",
    urineOutput: {
      normal: false,
      increased: false,
      decreased: false,
      absent: false,
      bloody: false,
      cloudy: false,
    },
    feces: {
      normal: false,
      diarrhea: false,
      constipation: false,
      bloody: false,
      mucus: false,
      absent: false,
    },
    vomiting: {
      present: false,
      frequency: "",
      content: "",
    },
    additionalSymptoms: {
      cough: false,
      sneezing: false,
      discharge: false,
      itching: false,
      hairLoss: false,
      weakness: false,
      apathy: false,
      aggression: false,
    },
    notes: "",
  });

  const [anamnesisVitae, setAnamnesisVitae] = useState<AnamnesisVitaeState>({
    vaccination: {
      status: "unknown",
      lastDate: "",
      vaccine: "",
    },
    deworming: {
      status: "unknown",
      lastDate: "",
      drug: "",
    },
    diet: {
      type: "unknown",
      brand: "",
      details: "",
    },
    habitat: {
      indoor: false,
      outdoor: false,
      mixed: false,
    },
    pastIllnesses: "",
    chronicConditions: "",
    allergies: "",
    previousTreatments: "",
    reproductiveStatus: "unknown",
  });

  const handleMorbiChange: HandleChangeFunction = createChangeHandler(setAnamnesisMorbi);
  const handleVitaeChange: HandleChangeFunction = createChangeHandler(setAnamnesisVitae);
  const handleNestedMorbiChange: HandleNestedChangeFunction = createNestedChangeHandler(setAnamnesisMorbi);
  const handleNestedVitaeChange: HandleNestedChangeFunction = createNestedChangeHandler(setAnamnesisVitae);

  const saveAnamnesis = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Anamnesis Morbi:", anamnesisMorbi);
    console.log("Anamnesis Vitae:", anamnesisVitae);
  };

  return (
    <div className="anamnesis-page p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Анамнез пацієнта</h1>

      <form onSubmit={saveAnamnesis} className="space-y-8">
        <AnamnesisMorbiForm
          data={anamnesisMorbi}
          handleChange={handleMorbiChange}
          handleNestedChange={handleNestedMorbiChange}
        />

        <AnamnesisVitaeForm
          data={anamnesisVitae}
          handleChange={handleVitaeChange}
          handleNestedChange={handleNestedVitaeChange}
        />

        {/* Form submission */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
          >
            Скасувати
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent-primary hover:bg-accent-hover"
          >
            Зберегти
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnamnesisPage;
