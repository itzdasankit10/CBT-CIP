var Dark = document.getElementById('toto');
var body = document.body;
var it = document.querySelector(".oo");

Dark.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        it.src = "light.svg";
        it.style.transform = "rotate(180deg)";
        Dark.style.backgroundColor = "black";
        localStorage.setItem('theme', 'dark');
    } else {
        it.src = "darkm.svg";
        it.style.transform = "rotate(0deg)";
        Dark.style.backgroundColor = "white";
        localStorage.setItem('theme', 'light');
    }
});


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    it.src = "light.svg";
    it.style.transform = "rotate(180deg)";
    Dark.style.backgroundColor = "black";
} else {
    it.src = "darkm.svg";
    it.style.transform = "rotate(0deg)";
    Dark.style.backgroundColor = "white";
}


var eventForm = document.getElementById("eventForm");
var eventsList = document.getElementById("events");


const sa = JSON.parse(localStorage.getItem('events')) || [];
sa.forEach(event => {
    const listItem = document.createElement("li");
    listItem.textContent = event;
    eventsList.appendChild(listItem);
});


eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var name = document.getElementsByClassName("eN")[0].value;
    var date = document.getElementsByClassName("eD")[0].value;
    var time = document.getElementsByClassName("eT")[0].value;
    var location = document.getElementById("eventLocation").value;

    const listItem = document.createElement("li");
    const eventText = `${name} - ${date} at ${time} | Location: ${location}`;
    listItem.textContent = eventText;

    eventsList.appendChild(listItem);

  
    sa.push(eventText);
    localStorage.setItem('events', JSON.stringify(sa));

    eventForm.reset();
});
