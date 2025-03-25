let Tomb = [
    Shirt = {
        name: "Collar T-Shirt",
        value: 30,
        img: "./kepek/ralph.png",
        osztaly: "Casual",
        onsale: false
    },

    GentsShirt = {
        name: "Gents T-Shirt",
        value: 49,
        img: "./kepek/ralphT.jpg",
        osztaly: "Casual",
        onsale: false
    },

    Hat = {
        name: "Ladies Hat",
        value: 22,
        img: "./kepek/ralphHat.png",
        osztaly: "Accessory",
        onsale: true,
        salevalue: 16
    },
    Jacket1 = {
        name: "Leather Jacket",
        value: 100,
        img: "./kepek/ralphJack.png",
        osztaly: "Clothing",
        onsale: true,
        salevalue: 49
    },
    Top = {
        name: "Printed Tops",
        value: 75,
        osztaly: "Casual",
        img: "./kepek/ralphTop.png",
        onsale: false
    },
    Top2 = {
        name: "Woman Tops",
        value: 45,
        osztaly: "Casual",
        img: "./kepek/ralphTop2.png",
        onsale: false
    },
    Pulcsi = {
        name: "Men's Pullover",
        value: 60,
        img: "./kepek/pulcsika.jpg",
        osztaly: "Casual",
        onsale: true,
        salevalue: 49
    },
    Blackshirt = {
        name: "Black T-Shirt",
        value: 40,
        img: "./kepek/blackshirt.jpg",
        osztaly: "Casual",
        onsale: false
    },
    BlueShirt = {
        name: "Blue Shirt",
        value: 45,
        img: "./kepek/keking.jpg",
        osztaly: "Clothing",
        onsale: false
    },
    Dress = {
        name: "Dress",
        value: 120,
        img: "./kepek/dress.jpg",
        osztaly: "Clothing",
        onsale: true,
        salevalue: 79
    },
    Zako = {
        name: "Black Coat",
        value: 150,
        img: "./kepek/zako.jpg",
        osztaly: "Clothing",
        onsale: false
    },
    Legs = {
        name: "Stylish Leggings",
        value: 110,
        img: "./kepek/leggings.jpg",
        osztaly: "Clothing",
        onsale: false
    },
    Jacket2 = {
        name: "Puffer Jacket",
        value: 80,
        img: "./kepek/puffer.png",
        osztaly: "Clothing",
        onsale: false
    },
    Accessory2 = {
        name: "Diamond Jewelry Set",
        value: 10000,
        img: "./kepek/Accesoriesmodel1.png",
        osztaly: "Accessory",
        onsale: true,
        salevalue: 9999
    },
    Accessory3 = {
        name: "Sapphire Necklace",
        value: 2200,
        img: "./kepek/Accesoriesmodel2.png",
        osztaly: "Accessory",
        onsale: false
    },
    Accessory4 = {
        name: "Golden Bracelet",
        value: 540,
        img: "./kepek/Accesoriesmodel3.png",
        osztaly: "Accessory",
        onsale: false
    },
    Accessory5 = {
        name: "Classy Hat",
        value: 220,
        img: "./kepek/Accesoriesmodel4.png",
        osztaly: "Accessory",
        onsale: false
    },
    Accessory6 = {
        name: "Bucket hat",
        value: 50,
        img: "./kepek/Accesoriesmodel5.png",
        osztaly: "Accessory",
        onsale: true,
        salevalue: 44
    },
    Ferfi1 = {
        name: "Wool Sweater",
        value: 120,
        img: "./kepek/Ferfi1.PNG",
        osztaly: "Men",
        onsale: false
    },
    Ferfi2 = {
        name: "Black T-Shirt",
        value: 50,
        img: "./kepek/Ferfi2.PNG",
        osztaly: "Men",
        onsale: true,
        salevalue: 44
    },
    Ferfi3 = {
        name: "Yellowish T-Shirt",
        value: 50,
        img: "./kepek/Ferfi3.PNG",
        osztaly: "Men",
        onsale: false
    },
    Ferfi4 = {
        name: "Green Shorts",
        value: 70,
        img: "./kepek/Ferfi4.jpg",
        osztaly: "Men",
        onsale: false
    },
    Ferfi5 = {
        name: "White T-Shirt",
        value: 60,
        img: "./kepek/Ferfi5.jpg",
        osztaly: "Men",
        onsale: false
    },
    Ferfi6 = {
        name: "Green Shirt",
        value: 110,
        img: "./kepek/Ferfi6.PNG",
        osztaly: "Men",
        onsale: true,
        salevalue: 89
    },
    No1 = {
        name: "White Sweater",
        value: 100,
        img: "./kepek/No1.jpg",
        osztaly: "Women",
        onsale: false
    },
    No2 = {
        name: "Black Dress",
        value: 170,
        img: "./kepek/No2.jpg",
        osztaly: "Women",
        onsale: true,
        salevalue: 149
    },
    No3 = {
        name: "Pink Top",
        value: 60,
        img: "./kepek/No3.PNG",
        osztaly: "Women",
        onsale: false
    },
    No4 = {
        name: "Flared Jeans",
        value: 130,
        img: "./kepek/No4.PNG",
        osztaly: "Women",
        onsale: false
    },
    No5 = {
        name: "Grey Summer Dress",
        value: 70,
        img: "./kepek/No5.PNG",
        osztaly: "Women",
        onsale: false
    },
    No6 = {
        name: "Crimson Plussize Dress",
        value: 140,
        img: "./kepek/No6.PNG",
        osztaly: "Women",
        onsale: true,
        salevalue: 119
    }
]
let alcim = document.getElementById("alcim")
let results = document.getElementById("res")
let melyikoldal = document.getElementById("hol")
let CasualTomb = []
let ClothingTomb = []
let Notomb = []
let Acctomb = []
let Ferfitomb = []
for (let index = 0; index < Tomb.length; index++) {
    if (Tomb[index].osztaly == "Clothing") {
        ClothingTomb.push(Tomb[index])
    }
}
for (let index = 0; index < Tomb.length; index++) {
    if (Tomb[index].osztaly == "Women") {
        Notomb.push(Tomb[index])
    }
}
for (let index = 0; index < Tomb.length; index++) {
    if (Tomb[index].osztaly == "Casual") {
        CasualTomb.push(Tomb[index])
    }
}
for (let index = 0; index < Tomb.length; index++) {
    if (Tomb[index].osztaly == "Accessory") {
        Acctomb.push(Tomb[index])
    }
}
for (let index = 0; index < Tomb.length; index++) {
    if (Tomb[index].osztaly == "Men") {
        Ferfitomb.push(Tomb[index])
    }
}
let kepekdiv = document.getElementById("kepdiv")
function Feltoltes(TermekTomb) {
    for (let i = 0; i < TermekTomb.length; i++) {
        
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

        arspan.innerHTML = "$" + TermekTomb[i].value + ".00"


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
        if (TermekTomb[i].onsale == true) {
            arspan.classList.add("athuz")
            salearspan.className = "ar2"
            salearspan.innerHTML = " $" + TermekTomb[i].salevalue + ".99"
            ruhadiv.appendChild(salearspan)
            carddiv.appendChild(salediv)
        }
        else {
            arspan.className = "ar"
        }



    }
}
//*if (melyikoldal.className == "Casual") {

