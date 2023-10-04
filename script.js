function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);

    taskInput.value = "";
}