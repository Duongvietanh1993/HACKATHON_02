let array=[]
let numberOfElements=parseInt(prompt("Nhập vào số lượng phần tử cho mảng"))
for (let i = 0; i < numberOfElements; i++) {
    let element = parseInt(prompt(`Nhập vào phần tử thứ ${i} của mảng`))
    array.push(element)
}
function findMax(arr) {
    return Math.max(...arr);
}

let maxNumber = findMax(array);
console.log(`Mảng ban đầu là: ${array}`)
console.log(`Giá trị lớn nhất của mảng được duyệt là: ${maxNumber}`);