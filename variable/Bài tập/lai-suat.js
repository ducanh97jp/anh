let loan = parseInt(prompt("số tiền vay la: "));
let interestRate = parseFloat(prompt("Lãi xuất phần trăm mỗi năm là: "));
let year = prompt("Số năm vay là: ");
let interest = ((loan * interestRate) / 100)*year;
interest += loan;

 
document.write("Số tiền phải trả là: " + interest );