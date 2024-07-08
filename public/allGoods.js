// window.onload=(()=>{
    
//     getBack[index].cart.map((identufy, i)=>{
//         if(identufy.id==womanWear[index].id){
//         console.log(womanWear[index].id);
//         document.getElementById(womanWear[index].id).innerHTML="Already in cart"
//         }
//         else{
//         document.getElementById(womanWear[index].id).innerHTML="Add to cart"
//         }
//     })
// })
let getBack = JSON.parse(localStorage.getItem('Eachuser'))
let index = localStorage.getItem('myIndex')

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
// const firebaseConfig = {
//     apiKey: "AIzaSyBULpuSuhp9NR_4BxvUAQmYXgM_5QNSWl8",
//     authDomain: "amirixs.firebaseapp.com",
//     projectId: "amirixs",
//     storageBucket: "amirixs.appspot.com",
//     messagingSenderId: "205625926314",
//     appId: "1:205625926314:web:888b935bff568969df66d3"
// };
// initializeApp(firebaseConfig);
// const auth = getAuth()
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log(user);
//     }
//     else {
//         window.location.href = "index.html"
//     }
// })

document.getElementById('signoutBtn').addEventListener('click', () => {
    signOut(auth)
    .then(()=>{
        console.log("Sign out");
        window.location.href="index.html"
    })
    .catch((err)=>{
        console.log(err);
    })
})
let manWear = [
    {
        id: 1,
        price: 7500,
        unitAdd: 40,
        description: `
        <div>
        <p>Head phone ₦7500<br>Available in black</p>
        <div class="d-flex"><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/headphon2.png" style="width:150px"/>`
    },
    {
        id: 2,
        price: 5000,
        unitAdd: 40,
        description: `
        <div>
        <p>Head phone ₦5000<br>Available in Pink</p>
        <div class="d-flex">
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"><i class="ri-star-line"></i></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/headphone4.png" style="width:150px"/>`
    },
    {
        id: 3,
        price: 6500,
        unitAdd: 40,
        description: `
       <div>
       <p>Head phone ₦6500<br>Available in Red</p>
       <div class="d-flex">
       <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
       <p></p>
       </div>
       `,
        image: `<img src="./Image folder/beautphone-removebg-preview.png" style="width:150px"/>`
    },
    {
        id: 4,
        price: 4000,
        unitAdd: 40,
        description: `
       <div>
       <p>Head phone ₦4000<br>Available in Black</p>
       <div class="d-flex">
       <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i></i><i class="ri-star-line"><i class="ri-star-line"></i></i></div>
       <p></p>
       </div>
       `,
        image: `<img src="./Image folder/headphone 4.png" style="width:220px; position:relative;top:0px"/>`
    },
    {
        id: 5,
        price: 7000,
        unitAdd: 40,
        description: `
       <div>
       <p>Head phone ₦7000<br>Available in Blue</p>
       <div class="d-flex">
       <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
       <p></p>
       </div>
       `,
        image: `<img src="./Image folder/beaut2.png" style="width:150px"/>`
    },
]

