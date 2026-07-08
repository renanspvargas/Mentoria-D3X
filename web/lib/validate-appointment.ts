export type AppointmentFormData = {
  clientName: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
};

export type AppointmentFormErrors = Partial<
  Record<keyof AppointmentFormData, string>
>;

const TIME_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/;

export function validateAppointment(
  data: AppointmentFormData,
): AppointmentFormErrors {
  const errors: AppointmentFormErrors = {};

  if (!data.clientName.trim()) {
    errors.clientName = "Nome do cliente é obrigatório";
  }

  if (!data.service.trim()) {
    errors.service = "Serviço é obrigatório";
  }

  if (!data.date.trim()) {
    errors.date = "Data é obrigatória";
  }

  if (!data.time.trim()) {
    errors.time = "Horário é obrigatório";
  } else if (!TIME_REGEX.test(data.time)) {
    errors.time = "Horário deve estar no formato HH:MM";
  }

  return errors;
}

export function hasErrors(errors: AppointmentFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
