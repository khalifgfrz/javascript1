// Kumpulan data

// Array
// 1. Yang diwakili oleh indeks dan value
// 1.1 indeks = posisi, start dari 0
// 1.2 value = nilai / elemen
// 2. urutan pada array merupakan hal signifikan, tidak berubah
// 3. cara mengakses/memanggil elemen didalam array
// 3.1 namaArray[indeks]
// 4. biasanya digunakan untuk menyimpan data yang seragam

// const hobbies = ["membaca", "memancing"];
// // mengambil elemen "membaca"
// console.log(hobbies[0]);
// // mengambil elemen "memancing"
// console.log(hobbies[1]);

// Object
// 1. yang diwakili key dan value
// 1.1 value = nilai / elemen
// 1.2 key = tempat penyimpanan
// 2. urutan data didalam object bukan hal signifikan, bisa berubah
// 3. cara mengakses/memanggil elemen di dalam hal object
// 3.1 namaObject.namaKey
// 3.2 namaObject["namaKey"]
// 4. biasanya digunakan untuk menyimpan data detail terkait suatu hal

const book = {
  judul: "Laskar Pelangi",
  pengarang: "Andrea Hirata",
  harga: 50000,
  "status penjualan": false,
  1: "satu",
};
// // memanggil data status penjualan
// console.log(book["status penjualan"]);
// // memanggil data dengan key 1
// console.log(book["1"]);

// memanggil key dari suatu object
// console.log(Object.keys(book));
const keys = Object.keys(book);
for (let i = 0; i < keys.length; i++) {
  // jika namaKey berada didalam variabel, dihilangkan kutipnya
  console.log(book[keys[i]]);
}
