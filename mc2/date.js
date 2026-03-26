const datetimeEl = document.getElementById("datetime");

let currentTime = null;

let controller = null;
let isDisconnected = false;

function cancelFetch() {
  isDisconnected = true;

  if (controller) {
    controller.abort();
  }

  currentTime = null;
  datetimeEl.innerText = "503 Service Unavailable (Simulated)";
}
function getStatusMessage(code) {
  const map = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    408: "Request Timeout",
    500: "Internal Server Error",
    503: "Service Unavailable"
  };
  return map[code] || "Unknown Error";
}

// 🟢 แปลงวันที่เป็นภาษาไทย
function formatThaiDate(date) {
  const months = [
    "มกราคม","กุมภาพันธ์","มีนาคม","เมษายน",
    "พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม",
    "กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear() + 543;

  const time = date.toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return `วันที่ ${day} ${month} ${year} เวลา ${time} น.`;
}

// 🔵 fetch + timeout
async function fetchTime() {
  isDisconnected = false;

  controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  fetch('https://learningportal.ocsc.go.th/learningspaceapi/localdatetime', {
    signal: controller.signal
  })
    .then(res => {
      clearTimeout(timeout);

      if (!res.ok) {
        throw { status: res.status };
      }

      return res.json(); // ✅ แปลงเป็น data
    })
    .then(data => {
      // ✅ ใช้ data ตรงนี้
      currentTime = new Date(data.datetime);
      datetimeEl.innerText = formatThaiDate(currentTime);
    })
    .catch(err => {
      let code;

      if (err.name === "AbortError") {
        code = 408; // timeout
      } else if (err.status) {
        code = err.status;
      } else if (isDisconnected) {
        code = 503;
      } else {
        code = 500;
      }

      datetimeEl.innerText = `${code} ${getStatusMessage(code)}`;
    });
}

// 🟡 อัปเดตทุก 1 วิ
setInterval(() => {
  if (currentTime && !isDisconnected) {
    currentTime.setSeconds(currentTime.getSeconds() + 1);
    datetimeEl.innerText = formatThaiDate(currentTime);
  }
}, 1000);

// เรียกครั้งแรก
fetchTime();