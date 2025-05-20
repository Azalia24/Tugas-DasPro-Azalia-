var lagu = [
    ['backburner.jpeg', 'Backburner', '— NIKI', '15M', '22,5M', '0.28', '03.49'],
    ['youu.jpeg', "You'll Be in My Heart", '— NIKI', '20M', '30M', '01.28', '04.01'],
    ['backburner.jpeg', "The Apartment We Won't Share", '— NIKI', '13M', '20M', '2.20', '02.29'],
];

var kontent = document.getElementById("container");

// buat variabel untuk menyimpan hasil HTML
var element = '';

// Loop array lagu pakai forEach
lagu.forEach(function(item) {
    element += `
    <div class="lagu">
        <img src="${item[0]}" alt="foto">
        <h2>${item[1]}</h2>
        <small><i>${item[2]}</i></small>
        <div class="garis"></div>
         <div class="durasi">
            <div class="dkan">${item[5]}</div>
            <div class="dkir">${item[6]}</div>
        </div>
        <div class="skip">
            <i class="fa-solid fa-backward"></i>
            <i class="fa-solid fa-pause"></i>
            <i class="fa-solid fa-forward"></i>
            </div>
        <div class="volume">
            <div class="kecil"><i class="fa-solid fa-volume-low"></i></div>
            <div class="besar"><i class="fa-solid fa-volume-high"></i></div>
        </div>
            <div class="bawah"> <!-- Garis Horizontal -->
            <div class="kanan"><i class="fa-solid fa-heart"></i>  ${item[3]}</div>
            <div class="kiri"><i class="fa-solid fa-play"></i>${item[4]}</div>
        </div>
    </div>
    `;
});

kontent.innerHTML = element;
