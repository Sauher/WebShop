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





