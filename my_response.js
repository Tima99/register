const form_box = document.querySelector(".form-fill");
const scanf = document.querySelectorAll(".scanf");
const progressRT = 100 / scanf.length; // gets progress inc. per input filled
const progress_bar = document.querySelector(".progress-bar");

form_box.addEventListener("change", (e) => ShowProgress(e));

function ShowProgress(evt) {
  if (evt.target.id === 'phone') return;

  let temp = scanf.length;
  let count = 0;

  for (let i = 0; i < temp; i++)
    if (scanf[i].value != "" || scanf[i].value) count++;

  progress_bar.style.width = progressRT * count + "%";
}
