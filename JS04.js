document.write("Exercise 4<br><br>")

document.write("Welcome to Hogwarts School of Witchcraft and Wizardry. <br><br>")

let student, class_number, class_name;

student = prompt("What is your name?");
class_number = Math.floor(Math.random() * 4 + 1);

if (class_number === 1) 
{
    class_name = "Gryffindor";
}
else if (class_number === 2) 
{
    class_name = "Slytherin";
}
else if (class_number === 3) 
{
    class_name = "Hufflepuff";
}
else if (class_number === 4) 
{
    class_name = "Ravenclaw";
}

document.write(`${student}, you are ${class_name}.`);
