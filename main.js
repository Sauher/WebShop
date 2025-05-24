//slider js
if(document.getElementsByClassName("melyikoldal")[0].id == "shopoldal")
  {
const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");
const sliderTrack = document.querySelector(".slider-track");
const minGap = 1;
const sliderMaxValue = range2.max;

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
 
  sliderTrack.style.left = `${((range1.value) / sliderMaxValue) * 100}%`;
  sliderTrack.style.width = `${((range2.value - range1.value) / sliderMaxValue) * 100}%`;
  minar.innerHTML = `${range1.value}$`;
  maxar.innerHTML = `${range2.value}$`;

}


range1.addEventListener("input", updateSlider);
range2.addEventListener("input", updateSlider);


updateSlider();
  }
const button = document.getElementsByClassName(".button");
//header
function myFunction() {
  let x = document.getElementById("myLinks");
  let ikon1 = document.getElementById("menuikon1");
  let ikon2 = document.getElementById("menuikon2");
  let fejlec = document.getElementsByClassName("melyikoldal")[0]
  if (x.style.display === "block") {
    x.style.display = "none";
    ikon1.style.display = "block";
    ikon2.style.display = "none";
    fejlec.style.display = "block"
  } else {
    x.style.display = "block";
    ikon1.style.display = "none";
    ikon2.style.display = "block";
    fejlec.style.display = "none"
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



function kep1valtas(){
  
  
  document.getElementById('boritokep').style.backgroundImage="url('./kepek/Homekep3.png')";
  document.getElementById('gomb1').style.borderLeftColor= "rgb(216, 170, 170)";
  document.getElementById('gomb2').style.borderRightColor=  "rgb(255, 255, 255)";
  document.getElementById('gomb3').style.borderLeftColor= "rgb(255, 255, 255)";
  document.getElementById('ruhaszoveg').innerHTML = "Szabadidők"
  document.getElementById('homear').innerHTML = "24.000Ft"
  document.getElementById('modellkep').style.backgroundImage=("url('./kepek/HomeModel1.png')");
  i=1
  gombertek=0
  
}
function kep2valtas(){
 
  document.getElementById('boritokep').style.backgroundImage="url('./kepek/Homekep2.png')";
  document.getElementById('gomb1').style.borderLeftColor= "rgb(255, 255, 255)";
  document.getElementById('gomb2').style.borderRightColor=  "rgb(216, 170, 170)";
  document.getElementById('gomb3').style.borderLeftColor= "rgb(255, 255, 255)";
  document.getElementById('ruhaszoveg').innerHTML = "Melegítők"
  document.getElementById('homear').innerHTML = "30.000Ft"
  document.getElementById('modellkep').style.backgroundImage=("url('./kepek/Homemodel2.png')");
  i=2
  gombertek=1
  
}
function kep3valtas(){
  
  document.getElementById('boritokep').style.backgroundImage="url('./kepek/Homekep1.png')";
  document.getElementById('gomb1').style.borderLeftColor= "rgb(255, 255, 255)";
  document.getElementById('gomb2').style.borderRightColor=  "rgb(255, 255, 255)";
  document.getElementById('gomb3').style.borderLeftColor= "rgb(216, 170, 170)";
  document.getElementById('ruhaszoveg').innerHTML = "Pizsomák"
  document.getElementById('homear').innerHTML = "21.000Ft"
  document.getElementById('modellkep').style.backgroundImage=("url('./kepek/Homemodel3.png')");
  
  i=0
  gombertek=2
}

function opacity1(){
  if(h ==0){
    h++;
    document.getElementById('boritokep').style.opacity = 0.9
    
  }
  else{
   
    h=0
    document.getElementById('boritokep').style.opacity = 1
    
  }
}


//Contact us
function Kiiras(){
  let mezok = document.getElementsByClassName("mezo")

  alert("Kedves " + mezok[0].value +"!\nÜzeneted rögzítésre került és hamarosan feldolgozzuk.")
}

//Check_out

function kuponellenorzes(){
  kupon = document.getElementById("Kupontext").value
  Kedvezmenyezettar = document.getElementById("Osszesosszeg").textContent
 
  
  if(Kuponkodok.includes(kupon)){
    alert("Sikeres redeem")
    
    Hasznaltkodok.push(`${kupon}`)
    Kuponkodok.splice(Kuponkodok.indexOf(kupon), 1)
    document.getElementById("Osszesosszeg").innerHTML = `${Number(Kedvezmenyezettar)*0.9}`
    
  }
  else{
    if(Hasznaltkodok.includes(kupon)){
      alert("Ezt a kupont már felhasználtad")
    }
    else if(kupon ==""){
      alert("Üresen hagyta a kód mezőt")
    }
    else{
      alert("nincs ilyen kód")
    }
  }
  
  document.getElementById("Kupontext").value = ""
}
function Megvasarlas(){
  document.getElementById("Osszesosszeg").innerHTML = Eredetiosszeg
  
}






