const containerEl = document.querySelector(".container")
function createGrid(size) {

    if (size > 100 || size < 2) {
        size = 16
    }

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div")
        grid.classList.add("grid")
        containerEl.appendChild(grid)
    }
}

createGrid(16)