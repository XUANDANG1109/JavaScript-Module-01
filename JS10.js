document.write("Exercise 10<br><br>");

let num_of_dice, sum_of_dices;
let sum, probability, time;
time = 0;
probability  = 0;
num_of_dice = prompt("Input the number of dice:");
sum = prompt("Input sum of eyes:")

for (let i = 0; i <= 10000; i++) {
    let sum_of_dices = 0;
    for (let i = 0; i < num_of_dice; i++) {
        value_of_dices = Math.floor(Math.random() * 6 + 1);
        sum_of_dices += value_of_dices;
    }
    if (sum_of_dices == sum) {
       time ++;    
    }
}

probability = (time/10000)*100;
document.write("The probability is: " + probability.toFixed(2) + "%")