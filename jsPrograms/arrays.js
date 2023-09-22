// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin());
// console.log(array1);
// // Expected output: Array ["d", "b", "c", "d", "e"]

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// // Expected output: Array ["d", "d", "e", "d", "e"]


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]

// console.log(words);


const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // Expected output: true



console.log(array.some((elt)=>elt%2==2));