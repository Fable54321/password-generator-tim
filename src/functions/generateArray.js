const generateArray = (low,high) => {
    const array = [];

    for(let i = low; i <= high; i++) {
        array.push(i);
    }

    return array;
}

export default generateArray;