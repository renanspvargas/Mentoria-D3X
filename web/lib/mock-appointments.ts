import type { Appointment } from "@/types/appointment";

export const mockAppointments: Appointment[] = [
  {
    id: "1",
    clientName: "Ana Silva",
    service: "Consulta inicial",
    date: "2026-07-08",
    time: "14:30",
  },
  {
    id: "2",
    clientName: "Bruno Costa",
    service: "Retorno",
    date: "2026-07-09",
    time: "10:00",
  },
  {
    id: "3",
    clientName: "Carla Mendes",
    service: "Avaliação",
    date: "2026-07-10",
    time: "16:00",
  },
];
