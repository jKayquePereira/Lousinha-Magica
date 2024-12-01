const containerEl = document.querySelector(".container")
function createGrid(num) {
    const numDefault = 16

    if (num > 100 || num < 2) {
        num = numDefault
    }

    for (i = 0; i < num * num; i++) {
        const grid = document.createElement("div")
        grid.classList.add("grid")
        containerEl.appendChild(grid)
    }
}

createGrid(16)