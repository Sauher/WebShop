var jsonString = localStorage.getItem('Termekek') || '';
var WishString = localStorage.getItem('Wishtermek') || '';
if (jsonString.length != 0) 
{
    StringifyTomb = []
    var objects = JSON.parse(jsonString)
var objlist = Object.entries(objects)
for (let index = 0; index < objlist.length; index++) {
    StringifyTomb.push(objlist[index][1])
}

}
else{
    StringifyTomb = []
}

if (WishString.length != 0) 
{
    Wishtomb = []
    var objects2 = JSON.parse(WishString)
var objlist2 = Object.entries(objects2)
for (let index = 0; index < objlist2.length; index++) {
    Wishtomb.push(objlist2[index][1])
}

}
else{
    Wishtomb = []
}
function JsonGet(){
    if(document.getElementsByClassName("melyikoldal")[0].id == "cartoldal"){cartfelt(StringifyTomb)}
    if(document.getElementsByClassName("melyikoldal")[0].id == "wisholdal"){wishfelt(Wishtomb)}
    if(document.getElementsByClassName("melyikoldal")[0].id == "checkoldal"){checkfeltolt(StringifyTomb)}

}

if(document.getElementsByClassName("melyikoldal")[0].id == "shopoldal")
{

    let Tomb = [
        Shirt = {
            name: "Collar T-Shirt",
            value: 30,
            img: "./kepek/ralph.png",
            osztaly: "Casual",
            onsale: false,
            number: 0
        },

        GentsShirt = {
            name: "Gents T-Shirt",
            value: 49,
            img: "./kepek/ralphT.jpg",
            osztaly: "Casual",
            onsale: false,
            number: 0
        },

        Hat = {
            name: "Ladies Hat",
            value: 22,
            img: "./kepek/ralphHat.png",
            osztaly: "Accessory",
            onsale: true,
            salevalue: 16,
            number: 0
        },
        Jacket1 = {
            name: "Leather Jacket",
            value: 100,
            img: "./kepek/ralphJack.png",
            osztaly: "Clothing",
            onsale: true,
            salevalue: 49,
            number: 0
        },
        Top = {
            name: "Printed Tops",
            value: 75,
            osztaly: "Casual",
            img: "./kepek/ralphTop.png",
            onsale: false,
            number: 0
        },
        Top2 = {
            name: "Woman Tops",
            value: 45,
            osztaly: "Casual",
            img: "./kepek/ralphTop2.png",
            onsale: false,
            number: 0
        },
        Pulcsi = {
            name: "Men's Pullover",
            value: 60,
            img: "./kepek/pulcsika.jpg",
            osztaly: "Casual",
            onsale: true,
            salevalue: 49,
            number: 0
        },
        Blackshirt = {
            name: "Black T-Shirt",
            value: 40,
            img: "./kepek/blackshirt.jpg",
            osztaly: "Casual",
            onsale: false,
            number: 0
        },
        BlueShirt = {
            name: "Blue Shirt",
            value: 45,
            img: "./kepek/keking.jpg",
            osztaly: "Clothing",
            onsale: false,
            number: 0
        },
        Dress = {
            name: "Dress",
            value: 120,
            img: "./kepek/dress.jpg",
            osztaly: "Clothing",
            onsale: true,
            salevalue: 79,
            number: 0
        },
        Zako = {
            name: "Black Coat",
            value: 150,
            img: "./kepek/zako.jpg",
            osztaly: "Clothing",
            onsale: false,
            number: 0
        },
        Legs = {
            name: "Stylish Leggings",
            value: 110,
            img: "./kepek/leggings.jpg",
            osztaly: "Clothing",
            onsale: false,
            number: 0
        },
        Jacket2 = {
            name: "Puffer Jacket",
            value: 80,
            img: "./kepek/puffer.png",
            osztaly: "Clothing",
            onsale: false,
            number: 0
        },
        Accessory2 = {
            name: "Fake Diamond Jewelry Set",
            value: 500,
            img: "./kepek/Accesoriesmodel1.png",
            osztaly: "Accessory",
            onsale: true,
            salevalue: 250,
            number: 0
        },
        Accessory3 = {
            name: "Sapphire Necklace",
            value: 400,
            img: "./kepek/Accesoriesmodel2.png",
            osztaly: "Accessory",
            onsale: false,
            number: 0
        },
        Accessory4 = {
            name: "Golden Bracelet",
            value: 540,
            img: "./kepek/Accesoriesmodel3.png",
            osztaly: "Accessory",
            onsale: false,
            number: 0
        },
        Accessory5 = {
            name: "Classy Hat",
            value: 220,
            img: "./kepek/Accesoriesmodel4.png",
            osztaly: "Accessory",
            onsale: false,
            number: 0
        },
        Accessory6 = {
            name: "Bucket hat",
            value: 50,
            img: "./kepek/Accesoriesmodel5.png",
            osztaly: "Accessory",
            onsale: true,
            salevalue: 44,
            number: 0
        },
        Ferfi1 = {
            name: "Wool Sweater",
            value: 120,
            img: "./kepek/Ferfi1.PNG",
            osztaly: "Men",
            onsale: false,
            number: 0
        },
        Ferfi2 = {
            name: "Black T-Shirt",
            value: 50,
            img: "./kepek/Ferfi2.PNG",
            osztaly: "Men",
            onsale: true,
            salevalue: 44,
            number: 0
        },
        Ferfi3 = {
            name: "Yellowish T-Shirt",
            value: 50,
            img: "./kepek/Ferfi3.PNG",
            osztaly: "Men",
            onsale: false,
            number: 0
        },
        Ferfi4 = {
            name: "Green Shorts",
            value: 70,
            img: "./kepek/Ferfi4.jpg",
            osztaly: "Men",
            onsale: false,
            number: 0
        },
        Ferfi5 = {
            name: "White T-Shirt",
            value: 60,
            img: "./kepek/Ferfi5.jpg",
            osztaly: "Men",
            onsale: false,
            number: 0
        },
        Ferfi6 = {
            name: "Green Shirt",
            value: 110,
            img: "./kepek/Ferfi6.PNG",
            osztaly: "Men",
            onsale: true,
            salevalue: 89,
            number: 0
        },
        No1 = {
            name: "White Sweater",
            value: 100,
            img: "./kepek/No1.jpg",
            osztaly: "Women",
            onsale: false,
            number: 0
        },
        No2 = {
            name: "Black Dress",
            value: 170,
            img: "./kepek/No2.jpg",
            osztaly: "Women",
            onsale: true,
            salevalue: 149,
            number: 0
        },
        No3 = {
            name: "Pink Top",
            value: 60,
            img: "./kepek/No3.PNG",
            osztaly: "Women",
            onsale: false,
            number: 0
        },
        No4 = {
            name: "Flared Jeans",
            value: 130,
            img: "./kepek/No4.PNG",
            osztaly: "Women",
            onsale: false,
            number: 0
        },
        No5 = {
            name: "Grey Summer Dress",
            value: 70,
            img: "./kepek/No5.PNG",
            osztaly: "Women",
            onsale: false,
            number: 0
        },
        No6 = {
            name: "Crimson Plussize Dress",
            value: 140,
            img: "./kepek/No6.PNG",
            osztaly: "Women",
            onsale: true,
            salevalue: 119,
            number: 0
        }
    ]
    let alcim = document.getElementById("alcim")
    let results = document.getElementById("res")
    let melyikoldal = document.getElementById("hol")
    let CurrentT = []
    if(melyikoldal.className == "Shop"){
        for (let index = 0; index < Tomb.length; index++) {
                CurrentT.push(Tomb[index])
        }
    }
    if(melyikoldal.className == "Clothing"){
    for (let index = 0; index < Tomb.length; index++) {
        if (Tomb[index].osztaly == "Clothing") {
            CurrentT.push(Tomb[index])
        }
    }
    }
    if(melyikoldal.className == "Women"){
    for (let index = 0; index < Tomb.length; index++) {
        if (Tomb[index].osztaly == "Women") {
            CurrentT.push(Tomb[index])
        }
    }
    }
    if(melyikoldal.className == "Casual"){
    for (let index = 0; index < Tomb.length; index++) {
        if (Tomb[index].osztaly == "Casual") {
            CurrentT.push(Tomb[index])
        }
    }
    }
    if(melyikoldal.className == "Accessories"){
    for (let index = 0; index < Tomb.length; index++) {
        if (Tomb[index].osztaly == "Accessory") {
            CurrentT.push(Tomb[index])
        }
    }
    }
    if(melyikoldal.className == "Men"){
    for (let index = 0; index < Tomb.length; index++) {
        if (Tomb[index].osztaly == "Men") {
            CurrentT.push(Tomb[index])
        }
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
            button.onclick=function addtocart(){
                if(StringifyTomb.includes(TermekTomb[i])){
                    TermekTomb[i].number++
                    let jsonString = JSON.stringify(Object.assign({},StringifyTomb))
                    localStorage.setItem('Termekek', jsonString)

                }
                else{
                    TermekTomb[i].number++
                    StringifyTomb.push(TermekTomb[i])
                    let jsonString = JSON.stringify(Object.assign({},StringifyTomb))
                    localStorage.setItem('Termekek', jsonString)

                }
                
            }
            szivikon.onclick = function(){
                if(Wishtomb.includes(TermekTomb[i])){
                    alert("A termék már a wishlisteden van!")
                }
                else{
                    Wishtomb.push(TermekTomb[i])
                    let WishString = JSON.stringify(Object.assign({},Wishtomb))
                    localStorage.setItem('Wishtermek', WishString)

                }
            }

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
    Feltoltes(CurrentT)
    results.innerHTML = "Showing all "+ CurrentT.length + " results"
    alcim.innerHTML = melyikoldal.className
    let resultT = CurrentT
    function Filter(){
        resultT = Filterezes(CurrentT)
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
        return result
    }
    sort = document.getElementById("sort")
    function Rendezes(){
    $("#kepdiv").empty();
        if(sort.value == "def" ){
            Feltoltes(resultT)
            results.innerHTML = "Showing all "+ resultT.length + " results"
        }
        if(sort.value == "desc"){
            var tempTomb = resultT.slice()
            Feltoltes(tempTomb.sort(function (a,b){return b.value - a.value}))
            results.innerHTML = "Showing all "+ resultT.length + " results"
        }
        if(sort.value == "asc"){
            var tempTomb = resultT.slice()
            Feltoltes(tempTomb.sort(function (a,b){return a.value - b.value}))
            results.innerHTML = "Showing all "+ resultT.length + " results"
        }
        if(sort.value == "Aasc"){
            var tempTomb = resultT.slice()
            Feltoltes(tempTomb.sort((a, b) => a.name.localeCompare(b.name)))
            results.innerHTML = "Showing all "+ tempTomb.length + " results"
        }
        if(sort.value == "Adesc"){
            var tempTomb = resultT.slice()
            Feltoltes(tempTomb.sort((a, b) => b.name.localeCompare(a.name)))
            results.innerHTML = "Showing all "+ resultT.length + " results"
        }
    }
}


function updateCart() {
    let jsonString = JSON.stringify(StringifyTomb);
    localStorage.setItem('Termekek', jsonString);

    $("#itemdiv").empty();
    cartfelt(StringifyTomb);  
}
function updateWish(){
    let WishString = JSON.stringify(Wishtomb);
    localStorage.setItem('Wishtermek', WishString);

    $("#wish").empty();
    wishfelt(Wishtomb)
}

let shippingdiv = document.getElementById("shippingcost")
let subtotaldiv = document.getElementById("subtotalcost")
let totaldiv = document.getElementById("totalcost")
let total = 0
let shipping = 10
let subtotal = 0
let bal = document.getElementsByClassName("balra")[0]

function cartfelt(list){
    subtotal = 0
    total = 0
    if(!StringifyTomb.length){
        shipping = 0
        shippingdiv.innerHTML = "Shipping: "+shipping+"$"
        subtotaldiv.innerHTML = "Subtotal: "+subtotal+"$"
        totaldiv.innerHTML = "Grand total: "+total+"$"
    }
    
    
        
    
    for (let i = 0; i < list.length; i++) {
        let termekdiv = document.createElement("div")
        let kosarimg = document.createElement("img")
        let szovegdiv = document.createElement("div")
        let eltavolit = document.createElement("button")
        let PluszB = document.createElement("button")
        let MinuszB = document.createElement("button")
        let alsosordiv = document.createElement("div")
        let Count = document.createElement("p")
        let eltavolitszam = i
        
        Count.id = "CountP"
        MinuszB.innerText= "-"
        MinuszB.onclick = function CountLe(){
            if(StringifyTomb[eltavolitszam].number > 1){
            
            StringifyTomb[eltavolitszam].number--
            
            updateCart()
            }
        }
        MinuszB.className = "CountB"
        PluszB.className = "CountB"
        PluszB.innerText = "+"
        PluszB.onclick = function CountFel(){
            StringifyTomb[eltavolitszam].number++
            updateCart()
        }
        

        eltavolit.onclick = function Eltavolit(){
            StringifyTomb.splice(eltavolitszam,1)
            updateCart()
        }
        eltavolit.innerHTML = "Eltávolít"
        eltavolit.id = "XButton"
        
        termekdiv.className = "term1"
        kosarimg.className="kepp1"
        kosarimg.src = list[i].img
        szovegdiv.className = "szov1"
        if (list[i].onsale==true) {
            szovegdiv.innerHTML = list[i].name+'<br> Price: '+list[i].salevalue*list[i].number+'$'
            subtotal += list[i].salevalue*list[i].number
        }
        else{
            szovegdiv.innerHTML = list[i].name+'<br> Price: '+list[i].value *list[i].number+'$'
            subtotal += list[i].value*list[i].number
        }
        alsosordiv.className = "alsosor"
        alsosordiv.innerHTML='Size: M <br>Count: '
        Count.innerHTML = list[i].number
        alsosordiv.appendChild(MinuszB)
        alsosordiv.appendChild(Count)
        alsosordiv.appendChild(PluszB)

        bal.appendChild(termekdiv)
        termekdiv.appendChild(kosarimg)
        termekdiv.appendChild(szovegdiv)
        szovegdiv.appendChild(alsosordiv)
        szovegdiv.appendChild(eltavolit)
        if(subtotal >= 50){
            shipping = 0
        }

        total = subtotal +shipping
        shippingdiv.innerHTML = "Shipping: "+shipping+"$"
        subtotaldiv.innerHTML = "Subtotal: "+subtotal+"$"
        totaldiv.innerHTML = "Grand total: "+total+"$"
    }
    let contdiv = document.createElement("div")
    let conta = document.createElement("a")
    let contbutt = document.createElement("button")

    contdiv.className="contgomb"
    conta.href="./shop.html"
    contbutt.className="gombcont"
    contbutt.innerHTML='CONTINUE SHOPPING'

    bal.appendChild(contdiv)
    contdiv.appendChild(conta)
    conta.appendChild(contbutt)


}
let bal2 = document.getElementById("wish")

function wishfelt(list){
    
    for (let i = 0; i < list.length; i++) {
        let termekdiv = document.createElement("div")
        let kosarimg = document.createElement("img")
        let szovegdiv = document.createElement("div")
        let eltavolit = document.createElement("button")
        let alsosordiv = document.createElement("div")
        let eltavolitszam = i
        
        eltavolit.onclick = function Eltavolit(){
            Wishtomb.splice(eltavolitszam,1)
            updateWish()
        }
        eltavolit.innerHTML = "Eltávolít"
        eltavolit.id = "XButton"
        termekdiv.className = "term1"
        kosarimg.className="kepp1"
        kosarimg.src = list[i].img
        szovegdiv.className = "szov1"
        if (list[i].onsale==true) {
            szovegdiv.innerHTML = list[i].name+'<br> Price: '+list[i].salevalue*list[i].number+'$'
            
        }
        else{
            szovegdiv.innerHTML = list[i].name+'<br> Price: '+list[i].value *list[i].number+'$'
            
        }
        alsosordiv.className = "alsosor"
        alsosordiv.innerHTML='Size: M <br>Count: '+ list[i].number

        bal2.appendChild(termekdiv)
        termekdiv.appendChild(kosarimg)
        termekdiv.appendChild(szovegdiv)
        szovegdiv.appendChild(alsosordiv)
        szovegdiv.appendChild(eltavolit)

    
    }
    let contdiv = document.createElement("div")
    let conta = document.createElement("a")
    let contbutt = document.createElement("button")

    contdiv.className="contgomb"
    conta.href="./shop.html"
    contbutt.className="gombcont"
    contbutt.innerHTML='CONTINUE SHOPPING'

    bal2.appendChild(contdiv)
    contdiv.appendChild(conta)
    conta.appendChild(contbutt)



}
//checkout
let kozep = document.getElementsByClassName("Vasarolt_targyak")[0]
let vegsoosszeg = 0;
function checkfeltolt(list){
    vegsoosszeg = 0; 
    kozep.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        let termekdiv = document.createElement("div")
        let kosarimg = document.createElement("img")
        let szovegdiv = document.createElement("div")
        let eltavolit = document.createElement("button")
        let alsosordiv = document.createElement("div")
        let eltavolitszam = i
        eltavolit.innerHTML = "Eltávolít"
        eltavolit.id = "XButton"
        
        termekdiv.className = "term1"
        kosarimg.className="kepp1"
        kosarimg.src = list[i].img
        szovegdiv.className = "szov1"
        if (list[i].onsale==true) {
            szovegdiv.innerHTML = list[i].name+'<br> Price: <span class="Itemar">'+list[i].salevalue*list[i].number+'</span>$'
            vegsoosszeg+= list[i].salevalue*list[i].number
        }
        else{
            szovegdiv.innerHTML = list[i].name+'<br> Price: <span class="Itemar">'+list[i].value *list[i].number+'</span>$'
            vegsoosszeg+= list[i].value*list[i].number
        }
        alsosordiv.className = "alsosor"
        alsosordiv.innerHTML='Size: M <br>Count: '+ list[i].number
        eltavolit.onclick = function Eltavolit(){
           StringifyTomb.splice(eltavolitszam, 1); 
            localStorage.setItem('Termekek', JSON.stringify(StringifyTomb));
            
         checkfeltolt(StringifyTomb);
         vegsoosszeg = 0; 
            
            
        }
        kozep.appendChild(termekdiv)
        termekdiv.appendChild(kosarimg)
        termekdiv.appendChild(szovegdiv)
        szovegdiv.appendChild(alsosordiv)
        szovegdiv.appendChild(eltavolit)
       
        
    }
      
    document.getElementById("Osszesosszeg").innerHTML = vegsoosszeg;
        
}
function Cartteljestorles(){
    StringifyTomb = []
    localStorage.setItem('Termekek', JSON.stringify(StringifyTomb));
    localStorage.setItem('Cost', 0);
    document.getElementById("Osszesosszeg").innerHTML = 0;
    kozep.innerHTML = "";
    alert("Sikeres Vásárlás! Köszönjük, hogy minket választottál!")
}