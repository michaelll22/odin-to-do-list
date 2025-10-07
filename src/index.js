import "./styles.css";

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
