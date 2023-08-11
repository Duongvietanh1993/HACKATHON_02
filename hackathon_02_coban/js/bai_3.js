function calculateNumberOfDay(month, year) {
    let lastDayOfTheMonth= new Date(year,month,0);
    let numberOfDay=lastDayOfTheMonth.getDate();
    return numberOfDay;
}

let month = parseInt(prompt("Nhập vào số tháng: "));
let year = parseInt(prompt("Nhập vào số năm: "));

let numberOfDaysInTheMonth = calculateNumberOfDay(month, year);
console.log(`Số ngày trong tháng ${month} năm ${year} là: ${numberOfDaysInTheMonth}`);