const STORAGE_KEY = "agendamentos-d3x";

const modal = document.getElementById("appointment-modal");
const form = document.getElementById("appointment-form");
const listContainer = document.getElementById("appointments-list");
const btnOpen = document.getElementById("btn-open-modal");
const btnClose = document.getElementById("btn-close-modal");
const btnCancel = document.getElementById("btn-cancel");

const SEED_APPOINTMENTS = [
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

let appointments = [];

function loadAppointments() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    appointments = JSON.parse(stored);
  } else {
    appointments = [...SEED_APPOINTMENTS];
    saveAppointments();
  }
}

function saveAppointments() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
}

function formatDateTime(date, time) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year} às ${time}`;
}

function openModal() {
  modal.showModal();
}

function closeModal() {
  modal.close();
  form.reset();
}

function renderAppointments() {
  listContainer.innerHTML = appointments
    .map(
      (appointment) => `
      <article class="appointment-card">
        <h2 class="client-name">${appointment.clientName}</h2>
        <p class="service">${appointment.service}</p>
        <p class="datetime">
          <time datetime="${appointment.date}T${appointment.time}">
            ${formatDateTime(appointment.date, appointment.time)}
          </time>
        </p>
        ${appointment.notes ? `<p class="notes">${appointment.notes}</p>` : ""}
      </article>
    `
    )
    .join("");
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const newAppointment = {
    id: crypto.randomUUID(),
    clientName: formData.get("clientName"),
    service: formData.get("service"),
    date: formData.get("date"),
    time: formData.get("time"),
    notes: formData.get("notes") || undefined,
  };

  appointments.push(newAppointment);
  saveAppointments();
  renderAppointments();
  closeModal();
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);
form.addEventListener("submit", handleSubmit);

document.addEventListener("DOMContentLoaded", () => {
  loadAppointments();
  renderAppointments();
});
