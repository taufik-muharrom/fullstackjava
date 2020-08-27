let today = new Date();
  let date_today = `${today.getDate()} - ${today.getDay()} - ${today.getFullYear()}`
  document.getElementById('date_today').innerText= date_today;

  let dataLocStorOp2 = localStorage.getItem("pendapatan_op2");
  let ambilDataOp2 = JSON.parse(dataLocStorOp2);
  document.getElementById('income_op2').innerText= ambilDataOp2;

  viewTable();

  function viewTable (){
    let dataLocStorOp2 = localStorage.getItem("data_parkingout2");
    parkingout2 = JSON.parse(dataLocStorOp2);

    
    parkingout2.forEach((data,index) =>{
 
        document.getElementById("data_op2").innerHTML += `
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