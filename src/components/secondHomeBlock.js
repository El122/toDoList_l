import { getTask } from "./tasks";
import { getDate } from "./dateFunctions";

const createTasks = (tasks, day) => {
    let date = getDate(day);
    let block = document.createElement("div");
    let blockTitle = document.createElement("h2");
    let list = document.createElement("ul");

    block.classList.add("todayTasks");
    blockTitle.innerHTML = day + " tasks";

    for (let task of tasks) { //итерация по датам
        if (task.date == date && !task.finished) {
            list.appendChild(getTask(task));
        }
    }

    block.appendChild(blockTitle);
    block.appendChild(list);

    return block;
}

const renderSecondBlock = (main, tasks) => {
    let secondBlock = document.createElement("section");
    let todayTasks = createTasks(tasks, "Today");
    let tomorrowTasks = createTasks(tasks, "Tomorrow");
    secondBlock.appendChild(todayTasks);
    secondBlock.appendChild(tomorrowTasks);

    main.appendChild(secondBlock);
}

export { renderSecondBlock };