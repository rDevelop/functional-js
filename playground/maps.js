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

const updatedMealDescription = updatedMeals.map(updatedDescription);

function updatedDescription(meal) {
    if(meal.id === 2) {
        return {
            ...meal,
            description: "Early Lunch",
        };
    }
    return meal;
}
console.log(updatedMealDescription);


const numbers = [1, 2, 3];
function double(number) {
    return number * 2;
}

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);

