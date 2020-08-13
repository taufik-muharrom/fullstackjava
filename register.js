var no_urut = 0;
var tampung_nama = Array();

function tambahinput()
{
    tampung_nama[no_urut] = document.getElementById("daftar_tamu").value;
 alert( tampung_nama[no_urut] + " ditambahkan ke no " + no_urut);
 no_urut++;
 document.getElementById("daftartamu").value = "";

 let penampungan = "";   
    
   for (let y=0; y<tampung_nama.length; y++)
   {
     penampungan += "Pengunjung dengan no urut " + y + " adalah " + tampung_nama[y] + "<br/>";
   }
   document.getElementById("output").innerHTML = penampungan;
}

