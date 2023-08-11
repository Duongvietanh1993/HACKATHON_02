let arr=[]
let numberOfElements=parseInt(prompt("Nhập vào số lượng phần tử cho mảng"))
for (let i = 0; i < numberOfElements; i++) {
    let element = parseInt(prompt(`Nhập vào phần tử thứ ${i} của mảng`))
    arr.push(element)
}
console.log(`Mảng ban đầu là: ${arr}`)

// Cách 1 dùng hàm sort()
arr.sort(function(a, b) {
    return b - a;
});
console.log("================Dùng hàm sort()====================")
console.log(`Mảng sau khi được sắp xếp theo thứ tự giảm dần là: ${arr}`);


// Cách 2 không dùng hàm soft()
function arrangeNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

arrangeNumber(arr);
console.log("================ Không dùng hàm sort()====================")
console.log(`Mảng sau khi được sắp xếp theo thứ tự giảm dần là: ${arr}`);