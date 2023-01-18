// Question 1  

function studentWithHighestMarks(array) {
    let highestMarks = 0;
    let highestStudent = "";

    array.forEach((student) => {
        let totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
        if (totalMarks > highestMarks) {
            highestMarks = totalMarks;
            highestStudent = student.name;
        }
    });

    return highestStudent;
}


let student = [{ name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];


console.log(studentWithHighestMarks(student));  //Geri



// Question 2
let array = [20, -2, 4, -11, 0, 25]


let minimumValue = array.reduce(function (acc, cV) {
    return acc < cV ? acc : cV;
}, Infinity);


console.log(minimumValue);   //-11



// Question 3
function lengthOfString(string) {
    let arr = string.split("");
    return arr.length;

}

let strName = "helloworld";
console.log(lengthOfString(strName)); //10
