const months = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalendar(month, year) {
  const body = document.getElementById("calendar-body");
  const monthYear = document.getElementById("month-year");

  monthYear.textContent = `${months[month]} ${year}`;
  body.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let offset = (firstDay === 0 ? 6 : firstDay - 1);
  let row = document.createElement("tr");

  for (let i = 0; i < offset; i++) {
    row.appendChild(document.createElement("td"));
  }

  for (let d = 1; d <= daysInMonth; d++) {
    let cell = document.createElement("td");

    // día actual
    if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      cell.innerHTML = `<span class="today">${d}</span>`;
    } else {
      cell.textContent = d;
    }

    // fines de semana
    let dayOfWeek = (offset + d - 1) % 7;
    if (dayOfWeek === 5) cell.classList.add("saturday");
    if (dayOfWeek === 6) cell.classList.add("sunday");

    row.appendChild(cell);

    if ((offset + d) % 7 === 0) {
      body.appendChild(row);
      row = document.createElement("tr");
    }
  }

  if (row.children.length > 0) {
    body.appendChild(row);
  }
}

function changeMonth(direction) {
  currentMonth += direction;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
}

renderCalendar(currentMonth, currentYear);
