const dropdown = document.getElementById("dropdown");
const burger = document.getElementById("burger");

burger.addEventListener("change", function () {
  if (burger.checked) {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
});

const title = document.querySelector(".title");
const text = document.querySelector(".text");
const translation = document.querySelector(".translation");
const generateButton = document.querySelector(".generate");

generateButton.addEventListener("click", function () {
  var surah = Math.floor(Math.random() * 114) + 1;

  fetch(`data/${surah}.json`)
    .then((response) => response.json())
    .then((data) => {
      const jumlahAyat = data[surah]["number_of_ayah"];
      var nomorAyat = Math.floor(Math.random() * jumlahAyat) + 1;
      const ayat = data[surah]["text"][nomorAyat];
      const arti = data[surah]["translations"]["id"]["text"][nomorAyat];
      const namaSurah = data[surah]["name_latin"];

      title.innerHTML = namaSurah + " " + nomorAyat;
      translation.innerHTML = arti;
      text.innerHTML = ayat;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
