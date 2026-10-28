// Portfolio projects. Each one gets a gallery tile on portfolio.html and a
// case study page at case-study.html?project=<id>.
// To use a real image, set `image` to a path like "images/project-one.jpg?v=1793194256".
const projects = [
  {
    id: "project-one",
    title: "Project One",
    summary: "Short one-line description.",
    color: "#c8553d",
    image: "",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    id: "project-two",
    title: "Project Two",
    summary: "Short one-line description.",
    color: "#2d6a8f",
    image: "",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
  },
  {
    id: "project-three",
    title: "Project Three",
    summary: "Short one-line description.",
    color: "#588157",
    image: "",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    id: "project-four",
    title: "Project Four",
    summary: "Short one-line description.",
    color: "#6d597a",
    image: "",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
  },
];

function artStyle(project) {
  return project.image
    ? `background-image:url('${project.image}')`
    : `background-color:${project.color}`;
}

const gallery = document.getElementById("gallery");
if (gallery) {
  gallery.innerHTML = projects.map((p) => `
    <a href="case-study.html?project=${p.id}">
      <div class="thumb" style="${artStyle(p)}"></div>
      <h2>${p.title}</h2>
      <p>${p.summary}</p>
    </a>
  `).join("");
}

const caseStudy = document.getElementById("case-study");
if (caseStudy) {
  const id = new URLSearchParams(location.search).get("project");
  const project = projects.find((p) => p.id === id);
  if (project) {
    document.title = `${project.title} · Nick Tomlinson`;
    caseStudy.innerHTML = `
      <h1>${project.title}</h1>
      <div class="case-hero" style="${artStyle(project)}"></div>
      ${project.body.map((para) => `<p>${para}</p>`).join("")}
    `;
  } else {
    caseStudy.innerHTML = `<h1>Not found</h1><p>That project doesn't exist.</p>`;
  }
}
