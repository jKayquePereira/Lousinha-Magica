const container = document.querySelector(".container")

function createGrid(size = 16) {
    const grid = document.createElement("div")
    grid.classList.add("grid")
    container.innerHTML = ''
    container.appendChild(grid)

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

function gridSize() {
    const input = document.createElement("input")
    input.classList.add("inputGridSize")
    input.type = "number"
    input.min = "2"
    input.max = "100"
    input.placeholder = "Tamanho da grade"
    document.body.appendChild(input)

    input.addEventListener("change", () => {
        const gridSize = parseInt(input.value, 10)

        if (!isNaN(gridSize) && gridSize > 0) {
            createGrid(gridSize)
        } else {
            alert("Insira um número válido.")
        }
    })
}

gridSize()