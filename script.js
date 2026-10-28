// Edit this list to change the projects shown in "Selected work".
const projects = [
  { title: "Project One", blurb: "A one-line description of what this was and your role.", category: "design", color: "#d9480f", initials: "P1", link: "#" },
  { title: "Project Two", blurb: "A one-line description of what this was and your role.", category: "code", color: "#1971c2", initials: "P2", link: "#" },
  { title: "Project Three", blurb: "A one-line description of what this was and your role.", category: "illustration", color: "#7048e8", initials: "P3", link: "#" },
  { title: "Project Four", blurb: "A one-line description of what this was and your role.", category: "code", color: "#2b8a3e", initials: "P4", link: "#" },
  { title: "Project Five", blurb: "A one-line description of what this was and your role.", category: "design", color: "#c2255c", initials: "P5", link: "#" },
  { title: "Project Six", blurb: "A one-line description of what this was and your role.", category: "illustration", color: "#e67700", initials: "P6", link: "#" },
];

const grid = document.getElementById("project-grid");

grid.innerHTML = projects.map((p) => `
  <article class="card reveal" data-category="${p.category}">
    <a href="${p.link}" style="text-decoration:none">
      <div class="card-art" style="background:${p.color}">${p.initials}</div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.blurb}</p>
        <span class="tag">${p.category}</span>
      </div>
    </a>
  </article>
`).join("");

// Project filters
document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.toggle("is-active", b === button));
    const filter = button.dataset.filter;
    grid.querySelectorAll(".card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

// Theme toggle, remembered per browser
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch {}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
});

// Fade sections in as they scroll into view
document.querySelectorAll(".section").forEach((el) => el.classList.add("reveal"));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
