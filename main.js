const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");
const sliderTrack = document.querySelector(".slider-track");
const minGap = 10;
const sliderMaxValue = 100;

function updateSlider() {
  const range1Value = parseInt(range1.value);
  const range2Value = parseInt(range2.value);

 
  if (range2Value - range1Value < minGap) {
    if (this.id === "range1") {
      range1.value = range2Value - minGap;
    } else {
      range2.value = range1Value + minGap;
    }
  }

  
  sliderTrack.style.left = `${(range1.value / sliderMaxValue) * 100}%`;
  sliderTrack.style.width = `${((range2.value - range1.value) / sliderMaxValue) * 100}%`;
}


range1.addEventListener("input", updateSlider);
range2.addEventListener("input", updateSlider);


updateSlider();
