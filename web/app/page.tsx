import { AppointmentCard } from "@/components/AppointmentCard";
import { mockAppointments } from "@/lib/mock-appointments";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Agendamentos</h1>
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Agendar
        </button>
      </header>

      <section className="flex flex-col gap-4" aria-label="Lista de agendamentos">
        {mockAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} {...appointment} />
        ))}
      </section>
    </main>
  );
}
