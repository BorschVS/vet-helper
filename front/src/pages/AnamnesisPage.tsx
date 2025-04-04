import { useState } from "react";

const AnamnesisPage = () => {
  // Состояния для различных секций формы
  const [anamnesisMorbi, setAnamnesisMorbi] = useState({
    complaints: "",
    temperature: "",
    mucousMembrane: "normal", // нормальні, бліді, жовтяничні, гіперемовані
    respiratoryRate: "",
    respiratoryType: "normal", // нормальне, утруднене, прискорене
    heartRate: "",
    heartRhythm: "regular", // регулярне, нерегулярне
    abdominalWall: "soft", // м'яка, напружена, болюча
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

  const [anamnesisVitae, setAnamnesisVitae] = useState({
    vaccination: {
      status: "unknown", // вакцинований, не вакцинований, невідомо
      lastDate: "",
      vaccine: "",
    },
    deworming: {
      status: "unknown", // проведена, не проведена, невідомо
      lastDate: "",
      drug: "",
    },
    diet: {
      type: "unknown", // натуральне, сухий корм, змішане, невідомо
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
    reproductiveStatus: "unknown", // кастрований/стерилізований, не кастрований/не стерилізований, невідомо
  });

  // Обработчики изменений
  const handleMorbiChange = (field, value) => {
    setAnamnesisMorbi({
      ...anamnesisMorbi,
      [field]: value,
    });
  };

  const handleVitaeChange = (field, value) => {
    setAnamnesisVitae({
      ...anamnesisVitae,
      [field]: value,
    });
  };

  const handleNestedMorbiChange = (parent, field, value) => {
    setAnamnesisMorbi({
      ...anamnesisMorbi,
      [parent]: {
        ...anamnesisMorbi[parent],
        [field]: value,
      },
    });
  };

  const handleNestedVitaeChange = (parent, field, value) => {
    setAnamnesisVitae({
      ...anamnesisVitae,
      [parent]: {
        ...anamnesisVitae[parent],
        [field]: value,
      },
    });
  };

  const saveAnamnesis = (e) => {
    e.preventDefault();
    console.log("Anamnesis Morbi:", anamnesisMorbi);
    console.log("Anamnesis Vitae:", anamnesisVitae);
    // Здесь будет логика сохранения данных
  };

  return (
    <div className="anamnesis-page p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Анамнез пацієнта</h1>

      <form onSubmit={saveAnamnesis} className="space-y-8">
        {/* Anamnesis Morbi section */}
        <section className="bg-secondary-bg p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-accent-primary">Anamnesis morbi (Історія хвороби)</h2>

          {/* Complaints */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Скарги</label>
            <textarea
              className="w-full p-2 border rounded-md bg-primary-bg"
              rows={3}
              value={anamnesisMorbi.complaints}
              onChange={(e) => handleMorbiChange("complaints", e.target.value)}
              placeholder="Опишіть скарги власника тварини..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Temperature */}
            <div>
              <label className="block mb-2 font-medium">Температура тіла (°C)</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md bg-primary-bg"
                value={anamnesisMorbi.temperature}
                onChange={(e) => handleMorbiChange("temperature", e.target.value)}
                placeholder="38.5"
              />
            </div>

            {/* Mucous Membrane */}
            <div>
              <label className="block mb-2 font-medium">Слизові оболонки</label>
              <div className="flex flex-wrap gap-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mucousMembrane"
                    value="normal"
                    checked={anamnesisMorbi.mucousMembrane === "normal"}
                    onChange={(e) => handleMorbiChange("mucousMembrane", e.target.value)}
                    className="mr-1"
                  />
                  Нормальні
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mucousMembrane"
                    value="pale"
                    checked={anamnesisMorbi.mucousMembrane === "pale"}
                    onChange={(e) => handleMorbiChange("mucousMembrane", e.target.value)}
                    className="mr-1"
                  />
                  Бліді
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mucousMembrane"
                    value="jaundiced"
                    checked={anamnesisMorbi.mucousMembrane === "jaundiced"}
                    onChange={(e) => handleMorbiChange("mucousMembrane", e.target.value)}
                    className="mr-1"
                  />
                  Жовтяничні
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mucousMembrane"
                    value="hyperemic"
                    checked={anamnesisMorbi.mucousMembrane === "hyperemic"}
                    onChange={(e) => handleMorbiChange("mucousMembrane", e.target.value)}
                    className="mr-1"
                  />
                  Гіперемовані
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mucousMembrane"
                    value="cyanotic"
                    checked={anamnesisMorbi.mucousMembrane === "cyanotic"}
                    onChange={(e) => handleMorbiChange("mucousMembrane", e.target.value)}
                    className="mr-1"
                  />
                  Ціанотичні
                </label>
              </div>
            </div>
          </div>

          {/* Respiratory System */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-medium">Частота дихання (вдихів/хв)</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md bg-primary-bg"
                value={anamnesisMorbi.respiratoryRate}
                onChange={(e) => handleMorbiChange("respiratoryRate", e.target.value)}
                placeholder="20"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Тип дихання</label>
              <div className="flex flex-wrap gap-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="respiratoryType"
                    value="normal"
                    checked={anamnesisMorbi.respiratoryType === "normal"}
                    onChange={(e) => handleMorbiChange("respiratoryType", e.target.value)}
                    className="mr-1"
                  />
                  Нормальне
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="respiratoryType"
                    value="difficult"
                    checked={anamnesisMorbi.respiratoryType === "difficult"}
                    onChange={(e) => handleMorbiChange("respiratoryType", e.target.value)}
                    className="mr-1"
                  />
                  Утруднене
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="respiratoryType"
                    value="accelerated"
                    checked={anamnesisMorbi.respiratoryType === "accelerated"}
                    onChange={(e) => handleMorbiChange("respiratoryType", e.target.value)}
                    className="mr-1"
                  />
                  Прискорене
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="respiratoryType"
                    value="shallow"
                    checked={anamnesisMorbi.respiratoryType === "shallow"}
                    onChange={(e) => handleMorbiChange("respiratoryType", e.target.value)}
                    className="mr-1"
                  />
                  Поверхневе
                </label>
              </div>
            </div>
          </div>

          {/* Heart System */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-medium">Частота серцевих скорочень (ударів/хв)</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md bg-primary-bg"
                value={anamnesisMorbi.heartRate}
                onChange={(e) => handleMorbiChange("heartRate", e.target.value)}
                placeholder="80"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Серцевий ритм</label>
              <div className="flex gap-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="heartRhythm"
                    value="regular"
                    checked={anamnesisMorbi.heartRhythm === "regular"}
                    onChange={(e) => handleMorbiChange("heartRhythm", e.target.value)}
                    className="mr-1"
                  />
                  Регулярний
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="heartRhythm"
                    value="irregular"
                    checked={anamnesisMorbi.heartRhythm === "irregular"}
                    onChange={(e) => handleMorbiChange("heartRhythm", e.target.value)}
                    className="mr-1"
                  />
                  Нерегулярний
                </label>
              </div>
            </div>
          </div>

          {/* Abdominal Wall */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Стан черевної стінки</label>
            <div className="flex flex-wrap gap-3">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="abdominalWall"
                  value="soft"
                  checked={anamnesisMorbi.abdominalWall === "soft"}
                  onChange={(e) => handleMorbiChange("abdominalWall", e.target.value)}
                  className="mr-1"
                />
                М'яка
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="abdominalWall"
                  value="tense"
                  checked={anamnesisMorbi.abdominalWall === "tense"}
                  onChange={(e) => handleMorbiChange("abdominalWall", e.target.value)}
                  className="mr-1"
                />
                Напружена
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="abdominalWall"
                  value="painful"
                  checked={anamnesisMorbi.abdominalWall === "painful"}
                  onChange={(e) => handleMorbiChange("abdominalWall", e.target.value)}
                  className="mr-1"
                />
                Болюча
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="abdominalWall"
                  value="swollen"
                  checked={anamnesisMorbi.abdominalWall === "swollen"}
                  onChange={(e) => handleMorbiChange("abdominalWall", e.target.value)}
                  className="mr-1"
                />
                Здута
              </label>
            </div>
          </div>

          {/* Excretions Section */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-3">Виділення</h3>

            {/* Urine */}
            <div className="mb-3">
              <label className="block mb-2">Сеча</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.urineOutput.normal}
                    onChange={(e) => handleNestedMorbiChange("urineOutput", "normal", e.target.checked)}
                    className="mr-1"
                  />
                  Нормальна
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.urineOutput.increased}
                    onChange={(e) => handleNestedMorbiChange("urineOutput", "increased", e.target.checked)}
                    className="mr-1"
                  />
                  Збільшена кількість
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.urineOutput.decreased}
                    onChange={(e) => handleNestedMorbiChange("urineOutput", "decreased", e.target.checked)}
                    className="mr-1"
                  />
                  Зменшена кількість
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.urineOutput.absent}
                    onChange={(e) => handleNestedMorbiChange("urineOutput", "absent", e.target.checked)}
                    className="mr-1"
                  />
                  Відсутня
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.urineOutput.bloody}
                    onChange={(e) => handleNestedMorbiChange("urineOutput", "bloody", e.target.checked)}
                    className="mr-1"
                  />
                  З кров'ю
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.urineOutput.cloudy}
                    onChange={(e) => handleNestedMorbiChange("urineOutput", "cloudy", e.target.checked)}
                    className="mr-1"
                  />
                  Мутна
                </label>
              </div>
            </div>

            {/* Feces */}
            <div className="mb-3">
              <label className="block mb-2">Кал</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.feces.normal}
                    onChange={(e) => handleNestedMorbiChange("feces", "normal", e.target.checked)}
                    className="mr-1"
                  />
                  Нормальний
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.feces.diarrhea}
                    onChange={(e) => handleNestedMorbiChange("feces", "diarrhea", e.target.checked)}
                    className="mr-1"
                  />
                  Діарея
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.feces.constipation}
                    onChange={(e) => handleNestedMorbiChange("feces", "constipation", e.target.checked)}
                    className="mr-1"
                  />
                  Запор
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.feces.bloody}
                    onChange={(e) => handleNestedMorbiChange("feces", "bloody", e.target.checked)}
                    className="mr-1"
                  />
                  З кров'ю
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.feces.mucus}
                    onChange={(e) => handleNestedMorbiChange("feces", "mucus", e.target.checked)}
                    className="mr-1"
                  />
                  Зі слизом
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.feces.absent}
                    onChange={(e) => handleNestedMorbiChange("feces", "absent", e.target.checked)}
                    className="mr-1"
                  />
                  Відсутній
                </label>
              </div>
            </div>

            {/* Vomiting */}
            <div>
              <div className="flex items-center mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={anamnesisMorbi.vomiting.present}
                    onChange={(e) => handleNestedMorbiChange("vomiting", "present", e.target.checked)}
                    className="mr-1"
                  />
                  Блювота
                </label>
              </div>

              {anamnesisMorbi.vomiting.present && (
                <div className="pl-5 grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div>
                    <label className="block mb-1 text-sm">Частота</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md bg-primary-bg"
                      value={anamnesisMorbi.vomiting.frequency}
                      onChange={(e) => handleNestedMorbiChange("vomiting", "frequency", e.target.value)}
                      placeholder="Скільки разів на добу?"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">Вміст</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md bg-primary-bg"
                      value={anamnesisMorbi.vomiting.content}
                      onChange={(e) => handleNestedMorbiChange("vomiting", "content", e.target.value)}
                      placeholder="Що містилось у блювотних масах?"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Symptoms */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Додаткові симптоми</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisMorbi.additionalSymptoms.cough}
                  onChange={(e) => handleNestedMorbiChange("additionalSymptoms", "cough", e.target.checked)}
                  className="mr-1"
                />
                Кашель
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisMorbi.additionalSymptoms.sneezing}
                  onChange={(e) => handleNestedMorbiChange("additionalSymptoms", "sneezing", e.target.checked)}
                  className="mr-1"
                />
                Чхання
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisMorbi.additionalSymptoms.discharge}
                  onChange={(e) => handleNestedMorbiChange("additionalSymptoms", "discharge", e.target.checked)}
                  className="mr-1"
                />
                Виділення
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisMorbi.additionalSymptoms.itching}
                  onChange={(e) => handleNestedMorbiChange("additionalSymptoms", "itching", e.target.checked)}
                  className="mr-1"
                />
                Свербіж
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisMorbi.additionalSymptoms.hairLoss}
                  onChange={(e) => handleNestedMorbiChange("additionalSymptoms", "hairLoss", e.target.checked)}
                  className="mr-1"
                />
                Випадіння шерсті
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisMorbi.additionalSymptoms.weakness}
                  onChange={(e) => handleNestedMorbiChange("additionalSymptoms", "weakness", e.target.checked)}
                  className="mr-1"
                />
                Слабкість
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisMorbi.additionalSymptoms.apathy}
                  onChange={(e) => handleNestedMorbiChange("additionalSymptoms", "apathy", e.target.checked)}
                  className="mr-1"
                />
                Апатія
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisMorbi.additionalSymptoms.aggression}
                  onChange={(e) => handleNestedMorbiChange("additionalSymptoms", "aggression", e.target.checked)}
                  className="mr-1"
                />
                Агресія
              </label>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Додаткові примітки</label>
            <textarea
              className="w-full p-2 border rounded-md bg-primary-bg"
              rows={3}
              value={anamnesisMorbi.notes}
              onChange={(e) => handleMorbiChange("notes", e.target.value)}
              placeholder="Додаткова інформація про поточний стан тварини..."
            />
          </div>
        </section>

        {/* Anamnesis Vitae section */}
        <section className="bg-secondary-bg p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-accent-primary">Anamnesis vitae (Історія життя)</h2>

          {/* Vaccination */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Вакцинація</h3>
            <div className="flex flex-wrap gap-3 mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="vaccinationStatus"
                  value="vaccinated"
                  checked={anamnesisVitae.vaccination.status === "vaccinated"}
                  onChange={(e) => handleNestedVitaeChange("vaccination", "status", e.target.value)}
                  className="mr-1"
                />
                Вакцинований(-а)
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="vaccinationStatus"
                  value="notVaccinated"
                  checked={anamnesisVitae.vaccination.status === "notVaccinated"}
                  onChange={(e) => handleNestedVitaeChange("vaccination", "status", e.target.value)}
                  className="mr-1"
                />
                Не вакцинований(-а)
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="vaccinationStatus"
                  value="unknown"
                  checked={anamnesisVitae.vaccination.status === "unknown"}
                  onChange={(e) => handleNestedVitaeChange("vaccination", "status", e.target.value)}
                  className="mr-1"
                />
                Невідомо
              </label>
            </div>

            {anamnesisVitae.vaccination.status === "vaccinated" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 mt-3">
                <div>
                  <label className="block mb-1 text-sm">Дата останньої вакцинації</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md bg-primary-bg"
                    value={anamnesisVitae.vaccination.lastDate}
                    onChange={(e) => handleNestedVitaeChange("vaccination", "lastDate", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm">Вакцина</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md bg-primary-bg"
                    value={anamnesisVitae.vaccination.vaccine}
                    onChange={(e) => handleNestedVitaeChange("vaccination", "vaccine", e.target.value)}
                    placeholder="Назва вакцини"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Deworming */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Дегельмінтизація</h3>
            <div className="flex flex-wrap gap-3 mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dewormingStatus"
                  value="done"
                  checked={anamnesisVitae.deworming.status === "done"}
                  onChange={(e) => handleNestedVitaeChange("deworming", "status", e.target.value)}
                  className="mr-1"
                />
                Проведена
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dewormingStatus"
                  value="notDone"
                  checked={anamnesisVitae.deworming.status === "notDone"}
                  onChange={(e) => handleNestedVitaeChange("deworming", "status", e.target.value)}
                  className="mr-1"
                />
                Не проведена
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dewormingStatus"
                  value="unknown"
                  checked={anamnesisVitae.deworming.status === "unknown"}
                  onChange={(e) => handleNestedVitaeChange("deworming", "status", e.target.value)}
                  className="mr-1"
                />
                Невідомо
              </label>
            </div>

            {anamnesisVitae.deworming.status === "done" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 mt-3">
                <div>
                  <label className="block mb-1 text-sm">Дата останньої дегельмінтизації</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md bg-primary-bg"
                    value={anamnesisVitae.deworming.lastDate}
                    onChange={(e) => handleNestedVitaeChange("deworming", "lastDate", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm">Препарат</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md bg-primary-bg"
                    value={anamnesisVitae.deworming.drug}
                    onChange={(e) => handleNestedVitaeChange("deworming", "drug", e.target.value)}
                    placeholder="Назва препарату"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Diet */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Раціон</h3>
            <div className="flex flex-wrap gap-3 mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dietType"
                  value="natural"
                  checked={anamnesisVitae.diet.type === "natural"}
                  onChange={(e) => handleNestedVitaeChange("diet", "type", e.target.value)}
                  className="mr-1"
                />
                Натуральне харчування
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dietType"
                  value="dryFood"
                  checked={anamnesisVitae.diet.type === "dryFood"}
                  onChange={(e) => handleNestedVitaeChange("diet", "type", e.target.value)}
                  className="mr-1"
                />
                Сухий корм
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dietType"
                  value="wetFood"
                  checked={anamnesisVitae.diet.type === "wetFood"}
                  onChange={(e) => handleNestedVitaeChange("diet", "type", e.target.value)}
                  className="mr-1"
                />
                Вологий корм
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dietType"
                  value="mixed"
                  checked={anamnesisVitae.diet.type === "mixed"}
                  onChange={(e) => handleNestedVitaeChange("diet", "type", e.target.value)}
                  className="mr-1"
                />
                Змішане харчування
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dietType"
                  value="unknown"
                  checked={anamnesisVitae.diet.type === "unknown"}
                  onChange={(e) => handleNestedVitaeChange("diet", "type", e.target.value)}
                  className="mr-1"
                />
                Невідомо
              </label>
            </div>

            {anamnesisVitae.diet.type !== "unknown" && anamnesisVitae.diet.type !== "natural" && (
              <div className="pl-5 mt-3">
                <label className="block mb-1 text-sm">Бренд корму</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-primary-bg"
                  value={anamnesisVitae.diet.brand}
                  onChange={(e) => handleNestedVitaeChange("diet", "brand", e.target.value)}
                  placeholder="Назва корму"
                />
              </div>
            )}

            <div className="mt-3">
              <label className="block mb-1 text-sm">Додаткова інформація про харчування</label>
              <textarea
                className="w-full p-2 border rounded-md bg-primary-bg"
                rows={2}
                value={anamnesisVitae.diet.details}
                onChange={(e) => handleNestedVitaeChange("diet", "details", e.target.value)}
                placeholder="Деталі раціону, режим годування..."
              />
            </div>
          </div>

          {/* Habitat */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Умови утримання</label>
            <div className="flex flex-wrap gap-3">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisVitae.habitat.indoor}
                  onChange={(e) => handleNestedVitaeChange("habitat", "indoor", e.target.checked)}
                  className="mr-1"
                />
                У приміщенні
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisVitae.habitat.outdoor}
                  onChange={(e) => handleNestedVitaeChange("habitat", "outdoor", e.target.checked)}
                  className="mr-1"
                />
                На вулиці
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={anamnesisVitae.habitat.mixed}
                  onChange={(e) => handleNestedVitaeChange("habitat", "mixed", e.target.checked)}
                  className="mr-1"
                />
                Змішаний тип
              </label>
            </div>
          </div>

          {/* Past illnesses */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Перенесені захворювання</label>
            <textarea
              className="w-full p-2 border rounded-md bg-primary-bg"
              rows={2}
              value={anamnesisVitae.pastIllnesses}
              onChange={(e) => handleVitaeChange("pastIllnesses", e.target.value)}
              placeholder="Історія попередніх захворювань..."
            />
          </div>

          {/* Chronic conditions */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Хронічні захворювання</label>
            <textarea
              className="w-full p-2 border rounded-md bg-primary-bg"
              rows={2}
              value={anamnesisVitae.chronicConditions}
              onChange={(e) => handleVitaeChange("chronicConditions", e.target.value)}
              placeholder="Наявні хронічні захворювання..."
            />
          </div>

          {/* Allergies */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Алергії</label>
            <textarea
              className="w-full p-2 border rounded-md bg-primary-bg"
              rows={2}
              value={anamnesisVitae.allergies}
              onChange={(e) => handleVitaeChange("allergies", e.target.value)}
              placeholder="Відомі алергічні реакції..."
            />
          </div>

          {/* Previous treatments */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Попереднє лікування</label>
            <textarea
              className="w-full p-2 border rounded-md bg-primary-bg"
              rows={2}
              value={anamnesisVitae.previousTreatments}
              onChange={(e) => handleVitaeChange("previousTreatments", e.target.value)}
              placeholder="Інформація про попереднє лікування..."
            />
          </div>

          {/* Reproductive status */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Репродуктивний статус</label>
            <div className="flex flex-wrap gap-3">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="reproductiveStatus"
                  value="neutered"
                  checked={anamnesisVitae.reproductiveStatus === "neutered"}
                  onChange={(e) => handleVitaeChange("reproductiveStatus", e.target.value)}
                  className="mr-1"
                />
                Кастрований/Стерилізована
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="reproductiveStatus"
                  value="intact"
                  checked={anamnesisVitae.reproductiveStatus === "intact"}
                  onChange={(e) => handleVitaeChange("reproductiveStatus", e.target.value)}
                  className="mr-1"
                />
                Не кастрований/Не стерилізована
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="reproductiveStatus"
                  value="unknown"
                  checked={anamnesisVitae.reproductiveStatus === "unknown"}
                  onChange={(e) => handleVitaeChange("reproductiveStatus", e.target.value)}
                  className="mr-1"
                />
                Невідомо
              </label>
            </div>
          </div>
        </section>

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