if(melyikoldal.className == "Casual"){
    Feltoltes(CasualTomb)
    alcim.innerHTML = "Casual"
    results.innerHTML = "Showing all "+ CasualTomb.length + " results"
}
if (melyikoldal.className == "Clothing") {
    Feltoltes(ClothingTomb)
    alcim.innerHTML = "Clothing"
    results.innerHTML = "Showing all "+ ClothingTomb.length + " results"
}
if (melyikoldal.className == "Women") {
    Feltoltes(Notomb)
    alcim.innerHTML = "Women"
    results.innerHTML = "Showing all "+ NoTomb.length + " results"
}
if (melyikoldal.className == "Accessories") {
    Feltoltes(Acctomb)
    alcim.innerHTML = "Accessories"
    results.innerHTML = "Showing all "+ AccTomb.length + " results"
}
if (melyikoldal.className == "Men") {
    Feltoltes(Ferfitomb)
    alcim.innerHTML = "Men"
    results.innerHTML = "Showing all "+ FerfiTomb.length + " results"
}
if (melyikoldal.className == "Shop") {
    Feltoltes(Tomb)
    alcim.innerHTML = "Shop"
    results.innerHTML = "Showing all "+ Tomb.length + " results"
}

function Filter(){
    switch(melyikoldal.className){
        case "Casual":
            
            Filterezes(CasualTomb);
            break;
        case "Clothing":
            Filterezes(ClothingTomb);
            break;
        case "Women":
            Filterezes(Notomb);
            break;
        case "Accessories":
            Filterezes(Acctomb);
            break;
        case "Men":
            Filterezes(Ferfitomb);
            break;
        case "Shop":
            Filterezes(Tomb);
            break;
    }
}
function Filterezes(Array){
    kepekdiv.innerHTML=""
    const result = Array.filter(e=> {
        if(e.salevalue){
            console.log(Array)
            
            return range1.value<=e.salevalue && e.salevalue <= range2.value 
        } 
        
        return range1.value<=e.value && e.value <= range2.value
    })

    Feltoltes(result)
    results.innerHTML = "Showing all "+ result.length + " results"
    
}
sort = document.getElementById("sort")
function Rendezes(){
    $("#kepdiv").empty();
    if(melyikoldal.className == "Casual"){
        if(sort.value == "def" ){
            Feltoltes(CasualTomb)
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "desc"){
            var tempTomb = CasualTomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return b.value - a.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "asc"){
            var tempTomb = CasualTomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return a.value - b.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Aasc"){
            var tempTomb = CasualTomb.slice()
            Feltoltes(tempTomb.sort((a, b) => a.name.localeCompare(b.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Adesc"){
            var tempTomb = CasualTomb.slice()
            Feltoltes(tempTomb.sort((a, b) => b.name.localeCompare(a.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
    }
    if (melyikoldal.className == "Clothing") {
        if(sort.value == "def" ){
            Feltoltes(ClothingTomb)
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "desc"){
            var tempTomb = ClothingTomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return b.value - a.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "asc"){
            var tempTomb = ClothingTomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return a.value - b.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Aasc"){
            var tempTomb = ClothingTomb.slice()
            Feltoltes(tempTomb.sort((a, b) => a.name.localeCompare(b.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Adesc"){
            var tempTomb = ClothingTomb.slice()
            Feltoltes(tempTomb.sort((a, b) => b.name.localeCompare(a.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
    }
    if (melyikoldal.className == "Women") {
        Feltoltes(Notomb)
        if(sort.value == "def" ){
            Feltoltes(NoTomb)
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "desc"){
            var tempTomb = NoTomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return b.value - a.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "asc"){
            var tempTomb = NoTomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return a.value - b.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Aasc"){
            var tempTomb = NoTomb.slice()
            Feltoltes(tempTomb.sort((a, b) => a.name.localeCompare(b.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Adesc"){
            var tempTomb = NoTomb.slice()
            Feltoltes(tempTomb.sort((a, b) => b.name.localeCompare(a.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
    }
    if (melyikoldal.className == "Accessories") {
        Feltoltes(Acctomb)
        if(sort.value == "def" ){
            Feltoltes(AccTomb)
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "desc"){
            var tempTomb = AccTomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return b.value - a.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "asc"){
            var tempTomb = AccTomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return a.value - b.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Aasc"){
            var tempTomb = AccTomb.slice()
            Feltoltes(tempTomb.sort((a, b) => a.name.localeCompare(b.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Adesc"){
            var tempTomb = AccTomb.slice()
            Feltoltes(tempTomb.sort((a, b) => b.name.localeCompare(a.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
    }
    if (melyikoldal.className == "Men") {
        Feltoltes(Ferfitomb)
        if(sort.value == "def" ){
            Feltoltes(Ferfitomb)
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "desc"){
            var tempTomb = Ferfitomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return b.value - a.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "asc"){
            var tempTomb = Ferfitomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return a.value - b.value}))}
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        if(sort.value == "Aasc"){
            var tempTomb = Ferfitomb.slice()
            Feltoltes(tempTomb.sort((a, b) => a.name.localeCompare(b.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Adesc"){
            var tempTomb = Ferfitomb.slice()
            Feltoltes(tempTomb.sort((a, b) => b.name.localeCompare(a.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
    }
    if(melyikoldal.className == "Shop"){
        if(sort.value == "def" ){
            Feltoltes(Tomb)
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "desc"){
            var tempTomb = Tomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return b.value - a.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "asc"){
            var tempTomb = Tomb.slice()
            Feltoltes(tempTomb.sort(function (a,b){return a.value - b.value}))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
            
        }
        if(sort.value == "Aasc"){
            var tempTomb = Tomb.slice()
            Feltoltes(tempTomb.sort((a, b) => a.name.localeCompare(b.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Adesc"){
            var tempTomb = Tomb.slice()
            Feltoltes(tempTomb.sort((a, b) => b.name.localeCompare(a.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
    }
}
