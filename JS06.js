document.write("Exercise 6<br><br>");

let confirmation, input_number;

confirmation = confirm("Should I calculate the square root?")

if (confirmation === true) {
    input_number = parseInt(prompt("Input number"));
    
    if (input_number >= 0) {
        square_root = Math.sqrt(input_number);
        document.write("The square root o " + input_number + " is " + square_root);
    }
    else {
        document.write("The square root of a negative number is not defined");
    }
}
else {
    document.write("The square root is not calculated");
}
