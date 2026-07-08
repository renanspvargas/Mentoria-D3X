"use client";

import { AppointmentList } from "@/components/AppointmentList";
import { AppointmentModal } from "@/components/AppointmentModal";
import { useAppointments } from "@/hooks/useAppointments";

export default function Home() {
  const { appointments, addAppointment } = useAppointments();

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Agendamentos</h1>
        <AppointmentModal onSubmit={addAppointment} />
      </header>

      <AppointmentList appointments={appointments} />
    </main>
  );
}
