flatpickr("#birthdate", {
  maxDate: "today",
  dateFormat: "Y-m-d",
  allowInput: false,
});


const form = document.getElementById("ageForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultDiv.textContent = "";

  const birthdateStr = document.getElementById("birthdate").value;

  if (!birthdateStr) {
    resultDiv.innerHTML = `<span style="color:red;">Por favor selecciona tu fecha de nacimiento.</span>`;
    return;
  }

  const birthDate = luxon.DateTime.fromISO(birthdateStr);
  const now = luxon.DateTime.now();

  if (birthDate > now) {
    resultDiv.innerHTML = `<span style="color:red;">La fecha no puede ser futura.</span>`;
    return;
  }

  const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);
  const days = Math.floor(diff.days);

  resultDiv.textContent = `Tienes ${years} años, ${months} meses y ${days} días.`;
});

