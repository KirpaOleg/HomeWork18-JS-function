Task1
const arr = [56, 6, 3, 88, 23, -11]; 

const changePlase = (index1, index2) => {
	let place = [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
	console.log(place);
}

changePlase(2, 4);
console.log(arr);


Task2
const arr1 = [56, 6, 3, 88, 23, -11]; 

const shiftElem = (index, ahead) => {
  let elem = arr1[index];
	let vectorright = arr1.length - 1;
	let vectorleft = 0;
		if (ahead === 'right') {
			(arr1[index + 1] = elem);

		 } else if (ahead === 'left') {
			(	elem = arr1[index - 1]);

		}
			 console.log(elem, vector);
 }



shiftElem(3, 'left');
console.log(arr1);





// const calc = (a, b) => {
// let a = 33;
// let b = 2.5;
// let result = a * b / 100;
// }
// console.log(result);
// let percent1 = calc(33, 2.5);
// let percent2 = 100 - percent1;


	// const discr = (a, b, c) => {
	//   return [x1, x2];
	// }

	// const kvUravn = (a, b, c) => {
	//   const d = discr(a, b, c);
	//   let x1;
	//   let x2;
	// 	let d = b * b - 4 * a * c;
	//   if (d > 0) {
	//     //
	//     x1 = (-b + Math.sqrt(d)) / (2 * a);
	//     x2 = (-b - Math.sqrt(d)) / (2 * a);
	//   } else if (d === 0) {
	//     //
	//     x1 = -b / (2 * a);
	//     x2 = x1;
	//   } else {
	//     return null;
	//   };
	//   return [x1, x2];
	// }

	// console.log(kvUravn(12, 56, -10));

// const arrArr = [
//   [1, 5, 6], 
//   [4, 6, 7], 
//   [9, 6, 3], 
//   [3, 7, 4, 2, 6], 
//   [3, 55]
// ];


// const outArr = [];

// arrArr.forEach(elArr => {
// 	for (let i = 0; i < 5; i++) {
// 		if (element[i] === undefined) {
// 			element[i] = 0
// 	});
// });


// const arr1 = [1, 5];
// 	for (let i = 0; i < 5; i++) {
// 		if (arr1[i] > 0){
// 	} else {
// 		arr1.push(0);
// 	}		
// }
// console.log(arr1);
