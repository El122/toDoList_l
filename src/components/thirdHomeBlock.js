const getTime = () => {
    let date = new Date();
    let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    return date.getHours() + ":" + min;
}

const getDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    switch (month) {
        case 0: month = "January"; break
        case 1: month = "February"; break
        case 2: month = "March"; break
        case 3: month = "April"; break
        case 4: month = "May"; break
        case 5: month = "June"; break
        case 6: month = "July"; break
        case 7: month = "August"; break
        case 8: month = "September"; break
        case 9: month = "October"; break
        case 10: month = "November"; break
        case 11: month = "December"; break
    }

    return day + " " + month + " " + year;
}

const createDateTime = () => {
    let block = document.createElement("div");
    let time = document.createElement("p");
    let date = document.createElement("p");

    block.classList.add("dateAndTime");
    time.classList.add("time");
    date.classList.add("date");

    time.innerHTML = getTime();
    date.innerHTML = getDate();

    setInterval(() => {
        time.innerHTML = getTime();
        date.innerHTML = getDate();
    }, 10000);

    block.appendChild(time);
    block.appendChild(date);

    return block;
}

const renderThirdBlock = (main) => {
    let thirdBlock = document.createElement("section");
    let dateTimeBlock = createDateTime();

    thirdBlock.appendChild(dateTimeBlock);
    main.appendChild(thirdBlock);
}

export { renderThirdBlock };