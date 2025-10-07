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
