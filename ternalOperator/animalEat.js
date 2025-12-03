
var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore);
 * - (false, false, undefined)
 */

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);

console.log(category);

if (eatsPlants) {
    if (eatsAnimals) {
        // (true, true)
        category = "omnivore";
    } else {
        // (true, false)
        category = "herbivore";
    }
} else {
    if (eatsAnimals) {
        // (false, true)
        category = "carnivore";
    } else {
        // (false, false)
        category = "undefined";
    }
}