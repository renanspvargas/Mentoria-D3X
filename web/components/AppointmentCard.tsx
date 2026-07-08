import type { Appointment } from "@/types/appointment";

function formatDateTime(date: string, time: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year} às ${time}`;
}

type AppointmentCardProps = Pick<
  Appointment,
  "clientName" | "service" | "date" | "time" | "notes"
>;

export function AppointmentCard({
  clientName,
  service,
  date,
  time,
  notes,
}: AppointmentCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{clientName}</h2>
      <p className="text-slate-600">{service}</p>
      <p className="text-sm text-slate-500">
        <time dateTime={`${date}T${time}`}>{formatDateTime(date, time)}</time>
      </p>
      {notes && (
        <p className="mt-2 text-sm italic text-slate-400">{notes}</p>
      )}
    </article>
  );
}
