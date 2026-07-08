"use client";

import { useRef, useState } from "react";
import {
  hasErrors,
  validateAppointment,
  type AppointmentFormErrors,
} from "@/lib/validate-appointment";
import type { Appointment } from "@/types/appointment";

type AppointmentModalProps = {
  onSubmit: (appointment: Appointment) => void;
};

const emptyForm = {
  clientName: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

export function AppointmentModal({ onSubmit }: AppointmentModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<AppointmentFormErrors>({});

  function open() {
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
    setForm(emptyForm);
    setErrors({});
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof AppointmentFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof AppointmentFormErrors];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateAppointment(form);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    const appointment: Appointment = {
      id: crypto.randomUUID(),
      clientName: form.clientName.trim(),
      service: form.service.trim(),
      date: form.date,
      time: form.time,
      notes: form.notes.trim() || undefined,
    };

    onSubmit(appointment);
    close();
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Agendar
      </button>

      <dialog
        ref={dialogRef}
        className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-0 shadow-xl backdrop:bg-black/40"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
          <header className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Novo agendamento
            </h2>
            <button
              type="button"
              onClick={close}
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="Fechar"
            >
              ✕
            </button>
          </header>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-slate-700">
              Nome do cliente
            </span>
            <input
              type="text"
              name="clientName"
              value={form.clientName}
              onChange={handleChange}
              className={`rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                errors.clientName
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
            {errors.clientName && (
              <span className="text-xs text-red-600">{errors.clientName}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-slate-700">Serviço</span>
            <input
              type="text"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                errors.service
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
            {errors.service && (
              <span className="text-xs text-red-600">{errors.service}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-slate-700">Data</span>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={`rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                errors.date
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
            {errors.date && (
              <span className="text-xs text-red-600">{errors.date}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-slate-700">Horário</span>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className={`rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
                errors.time
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />
            {errors.time && (
              <span className="text-xs text-red-600">{errors.time}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-slate-700">
              Observações
            </span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>

          <footer className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={close}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Salvar
            </button>
          </footer>
        </form>
      </dialog>
    </>
  );
}
