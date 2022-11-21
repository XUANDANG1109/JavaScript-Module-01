document.write("Exercise 8<br><br>");

start = parseInt(prompt("Enter the start year:"));
end = parseInt(prompt("Enter the end year:"));

var ul = document.createElement("ul");
for (let i = start; i <= end; i ++) {
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        ul.innerHTML += `<li>${i}</li>`;
    }
}

document.body.appendChild(ul);