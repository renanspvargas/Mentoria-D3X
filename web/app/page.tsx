function formatDateTime(date: string, time: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year} às ${time}`;
}

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
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Ana Silva</h2>
          <p className="text-slate-600">Consulta inicial</p>
          <p className="text-sm text-slate-500">
            <time dateTime="2026-07-08T14:30">
              {formatDateTime("2026-07-08", "14:30")}
            </time>
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Bruno Costa</h2>
          <p className="text-slate-600">Retorno</p>
          <p className="text-sm text-slate-500">
            <time dateTime="2026-07-09T10:00">
              {formatDateTime("2026-07-09", "10:00")}
            </time>
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Carla Mendes</h2>
          <p className="text-slate-600">Avaliação</p>
          <p className="text-sm text-slate-500">
            <time dateTime="2026-07-10T16:00">
              {formatDateTime("2026-07-10", "16:00")}
            </time>
          </p>
        </article>
      </section>
    </main>
  );
}
