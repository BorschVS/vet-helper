import React, { useState } from 'react';
import { components, theme } from '../styles';
import { DiagnosticProcedure, DiagnosticAppointment } from '../types/interfaces/diagnostics';
import ProcedureSelectionForm from '../components/Forms/Diagnostics/ProcedureSelectionForm';

const DiagnosticsPage = () => {
  const [appointments, setAppointments] = useState<DiagnosticAppointment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAppointment = () => {
    setIsModalOpen(true);
  };

  const handleDeleteAppointment = (id: number) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const handleEditAppointment = (id: number) => {
    // Mock edit functionality for now
    console.log('Edit appointment:', id);
  };

  const handleSaveProcedure = (procedure: DiagnosticProcedure) => {
    const newAppointment: DiagnosticAppointment = {
      id: Date.now(),
      procedure,
      price: procedure.basePrice,
      prescribedBy: 'Dr. Smith', // This should come from the current user context
      performedBy: '', // This will be filled when the procedure is performed
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setAppointments([...appointments, newAppointment]);
    setIsModalOpen(false);
  };

  return (
    <div className={`diagnostics-page p-6 bg-${theme.colors.background.primary}`}>
      <div className="flex justify-between items-center mb-6">
        <h1>Діагностичні призначення</h1>
        <button
          onClick={handleAddAppointment}
          className={`${components.button.base} ${components.button.primary} ${components.button.size.md}`}
        >
          <span className="mr-2">+</span>
          Додати процедуру
        </button>
      </div>

      <div className={`bg-${theme.colors.background.primary} ${theme.radius.lg} ${theme.shadow.md} overflow-hidden`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={`bg-${theme.colors.background.secondary}`}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium text-${theme.colors.text.secondary} uppercase tracking-wider`}>№</th>
              <th className={`px-6 py-3 text-left text-xs font-medium text-${theme.colors.text.secondary} uppercase tracking-wider`}>Процедура</th>
              <th className={`px-6 py-3 text-left text-xs font-medium text-${theme.colors.text.secondary} uppercase tracking-wider`}>Ціна</th>
              <th className={`px-6 py-3 text-left text-xs font-medium text-${theme.colors.text.secondary} uppercase tracking-wider`}>Призначив</th>
              <th className={`px-6 py-3 text-left text-xs font-medium text-${theme.colors.text.secondary} uppercase tracking-wider`}>Виконавець</th>
              <th className={`px-6 py-3 text-left text-xs font-medium text-${theme.colors.text.secondary} uppercase tracking-wider`}></th>
            </tr>
          </thead>
          <tbody className={`bg-${theme.colors.background.primary} divide-y divide-${theme.colors.border.light}`}>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-${theme.colors.text.primary}`}>{appointment.id}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-${theme.colors.text.primary}`}>{appointment.procedure.name}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-${theme.colors.text.primary}`}>{appointment.price} грн</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-${theme.colors.text.primary}`}>{appointment.prescribedBy}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-${theme.colors.text.primary}`}>{appointment.performedBy}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-${theme.colors.text.primary}`}>
                  <div className="relative">
                    <button
                      className={`text-${theme.colors.text.secondary} hover:text-${theme.colors.text.primary}`}
                      onClick={() => {
                        const menu = document.getElementById(`menu-${appointment.id}`);
                        if (menu) {
                          menu.classList.toggle('hidden');
                        }
                      }}
                    >
                      ...
                    </button>
                    <div
                      id={`menu-${appointment.id}`}
                      className={`hidden absolute right-0 mt-2 w-48 ${theme.radius.md} ${theme.shadow.md} bg-${theme.colors.background.primary} ring-1 ring-${theme.colors.border.light}`}
                    >
                      <div className="py-1">
                        <button
                          onClick={() => handleEditAppointment(appointment.id)}
                          className={`block w-full text-left px-4 py-2 text-sm text-${theme.colors.text.primary} hover:bg-${theme.colors.background.secondary}`}
                        >
                          Редагувати
                        </button>
                        <button
                          onClick={() => handleDeleteAppointment(appointment.id)}
                          className={`block w-full text-left px-4 py-2 text-sm text-${theme.colors.status.error} hover:bg-${theme.colors.background.secondary}`}
                        >
                          Видалити
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center p-4`}>
          <div className={`bg-${theme.colors.background.primary} ${theme.radius.lg} ${theme.shadow.xl} max-w-2xl w-full max-h-[90vh] overflow-hidden`}>
            <div className={`px-6 py-4 border-b border-${theme.colors.border.light}`}>
              <h2 className={`${theme.fontSize.lg} ${theme.fontWeight.semibold} text-${theme.colors.text.primary}`}>Додати процедуру</h2>
            </div>
            <div className="px-6 py-4 overflow-y-auto">
              <ProcedureSelectionForm
                onSave={handleSaveProcedure}
                onCancel={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosticsPage;