
// generate code
function genCode() {
    return parseInt(Date.now() + Math.random()*Math.pow(2,4));
}

//////////////////////////////////////LOGIN1///////////////////////////////////////////
let total_car1 = 1;
let total_motorcycle1 = 1;

login1 =()=>{
    
    let license_plate = document.getElementById("parking_1").value;
    let localStorageData1 = localStorage.getItem('data_parking1');
    let getDataParking1 = JSON.parse(localStorageData1);

    if ( getDataParking1 != null ){
        let checkData = getDataParking1.some((item)=>{
            return license_plate == item.license_plate;
        })

        console.log(checkData);

        if (checkData){
            alert("License Plate is Exis!");
            document.getElementById("parking_1").value = '';
        }
        else{
            gateIn1();
        }
    }
    else {
        gateIn1();
    }
    
}


function gateIn1 (){

    let total_car1 = 1;
    let total_motorcycle1 = 1;

   let license_plate = document.getElementById("parking_1").value;
   let vehicle1 = document.getElementById('vehicle1').value;

   if (vehicle1 == "car"){
    localStorage.setItem("total_car_p1", JSON.stringify(total_car1++))
   }
   if(vehicle1 == "motorcycle"){
    localStorage.setItem("total_motorcycle_p1",JSON.stringify(total_motorcycle1++))
   }


   let today = new Date();
   let currentDate1 = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
   let currentTime1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   console.log(currentTime1);
   let totalTime = (today.getHours()*3600)+(today.getMinutes()*60)+today.getSeconds();
   console.log(totalTime);

   let parking_1 = {};
   parking_1.gen_code = genCode();
   parking_1.vehicle = vehicle1;
   parking_1.license_plate = license_plate;
   parking_1.date_entry = currentDate1;
   parking_1.time_of_entry = currentTime1;
   parking_1.total_time = totalTime;
   
   let dataLocalStorage = localStorage.getItem("data_parking1");
   
   if(dataLocalStorage == null){
      arrayParking = [];
   }
   else{
      arrayParking = JSON.parse(dataLocalStorage);
   }
   arrayParking.push(parking_1);
   localStorage.setItem("data_parking1", JSON.stringify(arrayParking));
   document.getElementById("parking_1").value = '';
}


//////////////////////////////////////LOGIN2///////////////////////////////////////////

let total_car2 = 2;
let total_motorcycle2 = 1;

login2 =()=>{

    let license_plate = document.getElementById("parking_2").value;
    let localStorageData2 = localStorage.getItem('data_parking2');
    let getDataParking2 = JSON.parse(localStorageData2);

    if ( getDataParking2 != null ){
        let checkData = getDataParking2.some((item)=>{
            return license_plate == item.license_plate;
        })

        console.log(checkData);

        if (checkData){
            alert("License Plate is Exis!");
            document.getElementById("parking_2").value = '';
        }
        else{
            gateIn2();
        }
    }
    else {
        gateIn2();
    }


}

function gateIn2 (){
    
    let license_plate = document.getElementById("parking_2").value;

     let vehicle2 = document.getElementById('vehicle2').value;
     if (vehicle2 == "car"){
      localStorage.setItem("total_car_p2", JSON.stringify(total_car2++))
     }
     else if(vehicle2 == "motorcycle"){
      localStorage.setItem("total_motorcycle_p2",JSON.stringify(total_motorcycle2++))
     }

   let today = new Date();
   let currentDate2 = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
   let currentTime2 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   console.log(currentTime2);
   let totalTime = (today.getHours()*3600)+(today.getMinutes()*60)+today.getSeconds();
   console.log(totalTime);


   let parking_2 = {};
   parking_2.gen_code = genCode();
   parking_2.vehicle = vehicle2;
   parking_2.license_plate = license_plate;
   parking_2.date_entry = currentDate2;
   parking_2.time_of_entry = currentTime2;
   parking_2.total_time = totalTime;

   let dataLocalStorage = localStorage.getItem("data_parking2");
   
   if(dataLocalStorage == null){
      arrayParking = [];
   }
   else{
      arrayParking = JSON.parse(dataLocalStorage);
   }
   arrayParking.push(parking_2);
   localStorage.setItem("data_parking2", JSON.stringify(arrayParking));
   document.getElementById("parking_2").value = '';
}

