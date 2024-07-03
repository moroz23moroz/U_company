window.addEventListener("DOMContentLoaded", () => {
  const openSpoiler = () => {
    const tabs = document.querySelectorAll(".questions__link");
    const hiddens = document.querySelectorAll(".questions__sub");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        if (tab.classList.contains("questions__link-active")) {
          tab.classList.remove("questions__link-active");
          hiddens[index].classList.add("hidden");
        } else {
          hiddens.forEach((hidden) => {
            hidden.classList.add("hidden");
          });
          tabs.forEach((tab) => {
            tab.classList.remove("questions__link-active");
          });
          hiddens[index].classList.remove("hidden");
          tab.classList.add("questions__link-active");
        }
      });
    });
  };

  openSpoiler();

  const splide = new Splide(".splide", {
    type: "loop",
    pagination: false,
    gap: 20,
    perPage: 2,
    perMove: 1,
    interval: 2000,
  });
  splide.mount();
});
