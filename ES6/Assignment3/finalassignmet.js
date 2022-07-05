var Products = [
    {productId:"1",productName:"Apple",CategoryName:"smartphone", Price:900000, Manufacturer:"Apple Company"},
    {productId:"2",productName:"Samsung",CategoryName:"smartphone", Price:20000, Manufacturer:"Samsung Company"},
    {productId:"3",productName:"Lg",CategoryName:"Tablet", Price:400000, Manufacturer:"Lg Company"},
    {productId:"4",productName:"OnePlus",CategoryName:"5GPhone", Price:300000, Manufacturer:"OnePlus Company"},
    {productId:"5",productName:"Gio",CategoryName:"smartphone", Price:80000, Manufacturer:"Gio Company"},
    {productId:"6",productName:"Lava",CategoryName:"smartphone", Price:50000, Manufacturer:"Lava Company"},
    {productId:"7",productName:"Panasonic",CategoryName:"KeyPad", Price:60000, Manufacturer:"Panasonic Company"},
    {productId:"8",productName:"Motorola",CategoryName:"KeyPad", Price:55000, Manufacturer:"Motorola Company"},
    {productId:"9",productName:"LG",CategoryName:"smartphone", Price:90000, Manufacturer:"LG Company"},
    {productId:"10",productName:"Mi",CategoryName:"smartphone", Price:50000, Manufacturer:"Mi Company"},

    {productId:"11",productName:"Apple",CategoryName:"smartphone", Price:900000, Manufacturer:"Apple Company"},
    {productId:"12",productName:"Samsung",CategoryName:"smartphone", Price:20000, Manufacturer:"Samsung Company"},
    {productId:"13",productName:"Lg",CategoryName:"Tablet", Price:500000, Manufacturer:"Lg Company"},
    {productId:"14",productName:"OnePlus",CategoryName:"5GPhone", Price:600000, Manufacturer:"OnePlus Company"},
    {productId:"15",productName:"Gio",CategoryName:"smartphone", Price:700000, Manufacturer:"Gio Company"},
    {productId:"16",productName:"Lava",CategoryName:"smartphone", Price:80000, Manufacturer:"Lava Company"},
    {productId:"17",productName:"Panasonic",CategoryName:"KeyPad", Price:900000, Manufacturer:"Panasonic Company"},
    {productId:"18",productName:"Motorola",CategoryName:"KeyPad", Price:50000, Manufacturer:"Motorola Company"},
    {productId:"19",productName:"LG",CategoryName:"smartphone", Price:780000, Manufacturer:"LG Company"},
    {productId:"20",productName:"Mi",CategoryName:"smartphone", Price:680000, Manufacturer:"Mi Company"},

    {productId:"21",productName:"Apple",CategoryName:"smartphone", Price:670000, Manufacturer:"Apple Company"},
    {productId:"22",productName:"Samsung",CategoryName:"smartphone", Price:890000, Manufacturer:"Samsung Company"},
    {productId:"23",productName:"Lg",CategoryName:"Tablet", Price:900000, Manufacturer:"Lg Company"},
    {productId:"24",productName:"OnePlus",CategoryName:"5GPhone", Price:980000, Manufacturer:"OnePlus Company"},
    {productId:"25",productName:"Gio",CategoryName:"smartphone", Price:80000, Manufacturer:"Gio Company"},
    {productId:"26",productName:"Lava",CategoryName:"smartphone", Price:900000, Manufacturer:"Lava Company"},
    {productId:"27",productName:"Panasonic",CategoryName:"KeyPad", Price:450000, Manufacturer:"Panasonic Company"},
    {productId:"28",productName:"Motorola",CategoryName:"KeyPad", Price:670000, Manufacturer:"Motorola Company"},
    {productId:"29",productName:"LG",CategoryName:"smartphone", Price:120000, Manufacturer:"LG Company"},
    {productId:"30",productName:"Mi",CategoryName:"smartphone", Price:900000, Manufacturer:"Mi Company"},

    {productId:"31",productName:"Apple",CategoryName:"smartphone", Price:120000, Manufacturer:"Apple Company"},
    {productId:"32",productName:"Samsung",CategoryName:"smartphone", Price:340000, Manufacturer:"Samsung Company"},
    {productId:"33",productName:"Lg",CategoryName:"Tablet", Price:450000, Manufacturer:"Lg Company"},
    {productId:"34",productName:"OnePlus",CategoryName:"5GPhone", Price:20000, Manufacturer:"OnePlus Company"},
    {productId:"35",productName:"Gio",CategoryName:"smartphone", Price:600000, Manufacturer:"Gio Company"},
    {productId:"36",productName:"Lava",CategoryName:"smartphone", Price:900000, Manufacturer:"Lava Company"},
    {productId:"37",productName:"Panasonic",CategoryName:"KeyPad", Price:900000, Manufacturer:"Panasonic Company"},
    {productId:"38",productName:"Motorola",CategoryName:"Keypad", Price:800000, Manufacturer:"Motorola Company"},
    {productId:"39",productName:"LG",CategoryName:"smartphone", Price:200000, Manufacturer:"LG Company"},
    {productId:"40",productName:"Mi",CategoryName:"smartphone", Price:450000, Manufacturer:"Mi Company"},

    {productId:"41",productName:"Apple",CategoryName:"smartphone", Price:900000, Manufacturer:"Apple Company"},
    {productId:"42",productName:"Samsung",CategoryName:"smartphone", Price:600000, Manufacturer:"Samsung Company"},
    {productId:"43",productName:"Lg",CategoryName:"Tablet", Price:500000, Manufacturer:"Lg Company"},
    {productId:"43",productName:"Nokia",CategoryName:"smartphone", Price:670000, Manufacturer:"Nokia Company"},
    {productId:"44",productName:"OnePlus",CategoryName:"5GPhone", Price:900000, Manufacturer:"OnePlus Company"},
    {productId:"45",productName:"Gio",CategoryName:"smartphone", Price:900000, Manufacturer:"Gio Company"},
    {productId:"46",productName:"Lava",CategoryName:"smartphone", Price:300000, Manufacturer:"Lava Company"},
    {productId:"47",productName:"Panasonic",CategoryName:"KeyPad", Price:900000, Manufacturer:"Panasonic Company"},
    {productId:"48",productName:"Motorola",CategoryName:"Keeypad", Price:500000, Manufacturer:"Motorola Company"},
    {productId:"49",productName:"LG",CategoryName:"smartphone", Price:560000, Manufacturer:"LG Company"},
    {productId:"50",productName:"Mi",CategoryName:"smartphone", Price:450000, Manufacturer:"Mi Company"},
];

