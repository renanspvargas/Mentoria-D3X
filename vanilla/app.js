const modal = document.getElementById("appointment-modal");
const btnOpen = document.getElementById("btn-open-modal");
const btnClose = document.getElementById("btn-close-modal");
const btnCancel = document.getElementById("btn-cancel");

function openModal() {
  modal.showModal();
}

function closeModal() {
  modal.close();
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);
