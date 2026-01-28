import { HandleChangeFunction, HandleNestedChangeFunction } from "../types/changeHandlers";

export interface UrineFecesState {
  absent: boolean;
  bloody: boolean;
  mucus?: boolean;
  normal: boolean;
  cloudy?: boolean;
  diarrhea?: boolean;
  increased?: boolean;
  decreased?: boolean;
  constipation?: boolean;
  [key: string]: boolean | undefined;
}

export interface VomitingState {
  content: string;
  mucus?: boolean;
  absent?: boolean;
  bloody?: boolean;
  present: boolean;
  frequency: string;
  diarrhea?: boolean;
  constipation?: boolean;
  [key: string]: string | boolean | undefined;
}

export interface AdditionalSymptomsState {
  cough: boolean;
  apathy: boolean;
  itching: boolean;
  hairLoss: boolean;
  weakness: boolean;
  sneezing: boolean;
  discharge: boolean;
  aggression: boolean;
  [key: string]: boolean;
}

export interface AnamnesisMorbiState {
  notes: string;
  heartRate: string;
  complaints: string;
  temperature: string;
  feces: UrineFecesState;
  vomiting: VomitingState;
  respiratoryRate: string;
  urineOutput: UrineFecesState;
  heartRhythm: "regular" | "irregular";
  additionalSymptoms: AdditionalSymptomsState;
  abdominalWall: "soft" | "tense" | "painful" | "swollen";
  mucousMembrane: "normal" | "pale" | "jaundiced" | "hyperemic" | "cyanotic";
  respiratoryType: "normal" | "difficult" | "accelerated" | "shallow";
}

export interface VaccinationDewormingState {
  drug?: string;
  vaccine?: string;
  lastDate: string;
  status: "vaccinated" | "notVaccinated" | "unknown" | "done" | "notDone";
}

export interface DietState {
  brand: string;
  details: string;
  type: "natural" | "dryFood" | "wetFood" | "mixed" | "unknown";
}

export interface HabitatState {
  mixed: boolean;
  indoor: boolean;
  outdoor: boolean;
  [key: string]: boolean;
}

export interface AnamnesisVitaeState {
  diet: DietState;
  allergies: string;
  habitat: HabitatState;
  pastIllnesses: string;
  chronicConditions: string;
  previousTreatments: string;
  deworming: VaccinationDewormingState;
  vaccination: VaccinationDewormingState;
  reproductiveStatus: "neutered" | "intact" | "unknown";
}

export interface AnamnesisMorbiFormProps {
  data: AnamnesisMorbiState;
  handleChange: HandleChangeFunction;
  handleNestedChange: HandleNestedChangeFunction;
}
