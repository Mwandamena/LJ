let swiper = new Swiper(".slides", {
  autoplay: {
    delay: 4000,
    disableInteraction: false,
  },
  loop: true,
});

const nav = document.querySelector("nav");
const navigation = document.querySelector(".navigation");
const btn = document.querySelector(".menu");
const scrollBtn = document.querySelector(".scroll");
const overylay = document.querySelector(".over");

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop < 20) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.display = "block";
  }
}

btn.addEventListener("click", navigationOpen);
function navigationOpen() {
  const visibility = navigation.getAttribute("data-visible");
  if (visibility === "false") {
    navigation.setAttribute("data-visible", "true");
    navigation.classList.add("open");
    overylay.setAttribute("data-visible", "true");
    btn.innerHTML = "Close";
  } else if (visibility === "true") {
    navigation.setAttribute("data-visible", "false");
    overylay.setAttribute("data-visible", "false");
    btn.innerHTML = "Menu";
  }
}

const navigationHeight = nav.offsetHeight;

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
