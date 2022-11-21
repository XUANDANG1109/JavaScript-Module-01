document.write("Exercise 3<br><br>")

let x, y, z;

x = parseInt(prompt("Input a first number: "))
y = parseInt(prompt("Input a second number: "))
z = parseInt(prompt("Input a third number: "))

sum = x + y + z;
product = x * y * z;
average = sum / 3;

document.write(`x = ${x}, y = ${y}, z = ${z} <br>`)
document.write("Sum = ",sum, "<br>")
document.write("Product = ", product , "<br>")
document.write("Average = ", average , "<br>")