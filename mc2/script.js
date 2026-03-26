const container = document.getElementById("income-container");

function addIncome() {
  const rows = document.querySelectorAll(".income-row");
  if (rows.length >= 3) return;

  const div = document.createElement("div");
  div.className = "income-row";
  div.innerHTML = '<input type="number" class="income">';
  container.appendChild(div);
}

function removeIncome() {
  const rows = document.querySelectorAll(".income-row");
  if (rows.length <= 1) return;
  container.removeChild(rows[rows.length - 1]);
}

// คำนวณทุกครั้งที่พิมพ์
document.addEventListener("input", calculate);

function calculate() {
  const inputs = document.querySelectorAll(".income");
  let total = 0;
  let warning = "";

  inputs.forEach(input => {
    const value = input.value;

    if (value === "") return;

    if (isNaN(value) || Number(value) < 0) {
      warning = "กรุณากรอกตัวเลขที่ถูกต้อง (ห้ามติดลบ)";
    }

    total += Number(value);
  });

  document.getElementById("warning").innerText = warning;
  document.getElementById("total").value = total;

  let rate = getTaxRate(total);
  document.getElementById("rate").value = rate;

  let tax = total * (rate / 100);
  document.getElementById("tax").value = tax;
}

function getTaxRate(income) {
  if (income <= 150000) return 0;
  if (income <= 300000) return 5;
  if (income <= 500000) return 10;
  if (income <= 750000) return 15;
  if (income <= 1000000) return 20;
  if (income <= 2000000) return 25;
  if (income <= 5000000) return 30;
  return 35;
}
function toggleTheme() {
  document.body.classList.toggle("dark");
}

//time
const datetimeEl = document.getElementById("datetime");

let currentTime = null;

// แปลงเป็นภาษาไทย
function formatThaiDate(date) {
  const months = [
    "มกราคม","กุมภาพันธ์","มีนาคม","เมษายน",
    "พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม",
    "กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear() + 543;

  const time = date.toLocaleTimeString("th-TH");

  return `วันที่ ${day} ${month} ${year} เวลา ${time} น.`;
}

// เรียก API
async function fetchTime() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    const res = await fetch('https://learningportal.ocsc.go.th/learningspaceapi/localdatetime', {
      signal: controller.signal
    });

    clearTimeout(timeout);

    const data = await res.json();

    // 🔥 สำคัญ: API นี้มักจะคืน string เวลา
    currentTime = new Date(data);

  } catch (err) {
    datetimeEl.innerText = "ระบบเครือข่ายล้มเหลว";
  }
}

// อัปเดตทุก 1 วินาที
setInterval(() => {
  if (currentTime) {
    currentTime.setSeconds(currentTime.getSeconds() + 1);
    datetimeEl.innerText = formatThaiDate(currentTime);
  }
}, 1000);

// เรียกครั้งแรก
fetchTime();