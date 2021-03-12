// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return []
    let out = []
    for (let i = 0; i < matrix.length; i++) {
        i % 2 === 0 ? out.push(...matrix[i]) : out.push(...matrix[i].reverse())
    }
    return out
}