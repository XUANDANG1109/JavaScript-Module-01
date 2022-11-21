document.write("Exercise 9<br><br>");


let num;

num = parseInt(prompt("Enter a number:"));

if (num < 0) {
    document.write("It is excluded.");
}
else if (num === 0 || num === 1) {
    document.write(num + " is not a prime number.");
}

else {
    let is_prime = true;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            is_prime = false;
        }
    }

    if (is_prime === true) {
        document.write(num + " is a prime number.");
    }
    else {
        document.write(num + " is not a prime number.");
    }
}