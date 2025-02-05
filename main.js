//slider js

const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");
const sliderTrack = document.querySelector(".slider-track");
const minGap = 1;
const sliderMaxValue = 75;

const minar = document.getElementById("minar");
const maxar = document.getElementById("maxar");

function updateSlider() {
  const range1Value = parseInt(range1.value);
  const range2Value = parseInt(range2.value);

  const minarValue = parseInt(minar.value)
  const maxarValue = parseInt(maxar.value)

 
  if (range2Value - range1Value < minGap) {
    if (this.id === "range1") {
      range1.value = range2Value - minGap;
      
    } else {
      range2.value = range1Value + minGap;
    }
  }

  
  sliderTrack.style.left = `${(((range1.value) / sliderMaxValue)* 100)-1.3}%`;
  sliderTrack.style.width = `${(((range2.value - range1.value) / sliderMaxValue) * 100)+2}%`;
  minar.innerHTML = `${range1.value}$`;
  maxar.innerHTML = `${range2.value}$`;

}


range1.addEventListener("input", updateSlider);
range2.addEventListener("input", updateSlider);


updateSlider();

const button = document.getElementsByClassName(".button");
function Filter(){
  console.log(`Keresett árak: ${range1.value} - ${range2.value}`)
}
//header
function myFunction() {
  let x = document.getElementById("myLinks");
  let ikon1 = document.getElementById("menuikon1");
  let ikon2 = document.getElementById("menuikon2");
  if (x.style.display === "block") {
    x.style.display = "none";
    ikon1.style.display = "block";
    ikon2.style.display = "none";
  } else {
    x.style.display = "block";
    ikon1.style.display = "none";
    ikon2.style.display = "block";
  }
}
function dropFunction1(){
  let x = document.getElementById("drop3");
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function dropFunction2(){
  let x = document.getElementById("drop4");
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Homekepváltozás
let szamlalo =0;

function kep1valtas(){
  
  document.getElementById('boritokep').style.backgroundImage="url('./kepek/ralphTop2.png')";
  document.getElementById('gomb1').style.backgroundColor= '#D8ABAB';
  document.getElementById('gomb2').style.backgroundColor= '#fff';
  document.getElementById('gomb3').style.backgroundColor= '#fff';
  document.getElementById('ruhaszoveg').innerHTML = "Szabadidők"
  document.getElementById('homear').innerHTML = "24.000Ft"
  
}
function kep2valtas(){
  
  document.getElementById('boritokep').style.backgroundImage="url('./kepek/jordanbarrett.jpg')";
  document.getElementById('gomb1').style.backgroundColor= '#fff';
  document.getElementById('gomb2').style.backgroundColor= '#D8ABAB';
  document.getElementById('gomb3').style.backgroundColor= '#fff';
  document.getElementById('ruhaszoveg').innerHTML = "Melegítők"
  document.getElementById('homear').innerHTML = "30.000Ft"
  
}
function kep3valtas(){
  
  document.getElementById('boritokep').style.backgroundImage="url('./kepek/jordanbarrett.jpg')";
  document.getElementById('gomb1').style.backgroundColor= '#fff';
  document.getElementById('gomb2').style.backgroundColor= '#fff';
  document.getElementById('gomb3').style.backgroundColor= '#D8ABAB';
  document.getElementById('ruhaszoveg').innerHTML = "Pizsomák"
  document.getElementById('homear').innerHTML = "21.000Ft"
  
}



//Contact us
function Kiiras(){
  let mezok = document.getElementsByClassName("mezo")

  alert("Kedves " + mezok[0].value +"!\nÜzeneted rögzítésre került és hamarosan feldolgozzuk.")
}

//






