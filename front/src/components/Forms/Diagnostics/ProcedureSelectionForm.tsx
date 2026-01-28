import React, { useState } from 'react';
import { RadioGroup, CheckboxGroup, TextArea } from '../../FormFields';
import { DiagnosticProcedure, UltrasoundParameters, XRayParameters, BloodTestParameters, UrineTestParameters } from '../../../types/interfaces/diagnostics';
import { theme } from '../../../styles';

interface ProcedureSelectionFormProps {
  onSave: (procedure: DiagnosticProcedure) => void;
  onCancel: () => void;
}

const procedureTypes = [
  { value: 'ultrasound', label: 'УЗД' },
  { value: 'xray', label: 'Рентген' },
  { value: 'bloodTest', label: 'Аналіз крові' },
  { value: 'urineTest', label: 'Аналіз сечі' },
];

const ultrasoundCategories = [
  { value: 'urinary', label: 'Сечостатева система' },
  { value: 'abdominal', label: 'Черевної порожнини' },
  { value: 'cardiac', label: 'Доплерографія серця' },
  { value: 'joints', label: 'УЗД суглобів' },
  { value: 'brain', label: 'УЗД головного мозку' },
  { value: 'thyroid', label: 'УЗД Щитовидної залози' },
];

const bloodTestTypes = [
  { value: 'general', label: 'Загальний аналіз крові (ЗАК)' },
  { value: 'biochemical', label: 'Біохімічний аналіз крові (БАК)' },
];

const urineTestTypes = [
  { value: 'physical', label: 'Органолептичні показники' },
  { value: 'chemical', label: 'Хімічні показники' },
  { value: 'microscopic', label: 'Мікроскопія' },
];

const generalBloodTestParameters = [
  { key: 'leukocytes', label: 'Лейкоцити' },
  { key: 'erythrocytes', label: 'Еритроцити' },
  { key: 'hemoglobin', label: 'Гемоглобін' },
  { key: 'platelets', label: 'Тромбоцити' },
  { key: 'esr', label: 'ШОЕ' },
  { key: 'leukocyteFormula', label: 'Лейкоцитарна формула' },
];

const biochemicalBloodTestParameters = [
  { key: 'urea', label: 'Сечовина' },
  { key: 'creatinine', label: 'Креатинін' },
  { key: 'glucose', label: 'Глюкоза' },
  { key: 'bilirubin', label: 'Білірубін' },
  { key: 'alt', label: 'АЛТ' },
  { key: 'ast', label: 'АСТ' },
  { key: 'electrolytes', label: 'Електроліти' },
];

