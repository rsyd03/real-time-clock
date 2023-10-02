// Mendapatkan elemen dengan ID "hour" dan menyimpannya dalam variabel hour
let hour = document.getElementById("hour");

// Mendapatkan elemen dengan ID "minute" dan menyimpannya dalam variabel minute
let minute = document.getElementById("minute");

// Mendapatkan elemen dengan ID "second" dan menyimpannya dalam variabel second
let second = document.getElementById("second");

// Membuat fungsi bernama changeTime
function changeTime(){
    // Membuat objek Date yang merepresentasikan waktu saat ini
    var today = new Date();

    // Mengambil jam dari objek Date dan menampilkan di dalam elemen dengan ID "hour"
    hour.innerHTML = today.getHours();

    // Mengambil menit dari objek Date dan menampilkan di dalam elemen dengan ID "minute"
    minute.innerHTML = today.getMinutes();

    // Mengambil detik dari objek Date dan menampilkan di dalam elemen dengan ID "second"
    second.innerHTML = today.getSeconds();
}

// Memanggil fungsi changeTime setiap 1000 milidetik (1 detik)
setInterval(changeTime, 1000);