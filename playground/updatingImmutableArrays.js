const meals = [
    { id: 1, description: "Breakfast", calories: 420},
    { id: 2, description: "Lunch", calories: 520},
];

const meal = {
    id: 3,
    description: "Snack",
    calories: 180,
};

const updatedMeals = [...meals, meal];
//console.log(meals, updatedMeals);

/* Map Function */
// array.map(fn)

const numbers = [1, 2, 3];
function double(number) {
    return number * 2;
}

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);