const ProcedureSelectionForm: React.FC<ProcedureSelectionFormProps> = ({ onSave, onCancel }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedParameters, setSelectedParameters] = useState<Record<string, boolean>>({});
  const [details, setDetails] = useState<string>('');

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setSelectedCategory('');
    setSelectedParameters({});
    setDetails('');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedParameters({});
    setDetails('');
  };

  const handleParameterChange = (key: string, checked: boolean) => {
    setSelectedParameters(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  const handleSave = () => {
    const procedure: DiagnosticProcedure = {
      id: Date.now(),
      name: getProcedureName(),
      type: selectedType as DiagnosticProcedure['type'],
      category: selectedCategory,
      parameters: createParameters(),
      basePrice: calculatePrice(),
    };
    onSave(procedure);
  };

  const getProcedureName = () => {
    const type = procedureTypes.find(t => t.value === selectedType)?.label || '';
    const category = getCategoryLabel();
    return `${type}${category ? ` - ${category}` : ''}`;
  };

  const getCategoryLabel = () => {
    switch (selectedType) {
      case 'ultrasound':
        return ultrasoundCategories.find(c => c.value === selectedCategory)?.label;
      case 'bloodTest':
        return bloodTestTypes.find(c => c.value === selectedCategory)?.label;
      case 'urineTest':
        return urineTestTypes.find(c => c.value === selectedCategory)?.label;
      default:
        return '';
    }
  };

  const createParameters = () => {
    switch (selectedType) {
      case 'ultrasound':
        return {
          category: selectedCategory as 'urinary' | 'abdominal' | 'cardiac' | 'joints' | 'brain' | 'thyroid',
          details,
          findings: '',
        } as UltrasoundParameters;
      case 'xray':
        return {
          area: selectedCategory,
          views: Object.keys(selectedParameters).filter(key => selectedParameters[key]),
          findings: details,
        } as XRayParameters;
      case 'bloodTest':
        return {
          type: selectedCategory as 'general' | 'biochemical',
          parameters: Object.keys(selectedParameters)
            .filter(key => selectedParameters[key])
            .map(key => ({
              name: key,
              value: '',
              unit: '',
              referenceRange: '',
            })),
        } as BloodTestParameters;
      case 'urineTest':
        return {
          type: selectedCategory as 'physical' | 'chemical' | 'microscopic',
          parameters: Object.keys(selectedParameters)
            .filter(key => selectedParameters[key])
            .map(key => ({
              name: key,
              value: '',
              unit: '',
              referenceRange: '',
            })),
          sediment: {
            present: false,
            description: '',
          },
        } as UrineTestParameters;
      default:
        return {
          category: 'urinary',
          details: '',
          findings: '',
        } as UltrasoundParameters;
    }
  };

  const calculatePrice = () => {
    let basePrice = 0;
    switch (selectedType) {
      case 'ultrasound':
        basePrice = 500;
        break;
      case 'xray':
        basePrice = 300;
        break;
      case 'bloodTest':
        basePrice = selectedCategory === 'general' ? 200 : 400;
        break;
      case 'urineTest':
        basePrice = 150;
        break;
    }
    return basePrice + (Object.keys(selectedParameters).length * 50);
  };

  return (
    <div className="space-y-6">
      <RadioGroup
        label="Тип процедури"
        name="procedureType"
        options={procedureTypes}
        value={selectedType}
        onChange={handleTypeChange}
      />

      {selectedType === 'ultrasound' && (
        <RadioGroup
          label="Категорія УЗД"
          name="ultrasoundCategory"
          options={ultrasoundCategories}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      )}

      {selectedType === 'bloodTest' && (
        <RadioGroup
          label="Тип аналізу крові"
          name="bloodTestType"
          options={bloodTestTypes}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      )}

      {selectedType === 'urineTest' && (
        <RadioGroup
          label="Тип аналізу сечі"
          name="urineTestType"
          options={urineTestTypes}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      )}

      {selectedType === 'bloodTest' && selectedCategory === 'general' && (
        <CheckboxGroup
          label="Показники ЗАК"
          options={generalBloodTestParameters}
          values={selectedParameters}
          onChange={handleParameterChange}
          columns={2}
        />
      )}

      {selectedType === 'bloodTest' && selectedCategory === 'biochemical' && (
        <CheckboxGroup
          label="Показники БАК"
          options={biochemicalBloodTestParameters}
          values={selectedParameters}
          onChange={handleParameterChange}
          columns={2}
        />
      )}

      <TextArea
        label="Додаткові деталі"
        value={details}
        onChange={setDetails}
        placeholder="Введіть додаткову інформацію..."
        rows={3}
      />

      <div className="flex justify-end space-x-3">
        <button
          onClick={onCancel}
          className={`px-4 py-2 border border-${theme.colors.border.light} ${theme.radius.md} text-sm ${theme.fontWeight.medium} bg-${theme.colors.background.primary} text-${theme.colors.text.primary} hover:bg-${theme.colors.background.secondary}`}
        >
          Скасувати
        </button>
        <button
          onClick={handleSave}
          className={`px-4 py-2 border border-transparent ${theme.radius.md} ${theme.shadow.sm} text-sm ${theme.fontWeight.medium} text-${theme.colors.text.light} bg-${theme.colors.primary.main} hover:bg-${theme.colors.primary.hover}`}
        >
          Зберегти
        </button>
      </div>
    </div>
  );
};

export default ProcedureSelectionForm; 