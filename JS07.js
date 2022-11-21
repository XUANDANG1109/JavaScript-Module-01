document.write("Exercise 7<br><br>");


let sum_of_dices = 0;

number_of_dice = parseInt(prompt("The number of dice rolls: "));

for (var i = 0; i < number_of_dice; i++) {
    dice = Math.floor(Math.random() * 6 + 1);
    document.write("You got: ", dice, "<br>");
    sum_of_dices += dice;
}
document.write("Total: " + sum_of_dices , "<br>");