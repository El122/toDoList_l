import { addTask } from "./tasks";
import { newTaskForm } from "./data";

let checkField = (elem, field) => {
    switch (elem.field) {
        case "input":
            field.setAttribute("type", elem.type);
            field.setAttribute("placeholder", elem.placeholder);
            break;
        case "select":
            for (let i = 0; i < elem.values.length; ++i) {
                let op = document.createElement("option");
                op.innerHTML = elem.values[i][0];
                op.value = elem.values[i][1];
                field.appendChild(op);
            }
            break;
        case "textarea":
            field.setAttribute("placeholder", elem.placeholder);
            field.setAttribute("cols", elem.cols);
            field.setAttribute("rows", elem.rows);
            break;
    }

    if (elem.req) {
        field.setAttribute("require", "require");
    }

    return field;
}

let createFields = (block) => {
    for (let elem of newTaskForm) {
        let label = document.createElement("label");
        let field = document.createElement(elem.field);

        field = checkField(elem, field);
        field.setAttribute("id", elem.id);
        label.innerHTML = elem.label;

        label.appendChild(field);
        block.appendChild(label);
    }
}

const createNewTaskBlock = () => {
    let block = document.createElement("form");
    let blockTitle = document.createElement("h2");
    let butt = document.createElement("button");

    blockTitle.innerText = "Add new task";
    block.classList.add("newTask");
    butt.innerText = "Add task";
    butt.id = "addNewTask";
    butt.onclick = addTask;

    block.appendChild(blockTitle);
    createFields(block);
    block.appendChild(butt);

    return block;
}

const renderFirstBlock = (main) => {
    let firstBlock = document.createElement("section");
    let newTaskBlock = createNewTaskBlock();

    firstBlock.appendChild(newTaskBlock);
    main.appendChild(firstBlock);
}

export { renderFirstBlock };