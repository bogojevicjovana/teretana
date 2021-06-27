$(document).ready(function () {
    var id = localStorage.getItem('id');

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/odradjeni/prikazOdradjenih/" + id,
        dataType: "json",
        success: function (data) {
            console.log("SUCCESS : ", data);
            for (i = 0; i < data.length; i++) {
                var row = "<tr>";
                row += "<td>" + data[i]['id'] + "</td>";
                row += "<td>" + data[i]['naziv'] + "</td>";
                row += "<td>" + data[i]['opis'] + "</td>";
                row += "<td>" + data[i]['tipTreninga'] + "</td>";
                row += "<td>" + data[i]['trajanje'] + "</td>";
                $('#odradjeniTreninziClana').append(row);
            }
        },
        error: function (data) {
            alert("Greska");
            console.log("ERROR : ", data);
        }
    });
});

$(document).ready(function () {
    var id = localStorage.getItem('id');

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/odradjeni/prikazOdradjenihBezOcene/" + id,
        dataType: "json",
        success: function (data) {
            console.log("SUCCESS : ", data);
            for (i = 0; i < data.length; i++) {
                var row = "<tr>";
                row += "<td>" + data[i]['id'] + "</td>";
                row += "<td>" + data[i]['naziv'] + "</td>";
                row += "<td>" + data[i]['opis'] + "</td>";
                row += "<td>" + data[i]['tipTreninga'] + "</td>";
                row += "<td>" + data[i]['trajanje'] + "</td>";
                $('#odradjeniTreninziClanaBezOcene').append(row);
            }
        },
        error: function (data) {
            alert("Greska");
            console.log("ERROR : ", data);
        }
    });
});