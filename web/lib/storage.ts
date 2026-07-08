import { mockAppointments } from "@/lib/mock-appointments";
import type { Appointment } from "@/types/appointment";

const STORAGE_KEY = "agendamentos-d3x";

export function loadAppointments(): Appointment[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored) as Appointment[];
  }

  const seed = [...mockAppointments];
  saveAppointments(seed);
  return seed;
}

export function saveAppointments(appointments: Appointment[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
}