window.onload = function() {

    var tbody = document.getElementById("tbdy");
    for (var index = 0; index < Products.length; index++) {
        tbody.innerHTML += "<tr class='table-primary'><td>" + Products[index].productId + "</td><td>" + Products[index].productName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";
    }

    // for (let value of Object.values(arr)) {
    //     alert(value);
    // }
    var manId = document.getElementById("manId");
    manId.addEventListener('click', function() {
        var Objectt = createProductGroup(Products, 'Manufacturer');
        Products = [];
        for (let value of Object.values(Objectt)) {
            // alert(value);
            for (let product of value) {
                Products.push(product);
            }
        }
        // console.log(Products);
        var tbody = document.getElementById("tbdy");
        tbody.innerHTML = "";
        for (var index = 0; index < Products.length; index++) {
            tbody.innerHTML += "<tr class='table-primary'><td>" + Products[index].productId + "</td><td>" + Products[index].productName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";
        }

    }, false);

    var catId = document.getElementById("catId");
    catId.addEventListener('click', function() {
        var Objectt = createProductGroup(Products, 'CategoryName');
        Products = [];
        for (let value of Object.values(Objectt)) {
            for (let product of value) {
                Products.push(product);
            }
        }
        var tbody = document.getElementById("tbdy");
        tbody.innerHTML = "";
        for (var index = 0; index < Products.length; index++) {
            tbody.innerHTML += "<tr class='table-primary'><td>" + Products[index].productId + "</td><td>" + Products[index].productName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";
        }

    }, false);

    var searchBar = document.getElementById("searchBar");
    searchBar.addEventListener('change', function() {
        var searchText = searchBar.value;
        tbody.innerHTML = " ";
        if (searchText == "") {
            for (var index = 0; index < Products.length; index++) {
                tbody.innerHTML += "<tr class='table-primary'><td>" + Products[index].productId + "</td><td>" + Products[index].productName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";
            }
        } else {


            for (var index = 0; index < Products.length; index++) {
                if (Products[index].ProductName === searchText) {
                    tbody.innerHTML += "<tr class='table-primary'><td>" + Products[index].productId + "</td><td>" + Products[index].productName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";

                }
                if (Products[index].CategoryName === searchText) {
                    tbody.innerHTML += "<tr class='table-primary'><td>" + Products[index].productId + "</td><td>" + Products[index].productName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";

                }

                if (Products[index].Manufacturer === searchText) {
                    tbody.innerHTML += "<tr class='table-primary'><td>" + Products[index].productId + "</td><td>" + Products[index].productName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";

                }
            }
        }
    }, false);

}

function createProductGroup(records, property) {
    Products = [];
    let result = records.reduce((groupResult, record) => {
        let key = record[property];

        if (!groupResult[key]) {
            groupResult[key] = [];
        }
        groupResult[key].push(record);
        return groupResult;

    }, {});

    return result;
};