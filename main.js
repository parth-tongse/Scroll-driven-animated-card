const main = document.querySelector("main");

document.querySelector(".scroller").addEventListener("scrollsnapchange", (event) => {
  main.dataset.activeIndex = Math.round(event.target.scrollLeft / main.getBoundingClientRect().width);
});