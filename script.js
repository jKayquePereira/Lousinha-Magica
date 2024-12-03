const containerEl = document.querySelector(".container")

function createGrid(size) {
    const grid = document.createElement("div")
    grid.classList.add("grid")
    containerEl.appendChild(grid)
    grid.innerHTML = ''

    const cellSize = 100 / size

    if (size > 100 || size < 2) {
        size = 16
    }

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div")

        cell.style.flex = `0 0 ${cellSize}%`
        cell.style.height = `${cellSize}%`
        cell.classList.add("cell")
        grid.appendChild(cell)
    }
}

createGrid(16)

