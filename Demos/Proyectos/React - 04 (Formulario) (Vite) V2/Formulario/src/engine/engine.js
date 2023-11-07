export const getArrayExceptIncluded = (Array, checkIsIncluided) => {
    var arrayWithoutTheIncluded = [];
    for (var i = 0; i < Array.length; i++) if (Array[i].includes(checkIsIncluided) == false) arrayWithoutTheIncluded.push(Array[i]);
    return arrayWithoutTheIncluded;
}