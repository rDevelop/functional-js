// Summarize data in an array
const grades = [69, 77, 81, 51, 99, 89, 92, 94];


/*
const numbers = [1, 2, 3];
function sum(x, y) {
    return x + y;
}
// 3rd and further elements use the accumulator value
const total = numbers.reduce(sum);
// using a second parameter on reduce uses that as starter accumulator value.
const total2 = numbers.reduce(sum, 5);
console.log(total, total2);
*/



const total = grades.reduce(sum);
function sum(acc, grade) {
    return acc + grade;
}

const count = grades.length;

const letterGradeCount = grades.reduce(groupedByGrade, {});

function groupedByGrade(acc, grade) {
    const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc;
    console.log("acc:", acc);
    if(grade >= 90 ) {
        return { ...acc, a: a + 1};  // return an object that is the spread of acc but increment a by 1
    } else if (grade >= 80) {
        return { ...acc, b: b + 1};
    } else if (grade >= 70) {
        return { ...acc, c: c + 1};
    } else if (grade >= 60) {
        return { ...acc, d: d + 1};
    } else {
        return {...acc, f: f + 1};
    }

}

console.log(total, total/ count, letterGradeCount);
