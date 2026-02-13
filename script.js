document.addEventListener("DOMContentLoaded", () => {

  // ❤️ Corazones cayendo
  const hearts = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 24) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 250);

  // Pantallas
  const welcome = document.getElementById("screen-welcome");
  const message = document.getElementById("screen-message");
  const coupons = document.getElementById("screen-coupons");

  document.getElementById("btn-start").onclick = () => {
    welcome.classList.remove("active");
    message.classList.add("active");
  };

  // Botón NO
  const btnNo = document.getElementById("btn-no");
  const hint = document.getElementById("cant-reject");

  btnNo.onclick = () => {
    hint.innerText = "❌ No puedes rechazar la cita ❌";
  };

  // Botón SÍ
  document.getElementById("btn-yes").onclick = () => {
    message.classList.remove("active");
    coupons.classList.add("active");
  };

  // 🎟️ CUPONES – marcar como canjeados
  const couponsList = document.querySelectorAll(".coupon");

  couponsList.forEach(coupon => {
    coupon.addEventListener("click", () => {
      alert("💖 ¡Canjeado con éxito! 💖");
    });
  });

});
