
document.addEventListener("DOMContentLoaded", function() {
    const times = ["GoFox", "E.C Vikings", /* Adicione os outros times aqui */];

    const timesList = document.querySelector(".times-list");

    times.forEach(function(time) {
        const timeElement = document.createElement("div");
        timeElement.classList.add("time");
        timeElement.textContent = time;
        timesList.appendChild(timeElement);
    });
});
