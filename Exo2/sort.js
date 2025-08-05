const helloWorld = () => {
    console.log("Hello World");
}

helloWorld();

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 2, 3, 5, 7, 11, 13]));