let womanWear = [
    {
        id: 6,
        price: 203000,
        unitAdd: 28,
        description: `
        <div>
        <p>Iphone XX max ₦203,000<br>Available in white</p>
        <div class="d-flex">
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/xx max.jpg"/>`,
    },
    {
        id: 7,
        price: 755625,
        unitAdd: 34,
        description: `
        <div>
        <p>Iphone 14Pro  max ₦755,625<br>Available in white</p>
        <div class="d-flex">
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/girlcompletcloth1-removebg-preview.jpg" style="height:230px"/>`,
    },
    {
        id: 8,
        price: 104500,
        unitAdd: 59,
        description: `
         <div>
         <p>Spark10  max ₦104,500<br>Available in white</p>
         <div class="d-flex">
         <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
         <p></p>
         </div>
         `,
        image: `<img src="./Image folder/spark10.png"/>`,
    },
    {
        id: 9,
        price: 170000,
        unitAdd: 39,
        description: `
           <div>
           <p>Infinix  max ₦170,000<br>Available in white</p>
           <div class="d-flex">
           <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
           <p></p>
           </div>
           `,
        image: `<img src="./Image folder/infinix.jpg"/>`,
    },
    {
        id: 10,
        price: 550000,
        unitAdd: 60,
        description: `
        <div>
        <p>Iphone 13 ₦450,450<br>Available in white</p>
        <div class="d-flex">
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/Phone band.PNG" style="height:220px"/>`,
    },
    {
        id: 10,
        price: 450000,
        unitAdd: 40,
        description: `
        <div>
        <p>22Ultra ₦450,450<br>Available in white</p>
        <div class="d-flex">
        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i></i></div>
        <p></p>
        </div>
        `,
        image: `<img src="./Image folder/22altra.PNG" style="height:220px;width:150px"/>`,
    },
]
let canvas = [
    {
        id: 11,
        price: 7500,
        unitAdd: 100,
        description: "Highheel ₦7,500",
        image: `<img src="./Image folder/highheel1.webp"/>`
    },
    {
        id: 12,
        price: 22000,
        unitAdd: 100,
        description: "Canvas ₦22,000",
        image: `<img src="./Image folder/canvas5.jpeg"/>`
    },
    {
        id: 13,
        price: 10500,
        unitAdd: 100,
        description: "Highheel ₦10,500",
        image: `<img src="./Image folder/highheel2.webp"/>`
    },
    {
        id: 14,
        price: 12500,
        unitAdd: 100,
        description: "Canvas ₦12,500",
        image: `<img src="./Image folder/canvas3.jpg"/>`
    },
    {
        id: 15,
        price: 15000,
        unitAdd: 100,
        description: "Highheel ₦15,000",
        image: `<img src="./Image folder/hihgheel3.jpg"/>`
    },
    {
        id: 16,
        price: 16000,
        unitAdd: 100,
        description: "Highheel ₦16,000",
        image: `<img src="./Image folder/highheel4.jpg"/>`,
    },
    {
        id: 17,
        price: 18000,
        unitAdd: 100,
        description: "Canvas ₦18,000",
        image: `<img src="./Image folder/canvas2-removebg-preview.png"/>`,
    },
    {
        id: 19,
        price: 12500,
        unitAdd: 100,
        description: "Canvas ₦12,500",
        image: `<img src="./Image folder/canvas3.jpg"/>`,
    },
    {
        id: 20,
        price: 15000,
        unitAdd: 100,
        description: "Highheel ₦15,000",
        image: `<img src="./Image folder/hihgheel3.jpg"/>`,
    },
    {
        id: 18,
        price: 7500,
        unitAdd: 100,
        description: "Highheel ₦25,000",
        image: `<img src="./Image folder/canvas1-removebg-preview.png"/>`,
    },
]

let allWatch = [
    {
        id: 21,
        price: 7500,
        unitAdd: 120,
        description: `
        <div class="mt-4">
        <p>Black max ₦7,500<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/watch2.webp"/>`,
    },
    {
        id: 22,
        price: 10500,
        unitAdd: 80,
        description: `
        <div class="mt-3">
        <p>Gold max ₦10,500<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/watch9.jpg "/>`,
    },
    {
        id: 23,
        price: 5000,
        unitAdd: 95,
        description: `
        <div class="mt-4">
        <p>Smart WATCH ₦5,500<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/clock2.webp"/>`,
    },
    {
        id: 24,
        price: 9000,
        unitAdd: 79,
        description: `
        <div style="margin-top:28px">
        <p>Gold max ₦9,000<br>Available in Gold</p>
        </div>
        `,
        image: `<img src="./Image folder/clock1.jpg"/>`,
    },
    {
        id: 25,
        price: 6000,
        unitAdd: 118,
        description: `
        <div class="mt-3">
        <p>Smart WATCH ₦6,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/watch7.jpg"/>`
    },
    {
        id: 26,
        price: 7500,
        unitAdd: 123,
        description: `
        <div class=""n style="margin-top:70px">
        <p>Gold max ₦7,500<br>Available in black$white</p>
        </div>
        `,
        image: `<img src="./Image folder/watch8.webp" />`
    },
    {
        id: 27,
        price: 7500,
        unitAdd: 67,
        description: `
        <div class="mt-3">
        <p>Gold max ₦9,000<br>Available in black$gold</p>
        </div>
        `,
        image: `<img src="./Image folder/watch4.jpg"/>`,
    },
    {
        id: 28,
        price: 10500,
        unitAdd: 80,
        description: `
        <div style="margin-top:55px">
        <p>Gold max ₦10,500<br>Available in gold</p>
        </div>
        `,
        image: `<img src="./Image folder/watch9.jpg"/>`,
    },
    {
        id: 29,
        price: 7500,
        unitAdd: 100,
        description: `
        <div style="margin-top:60px">
        <p>Smart WATCH ₦6,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/watch10.jpg"/>`,
    },
]
let allAccessories = [

    {
        id: 31,
        price: 700000,
        unitAdd: 50,
        description: `Full gym instrument package <br> ₦700,000`,
        image: `<img src="./Image folder/gym package.jpg"/>`
    },
    {
        id: 32,
        price: 350000,
        unitAdd: 75,
        description: `Full home appliances package <br> ₦350,000`,
        image: `<img src="./Image folder/appliances1-removebg-preview.png" style="width:450px"/>`
    },
    {
        id: 33,
        price: 400000,
        unitAdd: 70,
        description: `Full electro gadget package <br> ₦400,000`,
        image: `<img src="./Image folder/gadgets.webp" style="width:380px"/>`
    },
]

