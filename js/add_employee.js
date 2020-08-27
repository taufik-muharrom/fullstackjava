optionDepartment();
objEmployee= document.getElementById('gender').value;
console.log(objEmployee);
function addEmployee() {

    let objEmployee = {};
    objEmployee.fullname = document.getElementById('fullname').value;
    objEmployee.address = document.getElementById('address').value;
    objEmployee.birthday = document.getElementById('birthday').value;    
    objEmployee.email = document.getElementById('email').value;
    objEmployee.phonenumber = document.getElementById('phonenumber').value;
    objEmployee.department = document.getElementById('department').value;
    objEmployee.id = idEmp();

    let dataLocalStorage = localStorage.getItem("data_employee");
        if(dataLocalStorage == null){
            arrayEmployee = [];
        }
        else{
            arrayEmployee = JSON.parse(dataLocalStorage);
        }
    
    
    arrayEmployee.push(objEmployee);
	// console.log(objDept);
    localStorage.setItem("data_employee", JSON.stringify(arrayEmployee));

    // // Designation
    // let name_designation = document.getElementById('fullname').value;
    // let dataDesignation = localStorage.getItem("data_designation");
    //     if(dataDesignation == null){
    //         arrayDesignation = [];
    //     }
    //     else{
    //         arrayDesignation = JSON.parse(dataDesignation);
    //     }
    
    
    // arrayDesignation.push(name_designation);
	// // console.log(objDept);
    // localStorage.setItem("data_designation", JSON.stringify(arrayDesignation));
    // document.getElementById("input_form").reset();

}

function idEmp() {
    return parseInt(Date.now() + Math.random());
}

function optionDepartment(){
   let dataLocalStorage = localStorage.getItem("data_department");
   objDept = JSON.parse(dataLocalStorage);
   Object.values(objDept).forEach((data) =>{
        document.getElementById("department").innerHTML +=
       `<option>${data}</option>`
       });
       
}




