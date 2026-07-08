import { AppointmentCard } from "@/components/AppointmentCard";
import type { Appointment } from "@/types/appointment";

type AppointmentListProps = {
  appointments: Appointment[];
};

export function AppointmentList({ appointments }: AppointmentListProps) {
  return (
    <section className="flex flex-col gap-4" aria-label="Lista de agendamentos">
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} {...appointment} />
      ))}
    </section>
  );
}
