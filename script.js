// ==========Session=====================
const cacheKey = "NUMBER";
if (typeof(Storage) !== "undefined") {
  // cek apakah NUMBER sudah tersedia di sessionStorage
  if (sessionStorage.getItem(cacheKey) === "undefined") {
    // jika belum, atur cacheKey (NUMBER) = 0
    sessionStorage.setItem(cacheKey, 0);
  }
  const button = document.querySelector('#button');
  const count = document.querySelector('#count');
  button.addEventListener('click', function (event) {
    let number = sessionStorage.getItem(cacheKey);
    number++;
    sessionStorage.setItem(cacheKey, number);
    count.innerText = sessionStorage.getItem(cacheKey);
  })
  count.innerText = sessionStorage.getItem(cacheKey);
}
else {
  alert("Browser tidak mendukung Web Storage");
}

// ==========LocalStorage=====================
const CACHE_KEY = "ANGKA";
const tombolHitung = document.querySelector('#tombol-hitung');
const tombolHapus = document.querySelector('#tombol-hapus');
const hitung = document.querySelector('#hitung');

if (typeof(Storage) !== "undefined") {
  // Cek apakah ANGKA sudah tersedia pada localStorage
  if (localStorage.getItem(CACHE_KEY) === "undefined") {
    // Jika tidak, atur nilai ANGKA menjadi 0
    localStorage.setItem(CACHE_KEY, 0);
    hitung.innerText = '0';
  }
  tombolHitung.addEventListener('click', function (event) {
    let angka = localStorage.getItem(CACHE_KEY);
    angka++;
    localStorage.setItem(CACHE_KEY, angka);
    hitung.innerText = localStorage.getItem(CACHE_KEY);
  })
  tombolHapus.addEventListener('click', function (event) {
    localStorage.removeItem(CACHE_KEY);
    hitung.innerText = 0;
  })
  hitung.innerText = localStorage.getItem(CACHE_KEY);
}
else {
  alert('Browser tidak mendukung Web Storage');
}

// ==========Cookies=====================
const tryCookies = () => {
  let firstName = prompt("What is your first name?");
  let lastName = prompt("What is your last name?");

  // set expires Date
  let expiresDate = new Date(2022, 0, 1).toUTCString();

  // push into cookie storage
  document.cookie = `firstName=${firstName}; expires=${expiresDate}`;
  document.cookie = `lastName=${lastName}; expires=${expiresDate}`;
  
  const cookieResult = document.querySelector('#cookies');
  cookieResult.innerText = document.cookie;
  
  return alert("Your data is stored into cookies storage");
}