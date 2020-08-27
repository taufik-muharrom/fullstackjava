    viewDepartment();
       
    function viewDepartment(){
        let dataEmployee = localStorage.getItem("data_employee");
        if(dataEmployee == null){
            arrayEmployee = [];
        }
        else{
            arrayEmployee = JSON.parse(dataEmployee);
        }

        let memberDepartment =[];

        for (let i=0;i<arrayEmployee.length;i++){

            let listDepartmentEmployee = (`${arrayEmployee[i].department}`);
            
            memberDepartment.push(listDepartmentEmployee);
            console.log(memberDepartment);
            localStorage.setItem("member_department", JSON.stringify(memberDepartment));
        }

        console.log(memberDepartment);
        let dataMemberDepartment = localStorage.getItem("member_department");
        let getMemberDepartement = JSON.parse(dataMemberDepartment);
        // console.log(getMemberDepartement);

        let dataLocalStorage = localStorage.getItem("data_department");
        let getDataDepartment = JSON.parse(dataLocalStorage);

        getDataDepartment.map((data,index) =>{
            
            let memDept = getMemberDepartement.filter(function(z){
                return z == (data);
            });
            
           document.getElementById("table_data_department").innerHTML += `
           <tr>
               <td>${index+=1}</td>
               <td>${data}</td> 
               <td>${memDept.length}  person</td>
               <td><button class="btn btn-sm btn-danger" onClick="deleteDepartment(${index-=1});">Delete</button></td>
           </tr>
           ` 
       });
       
       document.getElementById("table_data_department").innerHTML += `
       <tr>
       <td style ="text-align:center ">TOTAL</td>
       <td>${getDataDepartment.length}  division</td>
       <td colspan="2";>${arrayEmployee.length}  person</td>
       </tr>
       `
    }

    function deleteDepartment(index){
        let dataLocalStorage = localStorage.getItem("data_department");
        let objDept = JSON.parse(dataLocalStorage);
        // console.log(objDept);
        let confirmBox = confirm("Are you sure to delete this department?");
        if (confirmBox==true){
            objDept.splice(index, 1);
            localStorage.setItem("data_department", JSON.stringify(objDept));
            location.reload();
        } else {
            return;
        }
        
    }









        
        
    

    