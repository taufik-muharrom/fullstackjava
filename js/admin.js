
let today = new Date();
let date_today = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
document.getElementById('date_today').innerText= date_today;

///////////////////////////TOTAL INCOME////////////////////////////////

let dataLocStorOp1 = localStorage.getItem("pendapatan_op1");
let ambilDataOp1 = JSON.parse(dataLocStorOp1);
document.getElementById('income_op1').innerText= Math.floor(ambilDataOp1);

let dataLocStorOp2 = localStorage.getItem("pendapatan_op2");
let ambilDataOp2 = JSON.parse(dataLocStorOp2);
document.getElementById('income_op2').innerText= Math.floor(ambilDataOp2);

///////////////////////TOTAL VEHICLE OPERATOR 1////////////////////////

let dataLocStorCar1 = localStorage.getItem("total_car_p1");
let getDataCar1 = JSON.parse(dataLocStorCar1);

let dataLocStorMotor1 = localStorage.getItem("total_motorcycle_p1");
let getDataMotor1 = JSON.parse(dataLocStorMotor1);

///////////////////////TOTAL VEHICLE OPERATOR 2////////////////////////

let dataLocStorCar2 = localStorage.getItem("total_car_p2");
let getDataCar2 = JSON.parse(dataLocStorCar2);

let dataLocStorMotor2 = localStorage.getItem("total_motorcycle_p2");
let getDataMotor2 = JSON.parse(dataLocStorMotor2);

///////////////////////TOTAL INCOME OPERATOR 1////////////////////////

let dataIncomeCar1 = localStorage.getItem("pendapatan_mobil1");
let getIncomeCar1 = JSON.parse(dataIncomeCar1);

let dataIncomeMotor1 = localStorage.getItem("pendapatan_motor1");
let getIncomeMotor1 = JSON.parse(dataIncomeMotor1);

///////////////////////TOTAL INCOME OPERATOR 2////////////////////////

let dataIncomeCar2 = localStorage.getItem("pendapatan_mobil2");
let getIncomeCar2 = JSON.parse(dataIncomeCar2);

let dataIncomeMotor2 = localStorage.getItem("pendapatan_motor2");
let getIncomeMotor2 = JSON.parse(dataIncomeMotor2);



document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('vehicle', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Data Vehicle'
        },
        xAxis: {
            categories: ['Car', 'Motorcycle']
        },
        yAxis: {
            title: {
                text: 'Total'
            }
        },
        series: [{
            name: 'Operator 1',
            data: [getDataCar1, getDataMotor1]
        }, {
            name: 'Operator 2',
            data: [getDataCar2, getDataMotor2]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('income', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Data Income'
        },
        xAxis: {
            categories: ['Car','Motorcycle']
        },
        yAxis: {
            title: {
                text: 'Rupiah'
            }
        },
        series: [{
            name: 'Operator 1',
            data: [getIncomeCar1, getIncomeMotor1]
        }, {
            name: 'Operator 2',
            data: [getIncomeCar2, getIncomeMotor2]
        }]
    });
});

// var chart1; // globally available
//     document.addEventListener('DOMContentLoaded', function() {
//         chart1 = Highcharts.stockChart('container', {
//             rangeSelector: {
//                 selected: 1
//             },
//             series: [{
//                 name: 'USD to EUR',
//                 data: usdtoeur // predefined JavaScript array
//            }]
//        });  
//     });




