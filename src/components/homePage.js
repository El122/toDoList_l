import { renderFirstBlock } from "./firstHomeBlock";
import { renderSecondBlock } from "./secondHomeBlock";
import { renderThirdBlock } from "./thirdHomeBlock";

const renderHomePage = (tasks) => {
    let main = document.getElementsByClassName("mainContainer")[0];

    renderFirstBlock(main, tasks);
    renderSecondBlock(main, tasks);
    renderThirdBlock(main);
}

export { renderHomePage };