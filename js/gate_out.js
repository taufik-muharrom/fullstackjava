//////////////////////////////EXIT 1//////////////////////////////////

let mobilJamPertama = 5000;
let mobilJamKedua = 3000;
let motorJamPertama = 3000;
let motorJamKedua = 1000;
let pendapatan1 = 0;
let pendapatan2 = 0;
let pendapatan_mobil1 = 0;
let pendapatan_mobil2 = 0;
let pendapatan_motor1 = 0;
let pendapatan_motor2 = 0;
let bayar1,
	bayar2 = 0;

selectCode1();

logout1 = () => {
	let today = new Date();
	let timeOfExit = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	let timeNow = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds(); //detik
	// console.log(timeNow+"detik")

	let tiket = document.getElementById(`ticket1`).value;
	console.log(tiket);

	let parkingout_1 = {};
	let getDataParking = localStorage.getItem('data_parking1');
	parking1 = JSON.parse(getDataParking);

	parking1.forEach((item, index) => {
		if (item.gen_code == tiket) {
			let durasi = Math.floor(timeNow - item.total_time); //detik
			console.log(durasi + ' detik');
			if (item.vehicle == 'car') {
				if (durasi <= 60) {
					bayar1 = mobilJamPertama;
				} else if (durasi > 60) {
					bayar1 = mobilJamPertama + durasi / 60 * mobilJamKedua;
				} else {
					return;
				}

				pendapatan_mobil1 = pendapatan_mobil1 + bayar1;
				localStorage.setItem('pendapatan_mobil1', JSON.stringify(pendapatan_mobil1));
			} else if (item.vehicle == 'motorcycle') {
				if (durasi <= 60) {
					bayar1 = motorJamPertama;
				} else if (durasi > 60) {
					bayar1 = motorJamPertama + durasi / 60 * motorJamKedua;
				} else {
					return;
				}

				pendapatan_motor1 = pendapatan_motor1 + bayar1;
				localStorage.setItem('pendapatan_motor1', JSON.stringify(pendapatan_motor1));
			}

			pendapatan1 = pendapatan1 + bayar1;
			console.log('Total bayar  ' + pendapatan1);
			localStorage.setItem('pendapatan_op1', JSON.stringify(Math.floor(pendapatan1)));

			alert(`
${item.vehicle} dengan Nomor Polisi ${item.license_plate}
Harus Membayar ${bayar1} rupiah
Durasi parkir ${durasi} detik (${durasi / 60} menit) 
     `);

			parkingout_1.date_in = item.date_entry;
			parkingout_1.vehicle = item.vehicle;
			parkingout_1.license_plate = item.license_plate;
			parkingout_1.time_in = item.time_of_entry;
			parkingout_1.time_out = timeOfExit;
			parkingout_1.income = bayar1;

			let dataLocalStorage = localStorage.getItem('data_parkingout1');

			if (dataLocalStorage == null) {
				arrayParking = [];
			} else {
				arrayParking = JSON.parse(dataLocalStorage);
			}
			arrayParking.push(parkingout_1);
			localStorage.setItem('data_parkingout1', JSON.stringify(arrayParking));
        }
    
    });
    const parkingWithRemovedItem =  parking1.filter( p => p.gen_code != tiket)
    localStorage.setItem('data_parking1', JSON.stringify(parkingWithRemovedItem))
    selectCode1();
};

function selectCode1() {
	let localStorageData = localStorage.getItem('data_parking1');
    getDataParking = JSON.parse(localStorageData);
    document.getElementById('ticket1').innerHTML = ''

	getDataParking.forEach((item) => {
		document.getElementById('ticket1').innerHTML += `
      <option value="${item.gen_code}">${item.license_plate} (${item.vehicle})</option>
    `;
	});
}

//////////////////////////////EXIT 2//////////////////////////////////

selectCode2();
logout2 = () => {
	let today = new Date();
	let timeOfExit = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	let timeNow = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds(); //detik
	// console.log(timeNow+"detik")

	let tiket = document.getElementById(`ticket2`).value;
	console.log(tiket);

	let parkingout_2 = {};
	let getDataParking = localStorage.getItem('data_parking2');
	parking2 = JSON.parse(getDataParking);

	parking2.forEach((item) => {
		if (item.gen_code == tiket) {
			let durasi = Math.floor(timeNow - item.total_time); //detik
			console.log(durasi + ' detik');
			if (item.vehicle == 'car') {
				if (durasi <= 60) {
					bayar2 = mobilJamPertama;
				} else if (durasi > 60) {
					bayar2 = mobilJamPertama + durasi / 60 * mobilJamKedua;
				} else {
					return;
				}
				pendapatan_mobil2 = pendapatan_mobil2 + bayar2;
				localStorage.setItem('pendapatan_mobil2', JSON.stringify(pendapatan_mobil2));
			}
			if (item.vehicle == 'motorcycle') {
				if (durasi <= 60) {
					bayar2 = motorJamPertama;
				} else if (durasi > 60) {
					bayar2 = motorJamPertama + durasi / 60 * motorJamKedua;
				} else {
					return;
				}
				pendapatan_motor2 = pendapatan_motor2 + bayar2;
				localStorage.setItem('pendapatan_motor2', JSON.stringify(pendapatan_motor2));
			}

			pendapatan2 = pendapatan2 + bayar2;
			console.log('Total bayar  ' + pendapatan2);
			localStorage.setItem('pendapatan_op2', JSON.stringify(Math.floor(pendapatan2)));

			alert(`
${item.vehicle} dengan Nomor Polisi ${item.license_plate}
Harus Membayar ${bayar2} rupiah
Durasi parkir ${durasi} detik (${durasi / 60} menit) 
     `);

			parkingout_2.date_in = item.date_entry;
			parkingout_2.vehicle = item.vehicle;
			parkingout_2.license_plate = item.license_plate;
			parkingout_2.time_in = item.time_of_entry;
			parkingout_2.time_out = timeOfExit;
			parkingout_2.income = bayar2;

			let dataLocalStorage = localStorage.getItem('data_parkingout2');

			if (dataLocalStorage == null) {
				arrayParking = [];
			} else {
				arrayParking = JSON.parse(dataLocalStorage);
			}
			arrayParking.push(parkingout_2);
			localStorage.setItem('data_parkingout2', JSON.stringify(arrayParking));
		}
	});
	const parkingWithRemovedItem =  parking2.filter( p => p.gen_code != tiket)
    localStorage.setItem('data_parking2', JSON.stringify(parkingWithRemovedItem))
    selectCode2();
};

function selectCode2() {
	let localStorageData = localStorage.getItem('data_parking2');
	getDataParking = JSON.parse(localStorageData);

	document.getElementById('ticket2').innerHTML = ''

	getDataParking.forEach((item) => {
		document.getElementById('ticket2').innerHTML += `
      <option value="${item.gen_code}">${item.license_plate} (${item.vehicle})</option>
    `;
	});
}
