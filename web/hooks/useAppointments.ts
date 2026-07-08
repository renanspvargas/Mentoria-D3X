"use client";

import { useEffect, useState } from "react";
import { loadAppointments, saveAppointments } from "@/lib/storage";
import type { Appointment } from "@/types/appointment";

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setAppointments(loadAppointments());
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    saveAppointments(appointments);
  }, [appointments, isLoaded]);

  function addAppointment(appointment: Appointment) {
    setAppointments((prev) => [...prev, appointment]);
  }

  return { appointments, addAppointment, setAppointments, isLoaded };
}
