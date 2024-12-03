const container = document.querySelector(".container")

function createGrid(size = 16) {
    const grid = document.createElement("div")
    grid.classList.add("grid")
    container.appendChild(grid)
    grid.innerHTML = ''

    if (size > 100 || size < 2) {
        size = 16
    }

    const cellSize = 100 / size

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div")

        cell.style.flex = `0 0 ${cellSize}%`
        cell.style.height = `${cellSize}%`
        grid.appendChild(cell)
    }
}

createGrid()
