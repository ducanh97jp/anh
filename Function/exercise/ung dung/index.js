let arr = ["Sony Xperia", "Samsum Galaxy", "Nokia 6", "Xiaomi Redmi Note 4",
    "Apple Iphone 6S", "Xiaomi Mi 5s Plus", "Apple Iphone 8 Plus", "Fujitsu F-04E", "Oppo A71"];

const showProducts = (arr) => {
    let data = "<table cellpadding='7' width='50%'>" + "<tr>" + "<th style='text-align:left'>" + "Products" + "</th>"
        + "<th colspan='2' style='text-align:right'>" + "<p>" + arr.length + " produce</p>" + "</th>" + "</tr>";
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            data += "<tr>";
        } else {
            data += "<tr style='background-color: #dddddd'>";
        }
        data += "<td>" + arr[i] + "</td>"
            + "<td>" + "<button style='background-color: chartreuse' onclick='editProducts(" + i + ")'>Edit" + "</button>" + "</td>"
            + "<td>" + "<button style='background-color: red' onclick='deleteProducts(" + i + ")'>Delete" + "</button>" + "</td>";
        data += "</tr>";
    }
    data += "</table>";
    return data;
}
let data = showProducts(arr);
document.getElementById("div").innerHTML = data;
const add = () => {
    let value = document.getElementById("value").value;
    arr.push(value);
    document.getElementById("div").innerHTML = "";
    let data = showProducts(arr);
    document.getElementById("div").innerHTML = data;
}

const editProducts = (i) => {
    let revalue = prompt(" Nhap gia tri moi: ");
    arr[i] = revalue;
    document.getElementById("div").innerHTML = "";
    let data = showProducts(arr);
    document.getElementById("div").innerHTML = data;

}

const deleteProducts = (i) => {
    let last = arr.length - 1;
    let tam = arr[i];
    arr[i] = arr[last];
    for (let j = i; j < arr.length - 2; j++) {
        arr[j] = arr[j + 1];
    }
    arr[last] = tam;
    arr.pop();
    document.getElementById("div").innerHTML = "";
    let data = showProducts(arr);
    document.getElementById("div").innerHTML = data;
} 