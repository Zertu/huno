// 463. Island Perimeter You are given a map in form of a two-dimensional
// integer grid where 1 represents land and 0 represents water. Grid cells are
// connected horizontally/vertically (not diagonally). The grid is completely
// surrounded by water, and there is exactly one island (i.e., one or more
// connected land cells). The island doesn't have "lakes" (water inside that
// isn't connected to the water around the island). One cell is a square with
// side length 1. The grid is rectangular, width and height don't exceed 100.
// Determine the perimeter of the island. Example: [[0,1,0,0],  [1,1,1,0],
// [0,1,0,0],  [1,1,0,0]] Answer: 16

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 0) continue  
                if (i == 0 || grid[i - 1][j] == 0) count++  
                if (i == grid.length - 1 || grid[i + 1][j] == 0) count++  
                if (j == 0 || grid[i][j - 1] == 0) count++  
                if (j == grid[i].length - 1 || grid[i][j + 1] == 0) count++  
        }
    }
    return count
}
function drawpicture(arr?) {
    let temp = []
    for (let j = 0; j < arr.length; j++) {
        for(let k =0;k<arr[j].length;k++){
            temp.push(arr[j][k])
        }
    }
    let box = document.getElementsByClassName('box')[0]
    for (let i = 0; i < box.childElementCount; i++) {
        if (temp[i] ==1) {
            box.children[i].className='color'
        }
    }
}

drawpicture([[1])