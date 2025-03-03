let TermekTomb = [
Shirt = {name: "Collar T-Shirt",
    value: 30,
    img: "./kepek/ralph.png",
    onsale: false},

GentsShirt = {name: "Gents T-Shirt",
    value: 49,
    img: "./kepek/ralphT.jpg",
    onsale: false},

Hat = {name: "Ladies Hat",
    value: 22,
    img: "./kepek/ralphHat.png",
    onsale: true,
    salevalue: 17},
Jacket1 = {name: "Leather Jacket",
    value: 100,
    img: "./kepek/ralphJack.png",
    onsale: true,
    salevalue: 50},
Top = {name: "Printed Tops",
    value: 75,
    img: "./kepek/ralphTop.png",
    onsale: false},
Top2 = {name: "Woman Tops",
    value: 45,
    img: "./kepek/ralphTop2.png",
    onsale: false},
]

for (let i = 0; i < TermekTomb.length; i++) {
    let kepekdiv = document.getElementById("kepdiv")
    let salediv = document.createElement("div")
    let carddiv = document.createElement("div")
    let cardbdiv = document.createElement("div")
    let ikondiv = document.createElement("div")
    let szemikon = document.createElement("div")
    let szivikon = document.createElement("div")
    let button = document.createElement("button")
    let szivimg = document.createElement("img")
    let szemimg = document.createElement("img")
    let ruhadiv = document.createElement("div")
    let ruhaimg = document.createElement("img")
    let ruhanev = document.createElement("h4")
    let arspan = document.createElement("span")
    let salearspan = document.createElement("span")

    szemimg.src = "./kepek/szem.png"
    szivimg.src = "./kepek/sziv.png"

    button.innerHTML = "Add to Cart"
    carddiv.className = "card"
    cardbdiv.className = "cardb"
    ikondiv.className = "ikonok"
    szemikon.className = "szemikon"
    szivikon.className = "szivikon"
    salediv.className = "top-left"
    salediv.innerHTML = "Sale!"
    ruhadiv.className = "ruha"
    ruhaimg.src = TermekTomb[i].img
    ruhaimg.className = "kep1"
    ruhanev.innerHTML = TermekTomb[i].name
    
    arspan.innerHTML = "$" + TermekTomb[i].value+".00"
    

    kepekdiv.appendChild(carddiv)
    carddiv.appendChild(cardbdiv)
    cardbdiv.appendChild(ikondiv)
    ikondiv.appendChild(szivikon)
    ikondiv.appendChild(szemikon)
    szivikon.appendChild(szivimg)
    szemikon.appendChild(szemimg)
    cardbdiv.appendChild(button)
    carddiv.appendChild(ruhadiv)
    ruhadiv.appendChild(ruhaimg)
    ruhadiv.appendChild(ruhanev)
    ruhadiv.appendChild(arspan)
    if(TermekTomb[i].onsale == true){
        arspan.classList.add("athuz")
        salearspan.className = "ar2"
        salearspan.innerHTML = " $" + TermekTomb[i].salevalue +".00"
        ruhadiv.appendChild(salearspan)
        carddiv.appendChild(salediv)
    }
    else{
        arspan.className = "ar"
    }
    
    

}
