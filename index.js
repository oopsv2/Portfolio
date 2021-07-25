const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");

nav.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  if (link.classList.contains("header--navigation__a")) {
    const jumpTo = link.getAttribute("href");
    document.querySelector(jumpTo).scrollIntoView();
  }
});

const func = function (e, o) {
  const [entry] = e;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  o.unobserve(entry.target);
};
const effect = new IntersectionObserver(func, {
  root: null,
  threshold: 0.2,
});

sections.forEach((i) => {
  effect.observe(i);
  i.classList.add("section__hidden");
});
