document.write("Exercise 5<br><br>")

let input_year;

input_year = parseInt(prompt("Enter a year:"));

if (input_year % 4 === 0 && input_year % 100 != 0) {
    document.write("It is a leap year.");
}
else if (input_year % 100 === 0 && input_year % 400 === 0) {
    document.write("It is a leap year.");
}
else {
    document.write("It is not a leap year.");
}