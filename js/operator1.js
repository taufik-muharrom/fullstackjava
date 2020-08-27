let today = new Date();
  let date_today = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
  document.getElementById('date_today').innerText= date_today;

  let dataLocStorOp1 = localStorage.getItem("pendapatan_op1");
  let ambilDataOp1 = JSON.parse(dataLocStorOp1);
  document.getElementById('income_op1').innerText= ambilDataOp1;

  viewTable();

  function viewTable (){
    let dataLocStorOp1 = localStorage.getItem("data_parkingout1");
    parkingout1 = JSON.parse(dataLocStorOp1);

    
    parkingout1.forEach((data,index) =>{
 
        document.getElementById("data_op1").innerHTML += `
        <tr>
            <td>${index+=1}</td>
            <td>${data.date_in}</td>
            <td>${data.vehicle}</td>
            <td>${data.license_plate}</td>
            <td>${data.time_in}</td>
            <td>${data.time_out}</td>
            <td>${data.income}</td>
        </tr>
        `  
    });

    
    
   
}