// const myName = "budi";
// var nilai = 10;

// console.log(myName);
// console.log(typeof myName);

// console.log(nilai);
// console.log(typeof nilai);

// document.write(`Nama ku : ${myName} <br>`);
// document.write("Nama ku : " + myName + " <br>");
// document.write(nilai);

// alert(`Namaku : ${myName}`);

// ============================================================================

// var totalBelanja = prompt("Total belanja?", 0);

// if (totalBelanja > 100000) {
//   document.write("<h2>Selamat Anda dapat hadiah</h2>");
// }

// document.write("<p>Terimakasih sudah berbelanja di toko kami</p>");

// ==============================================================================

// var username = prompt("Masukan username : ");

// if (username == "kolu") {
//   document.write("<h2>Selamat datang di komunitas linux !</h2>");
// } else {
//   document.write("<h2>Username salah, coba lagi!</h2>");
// }

// document.write("<p>Jangan lupa makan!</p>");

// ==================================================================================

// var nilai = prompt("Inputkan nilai anda : ");
// var grade = "";

// if (nilai >= 90) {
//   grade = "A";
// } else if (nilai >= 80) {
//   grade = "B+";
// } else if (nilai >= 70) {
//   grade = "B";
// } else if (nilai >= 60) {
//   grade = "C+";
// } else if (nilai >= 50) {
//   grade = "C";
// } else if (nilai >= 40) {
//   grade = "D";
// } else if (nilai >= 30) {
//   grade = "E";
// } else {
//   grade = "F";
// }

// document.write(`<p>Grade anda : ${grade}</p>`);

// ==================================================================================

// var jawab = prompt(
//   "Kamu beruntung! Silahkan pilih hadiahmu dengan memasukan angka 1 sampai 5"
// );
// var hadiah = "";

// switch (jawab) {
//   case "1":
//     hadiah = "Tisu";
//     break;
//   case "2":
//     hadiah = "1 Kotak Kopi";
//     break;
//   case "3":
//     hadiah = "Sticker";
//     break;
//   case "4":
//     hadiah = "Minyak Goreng";
//     break;
//   case "5":
//     hadiah = "Uang Rp 50.000";
//     break;
//   default:
//     document.write("<p>Opps! anda salah pilih</p>");
// }

// if (hadiah === "") {
//   document.write("<p>Kamu gagal mendapat hadiah</p>");
// } else {
//   document.write("<h2>Selamat kamu mendapatkan " + hadiah + "</h2>");
// }

// var nilai = prompt("input nilai", 0);
// var grade = "";

// switch (true) {
//   case nilai >= 90:
//     grade = "A";
//     break;
//   case nilai >= 80:
//     grade = "B+";
//     break;
//   case nilai >= 70:
//     grade = "B";
//     break;
//   case nilai >= 60:
//     grade = "C+";
//     break;
//   case nilai >= 50:
//     grade = "C";
//     break;
//   case nilai >= 40:
//     grade = "D";
//     break;
//   case nilai >= 30:
//     grade = "E";
//     break;
//   default:
//     grade = "F";
// }

// document.write(`<p>Grade anda : ${grade}</p>`);

// ==================================================================================

// var username = prompt("Username:");
// var password = prompt("Password:");

// if (username == "fatwa") {
//   if (password == "123") {
//     document.write("<h2>Selamat datang !</h2>");
//   } else {
//     document.write("<p>Password salah, coba lagi!</p>");
//   }
// } else {
//   document.write("<p>Anda tidak terdaftar!</p>");
// }

// var username = prompt("Username:");
// var password = prompt("Password:");

// if (username == "fatwa" && password == "123") {
//   document.write("<h2>Selamat datang !</h2>");
// } else {
//   document.write("<p>Anda tidak terdaftar, coba lagi!</p>");
// }

// ################################################################################

// document.write("belajar javascript <br>");
// document.write("belajar javascript <br>");
// document.write("belajar javascript <br>");
// document.write("belajar javascript <br>");
// document.write("belajar javascript <br>");
// document.write("belajar javascript <br>");
// document.write("belajar javascript <br>");
// document.write("belajar javascript <br>");
// document.write("belajar javascript <br>");

// ==================================================================================

// for (let i = 0; i <= 50; i++) {
//   document.write("<p>Perulangan ke-" + i + "</p>");
// }

// ==================================================================================

// var ulangi = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while (ulangi) {
//   counter++;
//   ulangi = confirm("Apakah anda mau mengulang?");
// }

// document.write("Perulangan sudah dilakuakn sebanyak " + counter + " kali");

// ==================================================================================

// var counter = 0;
// do {
//   counter++;
//   var ulangi = confirm("Apakah anda mau mengulang?");
// } while (ulangi);

// document.write("Perulangan sudah dilakuakn sebanyak " + counter + " kali");

// ==================================================================================

// var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
// var hari = {
//   hari1: "senin",
//   hari2: "selasa",
//   hari3: "rabu",
//   hari4: "kamis",
// };
// console.log(hari);
// console.log(typeof hari);
// console.log(days);
// console.log(typeof days);

// console.log(days[1]);
// console.log(hari.hari3);

// days.forEach((day) => {
//   document.write("<p>" + day + "</p>");
// });

// ==================================================================================

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     document.write("<p>Perulangan ke " + i + "," + j + "</p>");
//   }
// }

// ################################################################################

// function namaFungsi1() {
//   console.log("Model fungsi 1 !");
// }

// var namaFungsi2 = function () {
//   console.log("Model fungsi 2 !");
// };

// var namaFungsi3 = () => {
//   console.log("Model fungsi 3 !");
// };

// console.log("Program di luar function");

// namaFungsi1();
// namaFungsi2();
// namaFungsi3();

const penjumlahan = (nilai1, nilai2) => {
  const hasil = nilai1 + nilai2;
  return hasil;
};

const pengurangan = (nilai1, nilai2) => {
  const hasil = nilai1 - nilai2;
  return hasil;
};

const hasil_penjumlahan1 = penjumlahan(10, 5);
const hasil_penjumlahan2 = penjumlahan(7, 9);
const hasil_penjumlahan3 = penjumlahan(23, 5);

const hasil_pengurangan1 = pengurangan(7, 5);

console.log(hasil_penjumlahan1);
console.log(hasil_penjumlahan2);
console.log(hasil_penjumlahan3);

console.log(hasil_pengurangan1);
