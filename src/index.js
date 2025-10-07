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

const saveBtn = document.querySelectorAll(".save");
saveBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const projectList = document.querySelector(".projects-list");
    const input = document.querySelector("#projectName");
    const projectName = input.value;

    const newProjectItem = document.createElement("div");
    newProjectItem.classList.add("project-item");

    const newProjectBtn = document.createElement("button");
    newProjectBtn.classList.add("project-btn");
    newProjectBtn.textContent = projectName;

    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.classList.add("delete-project");

    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fas fa-trash");
    newDeleteBtn.appendChild(deleteIcon);

    newProjectItem.appendChild(newProjectBtn);
    newProjectItem.appendChild(newDeleteBtn);

    projectList.appendChild(newProjectItem);

    input.value = "";
    popupProject.style.display = "";
    popupTask.style.display = "";
  });
});
