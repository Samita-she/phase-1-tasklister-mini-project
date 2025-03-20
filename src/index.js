document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const newTask = document.getElementById("new-task-description").value;

    const taskItem = document.createElement("li");
    taskItem.textContent = newTask;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => taskItem.remove());

    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    form.reset();
  });


