import { tasks } from "./data";
import { renderSecondBlock } from "./secondHomeBlock";
import { getDate } from "./dateFunctions";

let updateLocalStorage = () => {
    tasks.sort((a, b) => {
        return (a.finished === b.finished) ? 1 : a.finished ? 1 : -1;
    });
    let jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", jsonTasks);
}

const getTask = (task) => {
    let li = document.createElement("li");
    let p = document.createElement("div");
    let checkTaskBox = document.createElement("input");
    let taskBlock = document.createElement("div");

    p.classList.add("task");
    p.innerHTML = task.title;
    checkTaskBox.type = "checkbox";
    taskBlock.classList.add("taskBlock");
    taskBlock.innerHTML = "<p><b>Priority:</b> " + task.priority +
        "</p><p><b>Complexity:</b> " + task.complexity +
        "</p><p><b>Date:</b> " + task.date +
        "</p><p><b>Description:</b> " + task.description + "</p>";

    li.appendChild(checkTaskBox);
    li.appendChild(p);
    p.appendChild(taskBlock);

    p.onclick = () => {
        let visible = taskBlock.style.display;
        if (visible == "none") {
            taskBlock.style.display = "block";
        } else {
            taskBlock.style.display = "none";
        }
    }

    checkTaskBox.onclick = () => {
        task.finished = checkTaskBox.checked;
    }

    return li;
}

const addTask = (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let priority = document.querySelector("#priority").value;
    let complexity = document.querySelector("#сomplexity").value;
    let date = document.querySelector("#date").value;
    let description = document.querySelector("#description").value;

    document.querySelector("#title").value = "";
    document.querySelector("#priority").value = "";
    document.querySelector("#сomplexity").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#description").value = "";

    if (title == undefined || date == undefined) {
        alert("Title or date is not filled");
        return 1;
    }

    let newTask = {
        title: title,
        priority: priority,
        complexity: complexity,
        date: date,
        description: description,
        finished: false
    }

    if (getDate("Today") == newTask.date) {
        document.getElementsByClassName("todayTasks")[0].getElementsByTagName("ul")[0].appendChild(getTask(newTask));
    } else if (getDate("Tomorrow") == newTask.date) {
        document.getElementsByClassName("todayTasks")[1].getElementsByTagName("ul")[0].appendChild(getTask(newTask));
    }

    tasks.push(newTask);

    let main = document.getElementsByClassName("mainContainer")[0];
    updateLocalStorage();

    return newTask
}


export { updateLocalStorage, addTask, getTask };