const getDate = (dayToGet) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? "0" + month : month;

    if (dayToGet == "Today") {
        day = day < 10 ? "0" + day : day;
        return year + "-" + month + "-" + day;
    } else if (dayToGet == "Tomorrow") {
        day += 1;
        day = day < 10 ? "0" + day : day;
        return year + "-" + month + "-" + day;
    }
    return "";
}

const createTasks = (tasks, day) => {
    let date = getDate(day);
    let block = document.createElement("div");
    let blockTitle = document.createElement("h2");
    let list = document.createElement("ul");

    block.classList.add("todayTasks");
    blockTitle.innerHTML = day + " tasks";

    for (let task of tasks) { //итерация по датам
        if (task.date == date && !task.finished) {
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
            list.appendChild(li);

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