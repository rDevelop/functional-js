/*
Filter
 - what to remove / keep
 */

const meals = [
    { id: 1, description: "Breakfast", calories: 420},
    { id: 2, description: "Lunch", calories: 520},
];

const meal = {
    id: 3,
    description: "Snack",
    calories: 180,
};

const updatedMeals = [...meals, meal]
console.log("MEALS, UPDATED MEALS");
console.log(meals, updatedMeals);
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
console.log("Updated with map....")
console.log(updatedMealDescription);
// Filter
// to remove
const filteredMeals = updatedMeals.filter(function(meal) {
    return meal.id !== 1
});
console.log("Filtered....")
console.log(filteredMeals);