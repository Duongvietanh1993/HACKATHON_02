let str = prompt("Nhập vào chuỗi muốn chuẩn hóa lại: ");
let arr = str.toLowerCase().trim().split("")
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (i == 0 && arr[i] != " ") {
        newArr.push(arr[i].toUpperCase())
        continue
    }
    if (arr[i] != " ") {
        if (arr[i - 1] == " ") {
            newArr.push(' ')
            newArr.push(arr[i].toUpperCase())
            i++
        }
        newArr.push(arr[i])
    }

}

console.log(newArr.join(""));
console.log(`Chuỗi ban đầu "${str}" sau khi chuẩn hóa lại là: ${newArr.join("")}`);