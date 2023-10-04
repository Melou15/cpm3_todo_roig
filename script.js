function addTask() {
            var taskInput = document.getElementById("task");
            var taskText = taskInput.value.trim();

            if (taskText === "") {
                alert("Veuillez entrer une tâche.");
                return;
            }

            var taskList = document.getElementById("taskList");
            var taskItem = document.createElement("li");

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.onchange = function () {
                toggleTask(checkbox);
            };


            var label = document.createElement("label");
            label.textContent = taskText;


            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Suppr";
            deleteButton.onclick = function () {
                deleteTask(taskItem);
            };

            taskItem.appendChild(checkbox);
            taskItem.appendChild(label);
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);

            taskInput.value = "";
        }

        function toggleTask(checkbox) {
            var label = checkbox.nextElementSibling;
            label.classList.toggle("completed");
        }

        function deleteTask(taskItem) {
            taskItem.remove();
        }