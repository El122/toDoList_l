import { renderHomePage } from "./components/homePage";
import { renderTasksPage } from "./components/tasksPage";
import { tasks } from "./components/data";

const controller = (page) => {
    let main = document.getElementsByClassName("mainContainer")[0];
    document.getElementsByClassName("promo")[0].style.display = "none";
    main.innerHTML = "";
    switch (page) {
        case "home":
            main.style.display = "grid";
            main.style.gridTemplateColumns = "1fr 1fr 1fr";
            renderHomePage(tasks);
            break;
        case "allTasks":
            main.style.display = "block";
            renderTasksPage(tasks);
            break;
    }
}

const switchClasses = (buttons, butt) => {
    for (let butt of buttons) {
        butt.classList.remove("active");
    }
    butt.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    let storageData = localStorage.getItem("tasks");
    if (storageData != null) {
        tasks = JSON.parse(storageData);
    }

    let buttons = document.querySelectorAll("[page]");
    let openPage = "home";

    for (let butt of buttons) {
        butt.onclick = () => {
            openPage = butt.getAttribute("page");
            controller(openPage, butt);
            switchClasses(buttons, butt);
        }
    }
});