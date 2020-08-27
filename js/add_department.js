       
  function checkCondition(){
   let addDept = document.getElementById("add_department").value;
   dataLocalStorage = localStorage.getItem("data_department");
   let objDept = JSON.parse(dataLocalStorage);
   console.log('hasil objDept '+objDept);
        // console.log(objDept[i]);
      let memDept = objDept.filter(function(z){
         return z == addDept;
      });
      console.log('hasil memDept '+memDept);
      console.log('length '+memDept.length);
      if (memDept.length == 0){
         addDepartment();
      }
      else {
         alert ('DEPARTMENT IS ALREADY EXIS!');
         document.getElementById("add_department").value = '';
      }
  }

   function addDepartment() {

      let addDept = document.getElementById("add_department").value;
      let dataLocalStorage = localStorage.getItem("data_department");

      if(dataLocalStorage == null){
         objDept = [];
      }
      else{
         objDept = JSON.parse(dataLocalStorage);
      }
      objDept.push(addDept);
      localStorage.setItem("data_department", JSON.stringify(objDept));
      document.getElementById("add_department").value = '';
  }
  
  
   
