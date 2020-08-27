let id_old ="";

function tambahinput(){

    var tampung_data ={};

    let id = document.getElementById('id').value;
    let nama = document.getElementById('nama').value;
    let keperluan = document.getElementById('keperluan').value;
    let pic = document.getElementById('pic').value;

    tampung_data [id]= {
        id : id ,
        nama : nama,
        keperluan : keperluan,
        pic : pic ,
    }

    let id_new = id;

    while(id!="" && nama!="" && keperluan !="" && pic!=""){
        
        while( id_new != id_old ){
            Object.values(tampung_data).map((person) =>{
                document.getElementById("data1").innerHTML += `
                   <tr>
                       <td>${person.id}</td>
                       <td>${person.nama}</td>
                       <td>${person.keperluan}</td>
                       <td>${person.pic}</td>
                   </tr>
               `  
    
                id_old = person.id;
              
               }
               
           ); 
           document.getElementById("form").reset();
        break
        }
       break
    }
    document.getElementById("form").reset();
    
    
}
