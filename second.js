let marqqs = 89;
if (mar % 2 === 0) {
    console.log("the number is even");
}
else {
    console.log("the number is odd");
}

let mar = 72;
let gpa = 0;
if (mar > 85) {
    gpa = 4;
}
else if (mar >= 70 && mar < 85) {
    gpa = 3.5;
}
else if (mar >= 65 && mar < 70) {
    gpa = 3;
}
else if (mar >= 50 && mar < 65) {
    gpa = 3.5;
}
else if (mar >= 33 && mar < 50) {
    gpa = 3.5;
}
else {
    gpa = 0;
}
console.log(`congrats you got ${gpa} GPA in your programming subject`);



// ternanry operator
let myAge = 60;
(myAge >= 18 && myAge < 50) ? console.log("you are adult") : (myAge > 50) ? console.log("you are too old") : console.log("you are not adult");



// switch statemen

let num1 = 8;
let num2 = 2;
let op = '/';
let total = 0;

switch (op) {
    case '+':
        total = num1 + num2;
        break;
    case '-':
        total = num1 - num2;
        break;
    case '/':
        total = num1 / num2;
        break;
    case '*':
        total = num1 * num2;
        break;
    case '%':
        total = num1 % num2;
        break;
}
console.log("The total result is " + total + " of the " + num1 + " and " + num2);




// Loops

// for loop
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    let num1, num2, num3, num4;
    num1 = 'five';
    num2 = 'ten';
    num3 = 'fiften';
    num4 = 'twenety';

    if (i === 5) {
        console.log(num1);
    }
    else if (i === 10) {
        console.log(num2);
    }
    else if (i === 15) {
        console.log(num3);
    }
    else if (i === 20) {
        console.log(num4);
    }
    if (i != 5 && i != 10 && i != 15 && i != 20)
        console.log(i);
}


const data = {
    name: 'qasim haleem',
    age: 20,
    occupation: 'full stac developer',
    gpa: 3.83,
    ispass: true,
    freinds: ["hamza", "waqas", "adeel"],
    adderss: {
        city: "thall",
        country: "pakistan",
        thihsel: "thall"
    }

}


//accessing data from the given object

if (data.ispass === true) {
    for (let i = 0; i < 3; i++) {
        console.log(data.freinds[i]);
    }
}



const students = [
    //first object
    {
        name: "qasim haleem",
        age: 20,
        occupation: "full stac developer",
        gpa: 3.83,
        ispass: true,
        freinds: ["hamza", "waqas", "adeel"],
        adderss: {
            city: "thall",
            country: "pakistan",
            thihsel: "thall"
        }
    },

    // second object
    {
        name: "adeel ahmad",
        age: 25,
        occupation: "senior developer",
        gpa: 3.23,
        ispass: true,
        freinds: ["hassan", "sudais", "farooq"],
        adderss: {
            city: "swabi",
            country: "pakistan",
            thihsel: "shwa"
        }
    },

    //third object
    {
        name: "hamza",
        age: 23,
        occupation: "project manager",
        gpa: 2.4,
        ispass: false,
        freinds: ["sami", "safdar", "altaf"],
        adderss: {
            city: "dargai",
            country: "pakistan",
            thihsel: "swat"
        }
    }

]




console.log(students[2].name);
console.log(students[1].adderss.thihsel);


for (let i = 0; i < 3; i++) {
    if (students[i].ispass === false) {
        console.log(students[i].adderss.thihsel);
    }
}