let imageGif = [
    {
        id: 34,
        price: 0,
        unitAdd: 0,
        image: `<img src="./Image folder/gif 3.gif"/>`
    },
    {
        id: 35,
        price: 0,
        unitAdd: 0,
        image: `<img src="./Image folder/gif1.gif" style="height:375px" class="gif1"/>`
    },
]

let tops = [
    {
        id: 37,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>CalvinK top ₦4,000<br>Available in yellow</p>
        </div>
        `,
        image: `<img src="./Image folder/top1.jpg"/>`
    },
    {
        id: 38,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>CalvinK top ₦4,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/top2.jpg"/>`
    },
    {
        id: 39,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>CalvinK top ₦4,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/top3.jpg" />`
    },
    {
        id: 40,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>NewFord top ₦4,000<br>Available in brown</p>
        </div>
        `,
        image: `<img src="./Image folder/op8.jpg" style="width:140px"/>`
    },
    {
        id: 41,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>NewFord top ₦4,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/top4.jpg" style="width:140px"/>`
    },
    {
        id: 42,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>NewFord top ₦4,000<br>Available in white</p>
        </div>
        `,
        image: `<img src="./Image folder/top6.jpg" style="width:130px"/>`
    },
    {
        id: 43,
        price: 7000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>NewFord top ₦4,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/top7.jpg" style="width:145px"/>`
    },
    {
        id: 44,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>NewFord top ₦4,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/top4.jpg" style="width:140px"/>`
    },
    {
        id: 45,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>Paris top ₦4,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/top9.jpg"/>`
    },
    {
        id: 46,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>Stone IS top ₦4,000<br>Available in white</p>
        </div>
        `,
        image: `<img src="./Image folder/op10.jpg"/>`
    },
    {
        id: 47,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>Lous vuiton ₦4,000<br>Available in aqua</p>
        </div>
        `,
        image: `<img src="./Image folder/top11.jpg"/>`
    },
    {
        id: 48,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>Paris top ₦4,000<br>Available in white</p>
        </div>
        `,
        image: `<img src="./Image folder/top12.jpg" style="width:140px"/>`
    },
    {
        id: 49,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p> CELINE top ₦4,000<br>Available in white</p>
        </div>
        `,
        image: `<img src="./Image folder/top13.jpg"/>`
    },
    {
        id: 50,
        price: 4000,
        unitAdd: 100,
        description: `
        <div style="margin-top:10px">
        <p>GUCCI top ₦4,000<br>Available in black</p>
        </div>
        `,
        image: `<img src="./Image folder/top14.jpg" style="width:130px"/>`
    },
]
let car = [
    {
        id: 51,
        price: 7500,
        unitAdd: 0,
        description: "Highheel",
        image: `<img src="./Image folder/bugatti-removebg-preview.png" class="moto1"/>`
    },
    {
        id: 52,
        price: 7500,
        unitAdd: 0,
        description: "Highheel",
        image: `<img src="./Image folder/buga4-removebg-preview.png"/>`
    },
    {
        id: 53,
        price: 7500,
        unitAdd: 0,
        description: "Highheel",
        image: `<img src="./Image folder/buga2-removebg-preview.png" class="moto"/>`
    },
    {
        id: 54,
        price: 7500,
        unitAdd: 0,
        description: "Highheel",
        image: `<img src="./Image folder/ferari-removebg-preview.png"/>`
    },
]
let allbags = [
    {
        id: 55,
        price: 10000,
        unitAdd: 50,
        description: "Available at ₦10,000",
        image: `<img src="./Image folder/bag1.jpg"/>`
    },
    {
        id: 56,
        price: 15000,
        unitAdd: 66,
        description: "Available at ₦15,000",
        image: `<img src="./Image folder/bag2.jpg"/>`
    },
    {
        id: 57,
        price: 7500,
        unitAdd: 110,
        description: "Available at ₦7,500",
        image: `<img src="./Image folder/bag3.jfif"/>`
    },
    {
        id: 58,
        price: 15000,
        unitAdd: 80,
        description: "Available at ₦15,000",
        image: `<img src="./Image folder/bag4.PNG" style="width:217px"/>`
    },
    {
        id: 59,
        price: 17000,
        unitAdd: 40,
        description: "Available at ₦17,000",
        image: `<img src="./Image folder/bag5.PNG" style="width:225px"/>`
    },
]
manWear.map((eachManwear, index) => {
    dispManwear.innerHTML += `
    <div class="grid shadow">
    <h1>${eachManwear.image}</h1>
    ${eachManwear.description}
    <div style="display:flex; justify-content:center; margin-top:px">
    <button class="btn man" onclick="cartOne(${index})" style="background-color:navy;color:white" id="${eachManwear.id}">Add to cart</button>
    <button class="btn  btn-light" onclick="cartOnei(${index})" style="color:white; background-color:navy; height:40px;">View</button>
    </div>
    </div>
    `
})
for (let index = 0; index < womanWear.length; index++) {
    dispwomanWear.innerHTML += `
    <div class="p-2">
    <div class="innerScroll p-2">
       ${womanWear[index].image}
       <div class="d-flex">
       ${womanWear[index].description}
       </div>
       <div style="display:flex; justify-content:center; margin-top:px">
       <button class="btn  btn-light" onclick="cartTwo(${index})" id="${womanWear[index].id}" style="color:white; background-color:navy; height:40px;">Add to cart</button>
       <button class="btn  btn-light" onclick="cartTwoi(${index})" style="color:white; background-color:navy; height:40px;">View</button>
       </div>
    <div>
    </div>
`
}
car.map((car, i) => {
    dispCar.innerHTML += `
    <div class="cardiv shadow">
    <h4 style="text-align:center">Coming Soon</h1>
    <h1 style="text-align:center">
    ${car.image}
    <h1>
    </div>
    `
})
allWatch.map((clock, i) => {
    dispclock.innerHTML += `
    <div class="clockDiv container">
    <h1 style="text-align:center">
    ${clock.image}
    <div class="">
    ${clock.description}
    <div class="clocking">
    <div style="display:flex; justify-content:center; margin-top:px">
    <button class="form-control btn" onclick="cartThree(${i})" id="${clock.id}" style="background-color: navy; color: white;">Add to cart</button>
    <button class="form-control btn" onclick="cartThreei(${i})" style="background-color: navy; color: white;">View</button>
    <div>
    </div>
    <h1>
    </div>
    `
})
tops.map((top, i) => {
    topdisp.innerHTML += `
    <div class="topDiv container">
    <h1 style="text-align:center">
    ${top.image}
    <div class="">
    ${top.description}
    <div class="clocking2">
    <button class="form-control btn"  onclick="cartFourTop(${i})" id="shirt" style="background-color: navy; color: white;">Add to cart</button>
    <div>
    </div>
    <h1>
    </div>
    `
})

