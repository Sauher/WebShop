let kartyak =[
    { nev: "Selyem" },
    { nev: "Chico" },
    { nev: "Ralph" },
    { nev: "Factory" },
    { nev: "Career" },
    { nev: "Car" },
    { nev: "Developing" },
    { nev: "Dominate" },
    { nev: "Fragrance" },
    { nev: "Polo" }

]
const Kereses = document.getElementById("kereso");
const Kartyak = document.querySelectorAll(".Kartyakereses");

Kereses.addEventListener("input", () => {
    const Beirtkereses = Kereses.value.toLowerCase();
    
    Kartyak.forEach((Kartya, o) => {
        if (kartyak[o].nev.toLowerCase().includes(Beirtkereses)) {
            Kartya.style.display = "block";
        } else {
            Kartya.style.display = "none";
        }
    });
});
