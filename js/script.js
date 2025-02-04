document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn1 = document.getElementById("openModal");
  const modal1 = document.getElementById("modal");
  const closeModalBtn1 = modal1.querySelector(".close-modal");

  const modalOverlay1 = document.createElement("div");
  modalOverlay1.classList.add("modal-overlay");
  document.body.appendChild(modalOverlay1);

  openModalBtn1.addEventListener("click", function () {
    modal1.style.display = "flex";
    modalOverlay1.style.display = "block";
  });

  closeModalBtn1.addEventListener("click", function () {
    modal1.style.display = "none";
    modalOverlay1.style.display = "none";
  });

  modalOverlay1.addEventListener("click", function () {
    modal1.style.display = "none";
    modalOverlay1.style.display = "none";
  });

  const openModalBtn2 = document.getElementById("openModal2");
  const modal2 = document.getElementById("modal2");
  const closeModalBtn2 = modal2.querySelector(".close-modal2");

  const modalOverlay2 = document.createElement("div");
  modalOverlay2.classList.add("modal-overlay");
  document.body.appendChild(modalOverlay2);

  openModalBtn2.addEventListener("click", function () {
    modal2.style.display = "flex";
    modalOverlay2.style.display = "block";
  });

  closeModalBtn2.addEventListener("click", function () {
    modal2.style.display = "none";
    modalOverlay2.style.display = "none";
  });

  modalOverlay2.addEventListener("click", function () {
    modal2.style.display = "none";
    modalOverlay2.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
