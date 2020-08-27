
viewTable();

function viewTable (){
    let employeesRecord = localStorage.getItem("data_employee");
    employee = JSON.parse(employeesRecord);
    employee.forEach((data,index) =>{
 
        document.getElementById("table_data").innerHTML += `
        <tr>
            <td>${index+=1}</td>
            <td>${data.fullname}</td>
            <td>${data.address}</td>
            <td>${data.birthday}</td>
            <td>${data.email}</td>
            <td>${data.phonenumber}</td>
            <td>${data.department}</td>
            <td>
              
            <button class="btn btn-sm btn-danger" onClick="deleteMemberData(${index-=1})">Delete</button>           
            </td>
        </tr>
        `  
    });
}

function deleteMemberData(index){
    let dataLocalStorage = localStorage.getItem("data_employee");
    let objEmployee = JSON.parse(dataLocalStorage);
    let confirmBox = confirm("Are you sure to delete this employee?");
    if (confirmBox==true){
        objEmployee.splice(index, 1);
        localStorage.setItem("data_employee", JSON.stringify(objEmployee));  
    } else {
        return;
    }
    window.location.reload(); 
}


function seachEmployee(){
    $(document).ready(function(){
        $("#member_search").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#table_data tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
}


