"use client";

import { AppointmentList } from "@/components/AppointmentList";
import { useAppointments } from "@/hooks/useAppointments";
import type { Appointment } from "@/types/appointment";

export default function Home() {
  const { appointments, addAppointment } = useAppointments();

  function handleAddAppointment() {
    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      clientName: "Novo Cliente",
      service: "Consulta",
      date: "2026-07-15",
      time: "09:00",
      notes: "Agendamento adicionado via localStorage",
    };

    addAppointment(newAppointment);
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Agendamentos</h1>
        <button
          type="button"
          onClick={handleAddAppointment}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Agendar
        </button>
      </header>

      <AppointmentList appointments={appointments} />
    </main>
  );
}
