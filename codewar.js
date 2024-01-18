// const multiplicationTable = (size) => {
//     let arr = []
//     Array(size).fill(Array(size).fill(size)).forEach((element, index) => arr.push(element.map((item, i) => (i + 1) * (index + 1))))

//     return arr
// }
// console.log(multiplicationTable(3));
//---------------------------------------------------------------

// const encryptThis = (text) => {
//     return text.split(' ').map((item) => {


//         let arr = item.replace(item[0], item.charCodeAt()).replace(item[1], item[item.length - 1]);

//         return item.length > 2 ? `${arr.slice(0, -1)}${item[1]}` : arr
//     }).join(' ')
// }
// console.log(encryptThis("The more he saw the less he spoke"));
//-----------------------------------------------------

//[-3, -2, -1], 2

