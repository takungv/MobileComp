const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const city = this.getAttribute("data-city");

    const title = document.getElementById("title");
    const desc1 = document.getElementById("desc1");
    const desc2 = document.getElementById("desc2");

    if (city === "london") {
      title.innerHTML = "London";
      desc1.innerHTML = "London เป็นเมืองหลวงของประเทศอังกฤษ";
      desc2.innerHTML = "ตั้งอยู่ริมแม่น้ำ Thames และมีประวัติยาวนาน";
    }

    if (city === "paris") {
      title.innerHTML = "Paris";
      desc1.innerHTML = "Paris เป็นเมืองหลวงของประเทศฝรั่งเศส";
      desc2.innerHTML = "มีหอไอเฟลและเป็นเมืองแห่งแฟชั่น";
    }

    if (city === "tokyo") {
      title.innerHTML = "Tokyo";
      desc1.innerHTML = "Tokyo เป็นเมืองหลวงของประเทศญี่ปุ่น";
      desc2.innerHTML = "เป็นเมืองใหญ่และทันสมัยมาก";
    }
  });
});