imageGif.map((gif, i) => {
    dispGif.innerHTML += `
    <div class="container">
      ${gif.image}
    </div>
    `
})

allbags.map((bag, i) => {
    dispbag.innerHTML += `
    <div class="container">
    ${bag.image} 
    <p>${bag.description}</p>
    
    <button class="form-control btn" onclick="cartFive(${i})" id="purse" style="background-color: navy; color: white;">Add to cart</button>
    </div>
    `
})
allAccessories.map((all, i) => {
    carosel1.innerHTML += `
    <div class="carose">
    <p>${all.image}</p>
    <p>${all.description}</p>
    <button class="form-control btn" onclick="cartSix(${i})" id="bundle" style="background-color: navy; color: white;">Add to cart</button>
    </div>
    `
})
canvas.map((shoe ,i) => {
    dispshoe.innerHTML += `
    <div class="mt-4">
     ${shoe.image}
     <p>${shoe.description}</p>
     <button class="form-control btn" onclick="cartSeven(${i})" id="bata" style="background-color: navy; color: white;">Add to cart</button>
    </div>
    `
})

const cart = () => {
    load.style.display="block"
    load.style.transition="all 0.3s ease"
    general.style.display="none"
    load.innerHTML=`
    <div style="  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;">
    <img src="./Image folder/loading-waiting.gif" alt="" style=" width:200px">
<h1 style="color:navy; text-align:center; font-size:45px">Loading</h3>
    </div>
    <div style="width:100%; height:100%; position:absolute; top:0%; left:0%; background-color:rgba(0, 0, 0, 0.409)">

    </div>
    `
    setTimeout(function(){window.location.href = "cart.html"}, 1500)
    
}
const cartOne = (headphone) => {
    if(document.getElementById(manWear[headphone].id).innerHTML=="Add to cart"){
        getBack[index].cart.push(manWear[headphone])
        console.log(getBack[index].cart);
        localStorage.setItem('Eachuser', JSON.stringify(getBack))
        document.getElementById(manWear[headphone].id).innerHTML="Remove from cart"
    }
    else if(document.getElementById(manWear[headphone].id).innerHTML=="Remove from cart"){
        getBack[index].cart.splice(headphone,1)
        console.log(getBack[index].cart);
        localStorage.setItem('Eachuser', JSON.stringify(getBack))
        document.getElementById(manWear[headphone].id).innerHTML="Add to cart"
    }
}
const cartTwo = (Iphone) => {
    if(document.getElementById(womanWear[Iphone].id).innerHTML=="Add to cart"){
        getBack[index].cart.push(womanWear[Iphone])
        console.log(getBack[index].cart);
        localStorage.setItem('Eachuser', JSON.stringify(getBack))
        document.getElementById(womanWear[Iphone].id).innerHTML="Already in cart"
    }
    else if(document.getElementById(womanWear[Iphone].id).innerHTML=="Already in cart"){
       // just dont do anything //
    }
}
const cartThree = (clok) => {
    if(document.getElementById(allWatch[clok].id).innerHTML=="Add to cart"){
        getBack[index].cart.push(allWatch[clok])
        localStorage.setItem('Eachuser', JSON.stringify(getBack))
        document.getElementById(allWatch[clok].id).innerHTML="Already in cart"
    }
    else if( document.getElementById(allWatch[clok].id).innerHTML="Already in cart"){
        // just dont do anything //
    }
}
const cartFourTop = (toping) => {
    getBack[index].cart.push(tops[toping])
    console.log(toping);
    localStorage.setItem('Eachuser', JSON.stringify(getBack))
}
const cartFive = (bag) => {
    getBack[index].cart.push(allbags[bag])
    localStorage.setItem('Eachuser', JSON.stringify(getBack))
}
const cartSix = (acess) => {
    getBack[index].cart.push(allAccessories[acess])
    localStorage.setItem('Eachuser', JSON.stringify(getBack))
}
const cartSeven = (shoes) => {
    getBack[index].cart.push(canvas[shoes])
    localStorage.setItem('Eachuser', JSON.stringify(getBack))
}
let eachpro=[]
const cartOnei=(pro)=>{
    eachpro.pop()
    eachpro.push(manWear[pro])
    getBack[index].eachCart=eachpro
    console.log(eachpro);
    localStorage.setItem('Eachuser' , JSON.stringify(getBack))
    window.location.href="checkout.html"
}
const cartTwoi=(pro)=>{
    eachpro.pop()
    eachpro.push(womanWear[pro])
    getBack[index].eachCart=eachpro
    console.log(eachpro);
    localStorage.setItem('Eachuser' , JSON.stringify(getBack))
    window.location.href="checkout.html"
}
load.style.transition="all 0.3s ease"
load.innerHTML=`
<div style="  position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
transition: all 0.3s ease;">
<img src="./Image folder/loading-waiting.gif" alt="" style=" width:200px">
<h1 style="color:navy; text-align:center; font-size:45px">Loading</h3>
</div>
<div style="width:100%; height:100%; position:absolute; top:0%; left:0%; background-color:rgba(0, 0, 0, 0.409)">
</div>
`
general.style.display="none"
setTimeout(function(){load.style.display="none", general.style.display="block"},2000)
function bod(){
    if(getBack[index].cart==""){
        dot.style.display="none"
        dot2.style.display="none"
    }
    else{
        getBack[index].cart.map((allcart, i)=>{
            dot.innerHTML=i+1
            dot2.innerHTML=i+1
        })
        dot.style.display="block"
        dot2.style.display="block"
    }
}
bod()