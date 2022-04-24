//task1
var num1, num2, opt, result;

num1 = prompt("Enter 1st number");
num2 = prompt("Enter 2nd number");
opt = prompt("Enter operator");

switch (opt) {
    case '+':
        result = num1 + num2;
        alert("Addition: " + result)
        break;

    case '-':
        result = num1 - num2;
        alert("Subtraction: " + result)
        break;

    case '*':
        result = num1 * num2;
        alert("Multiply: " + result)
        break;

    case '/':
        result = num1 / num2;
        alert("Multiply: " + result)
        break;

    case '++':
        num1 = ++num1;
        num2 = ++num2;
        alert("Increment: " + num1 + " " + num2)
        break;

    case '--':
        num1 = --num1;
        num2 = --num2;
        alert("Decrement: " + num1 + " " + num2)
        break;

    case '%':
        result = num1 % num2;
        alert("Modulo: " + result)
        break;
}

//task2
var array = ["Banana", "Apples", "Oranges", "Blueberries"]
delete array[0];
console.log(array)

array.sort();
console.log(array)

array.push("Kiwi");
console.log(array)

delete array[0];
console.log(array);

array.reverse();
console.log(array)

//task 3
var reply;
reply = prompt("Alarm ringing \nPress S to snooze and D to dismiss");

if (reply == 'd' || reply == 'D') {
    console.log("Good morning");
}

else if(reply == 's' || reply == 'S'){
   Alarm();
}

else{
    console.log("Wrong input entered");
}

function Alarm() {

    reply = prompt("Alarm ringing \nPress S to snooze and D to dismiss");

    if (reply == 'd' || reply == 'D') {
        console.log("Good morning");
    }
    
    else if(prompt == 's' || prompt == 'S'){
        prompt("Alarm ringing \nPress S to snooze and D to dismiss");
    }
    
}

//task 4

var persondetails = {
    username: "Abdullah",
    password: "Abdullah123"
  };

document.writeln("<br><b>UserName Object: </b>"+persondetails.username +'<br>')
document.writeln("<b>Password Object: </b>"+persondetails.password +'<br>')
document.write("<br><b>2)Array</b> <br>"); 

var database=[persondetails]

document.writeln("<br>"+ database[0].username +"<br>")
document.writeln( database[0].password +"<br>")


var newsfeed=[{
    usernmae:'Abdullah',
    timeline:'Active'
},
{
    usernmae:'Alina',
    timeline:'Not Active'
},
{
    usernmae:'huzaifa',
    timeline:'Active'
}]

document.write("<br><b>3)Array Of An Object</b> <br>");
document.write("UserName: "+newsfeed[0].usernmae +"<br>"+ "TimeLine: "+newsfeed[0].timeline+"<br> <br>")
document.write("UserName: "+newsfeed[1].usernmae +"<br>"+ "TimeLine: "+newsfeed[1].timeline+"<br><br> ")
document.write("UserName: "+newsfeed[2].usernmae +"<br>"+ "TimeLine: "+newsfeed[2].timeline+"<br><br>")
