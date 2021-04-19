import { onSnake, expandSnake } from "./snake.js"
import { newGridPosition } from "./grid.js"
let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function update(){
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
} 

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.x
    foodElement.style.gridColumnStart = food.y
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = newGridPosition()
    }
    return newFoodPosition
}
