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

export { getDate };