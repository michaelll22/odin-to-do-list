import "./styles.css";
import Element from "./domhelper";

const popupProject = document.querySelector("#popupProject");
const popupTask = document.querySelector("#popupTask");

const addProjectBtn = document.querySelector("#addProjectBtn");
addProjectBtn.addEventListener("click", () => {
  popupProject.style.display = "flex";
});

const addTaskBtn = document.querySelector("#addTaskBtn");
addTaskBtn.addEventListener("click", () => {
  popupTask.style.display = "flex";
});

const cancelBtn = document.querySelectorAll(".cancel");
cancelBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    popupProject.style.display = "";
    popupTask.style.display = "";
  });
});

const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  menu
    .querySelectorAll("button")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  const projectTitle = document.querySelector("#projectTitle");
  projectTitle.textContent = e.target.textContent;
});

const saveBtn = document.querySelectorAll(".save");
saveBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.querySelector("#projectName");
    const projectName = input.value;

    newProject(projectName);

    input.value = "";
    popupProject.style.display = "";
    popupTask.style.display = "";
  });
});

function newProject(name) {
  const projectList = document.querySelector(".projects-list");
  const project = new Element("div", { class: "project-item" }).createElement();

  const projectName = new Element(
    "button",
    { class: "project-btn" },
    name
  ).createElement();

  const deleteBtn = new Element("button", {
    class: "delete-project",
  }).createElement();

  const deleteIcon = new Element("i", {
    class: "fas fa-trash",
  }).createElement();
  deleteBtn.append(deleteIcon);

  project.append(projectName);
  project.append(deleteBtn);

  projectList.append(project);

  return projectList;
}
