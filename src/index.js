import foodHelpers from "./helpers";
import food from "./foods"

const randomFood = foodHelpers.random(food)

console.log(`I’d like one ${randomFood}, please.`)
console.log(`Here you go: ${randomFood}`)
console.log('Delicious! May I have another?')

const newFood = foodHelpers.remove(food, randomFood)

console.log(`I’m sorry, we’re all out. We have ${newFood.length} left`)
