import { tasks } from "./data";
import { renderSecondBlock } from "./secondHomeBlock";

let updateLocalStorage = () => {
    let jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", jsonTasks);
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

    tasks.push(newTask);

    let main = document.getElementsByClassName("mainContainer")[0];
    updateLocalStorage();
    renderSecondBlock(main, tasks);

    return newTask
}


export { updateLocalStorage, addTask };