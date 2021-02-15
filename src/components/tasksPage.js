import { updateLocalStorage } from "./tasks";
import { svgData, radioBtnValue, newTaskForm } from "./data";

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

let createFields = () => {
    let block = document.createElement("div");

    for (let elem of newTaskForm) {
        let label = document.createElement("label");
        let field = document.createElement(elem.field);

        field = checkField(elem, field);
        field.setAttribute("id", elem.id);
        label.innerHTML = elem.label;

        label.appendChild(field);
        block.appendChild(label);
    }

    return block;
}

let createRadioBtn = (val, name) => {
    let label = document.createElement("label");
    let labelText = document.createElement("span");
    let radioBtn = document.createElement("input");

    radioBtn.type = "radio";
    radioBtn.name = name;
    radioBtn.value = val;
    radioBtn.id = val;
    label.for = val;

    labelText.innerHTML = val;

    label.appendChild(radioBtn);
    label.appendChild(labelText);

    return label;
}

const createRadioBlock = (blockValues, name) => {
    let block = document.createElement("div");

    for (let val of blockValues) {
        let label = createRadioBtn(val, name);
        block.appendChild(label);
    }

    return block;
}

const createSearchForm = () => {
    let form = document.createElement("form");
    let inputLabel = document.createElement("label");
    let inputLabelText = document.createElement("span");
    let input = document.createElement("input");
    let dateLabel = document.createElement("label");
    let dateLabelText = document.createElement("span");
    let date = document.createElement("input");
    let butt = document.createElement("button");

    let priorityBlock = createRadioBlock(radioBtnValue.priority, "priority");
    let complexityBlock = createRadioBlock(radioBtnValue.complexity, "complexity");

    form.classList.add("searchForm");
    inputLabel.classList.add("searchBlock");
    dateLabel.classList.add("dateBlock");
    priorityBlock.classList.add("priorityBlock");
    complexityBlock.classList.add("complexityBlock");
    butt.classList.add("searchButt");

    input.type = "text";
    date.type = "date";
    butt.innerText = "Find";

    inputLabelText.innerHTML = "Task<br>";
    dateLabelText.innerHTML = "Date<br>";

    inputLabel.appendChild(inputLabelText);
    inputLabel.appendChild(input);
    dateLabel.appendChild(dateLabelText);
    dateLabel.appendChild(date);
    form.appendChild(inputLabel);
    form.appendChild(dateLabel);
    form.appendChild(priorityBlock);
    form.appendChild(complexityBlock);
    form.appendChild(butt);

    return form;
}

const createModal = () => {
    let modalWrapper = document.createElement("div");
    let modal = document.createElement("div");
    let modalTitle = document.createElement("div");
    let title = document.createElement("h3");
    let closeBtn = document.createElement("button");
    let modalContainer = document.createElement("div");
    let fields = createFields();

    modalWrapper.classList.add("modalWrapper");
    modal.classList.add("modalEditTask");
    modalTitle.classList.add("titleEditBlock")
    modalContainer.classList.add("modalContainer")
    fields.classList.add("newTask");

    title.innerText = "Edit task";
    closeBtn.innerHTML = svgData.closeSvg;

    closeBtn.onclick = () => {
        modalWrapper.style.display = "none";
    }
    modal.onclick = (e) => {
        e.stopPropagation();
    }
    modalWrapper.onclick = () => {
        modalWrapper.style.display = "none";
    }

    modalContainer.appendChild(fields);
    modalTitle.appendChild(title);
    modalTitle.appendChild(closeBtn);
    modal.appendChild(modalTitle);
    modal.appendChild(modalContainer);
    modalWrapper.appendChild(modal);

    return modalWrapper;
}

const createCard = (task) => {
    let card = document.createElement("div");
    let cardTitle = document.createElement("div");
    let title = document.createElement("h3");
    let titleEditBlock = document.createElement("div");
    let cardInfo = document.createElement("ul");
    let delButt = document.createElement("button");
    let editButt = document.createElement("button");

    card.classList.add("card");
    cardTitle.classList.add("cardTitle");
    cardInfo.classList.add("cardInfo");
    titleEditBlock.classList.add("titleEditBlock");

    let info = ["Priority", "Complexity", "Date", "Description"];
    let data = ["priority", "complexity", "date", "description"];

    title.innerText = task.title;
    delButt.innerHTML = svgData.delSvg;
    editButt.innerHTML = svgData.editSvg;
    for (let i = 0; i < 4; ++i) {
        let li = document.createElement("li");
        li.innerHTML = "<span><b>" + info[i] + "</b></span>" + "<span>" + task[data[i]] + "</span>";
        cardInfo.appendChild(li);
    }

    delButt.onclick = () => {
        tasks.splice(tasks.indexOf(task), 1);
        updateLocalStorage();

        document.getElementsByClassName("mainContainer")[0].innerText = "";
        renderTasksPage(tasks);
    }
    editButt.onclick = () => {
        let modalWrapper = createModal();
        document.getElementsByTagName("main")[0].appendChild(modalWrapper);
    }

    titleEditBlock.appendChild(editButt);
    titleEditBlock.appendChild(delButt);
    cardTitle.appendChild(title);
    cardTitle.appendChild(titleEditBlock);
    card.appendChild(cardTitle);
    card.appendChild(cardInfo);

    return card;
}

const createTasksCards = (tasks) => {
    let cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cardsContainer");

    for (let task of tasks) {
        let card = createCard(task);
        cardsContainer.appendChild(card);
    }

    return cardsContainer;
}

const renderTasksPage = (tasks) => {
    let main = document.getElementsByClassName("mainContainer")[0];

    let searchForm = createSearchForm();
    let tasksCards = createTasksCards(tasks);

    main.appendChild(searchForm);
    main.appendChild(tasksCards);
}

export { renderTasksPage };