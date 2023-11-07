export function cloneArraysDifPointers (...arrays) {
    if (arrays.length === 1) {
        return Array.from(arrays[0])
    } else if (arrays.length > 1) {
        var newArrays = Array(arrays.length)
        for (var eachArray = 0; eachArray < arrays.length; eachArray++){
            newArrays[eachArray] = Array.from(arrays[eachArray])
        }
        return newArrays
    }
}
export function convertIndexToArrayIndex (index) {
    return index.split(',')
}
export function isValidIndex (row, col, board) {
    return row >= 0 && row < board.length && col >= 0 && col < board[row].length;
}
export function saveOnJSON (time) {
    var secs = (60 * time[0]) + time[1]
    var name = "Nombre1"

    var datos = {
        Name : name,
        Secs : secs
    }
    const datosJSON = JSON.stringify(datos, null, 2);
    console.log(datosJSON)
}
