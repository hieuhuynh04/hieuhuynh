/**
 *  HTML DOM
 *   1. Element: ID, class, tag, css selector
 *                  HTML collection  NoList
 *   2. Attribute
 *   3. Text
 *      - innerText (Lấy ra các text trong thẻ không quan tâm thẻ con,và bỏ qua các thẻ bị hidden)
 *      - textContent (Lấy ra nguyên bản text node,có thể lấy cả các phần tử hidden )
 *      - innerHTML 
 */

// ---------------- VIDU --------------
// console.log(document);

var a = document.querySelector(".row");

var products = [
  {
    id : 1,
    name : "Iphone 12",
    price : 10000000,
    img : "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/campaign/Frame-knockout-desktop-226x500.png"
  },
  {
    id : 2,
    name : "Iphone 13",
    price : 10000000,
    img : "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/campaign/Frame-knockout-desktop-226x500.png"
  },
  {
    id : 3,
    name : "Iphone 14",
    price : 10000000,
    img : "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/campaign/Frame-knockout-desktop-226x500.png"
  },
  {
    id : 4,
    name : "Iphone 15",
    price : 10000000,
    img : "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/campaign/Frame-knockout-desktop-226x500.png"
  } 
]

 products.forEach((element) => {
     a.innerHTML += `
     <div class="col-3">
     <div class="card" style="width: 18rem;">
       <img src="${element.img}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>
   </div>
     `
 })


// const thanh = document.querySelector(".box .hung");
// console.log(thanh);

// var son = byClass.getElementsByTagName("h1")[2];
// console.log(son);
// son.innerHTML = ``;
// var box3 = byClass[2];
// var h1 = document.getElementsByTagName("h1");
// console.log(h1);
// var old = document.getElementById("old");
// var h1 = old.getElementsByTagName("p");
// var box = document.querySelector(".box h1:nth-child(3)");
// console.log(box);
// console.log(h2[0]);
  // var h1 = document.getElementsByTagName("h1");
  // console.log(h1);

// var byTagName = document.getElementsByTagName("h2"); // Trả về mảng HTML Collection
// console.log(byTagName[0]);
// var query = document.querySelectorAll('.box');
// console.log(query);
// var box = document.getElementsByClassName('box')[1];
// var byTagName = box.querySelector(".box h1:nth-child(2)");
// console.log(byTagName);
// var byTagName = document.querySelectorAll(".box h1:nth-child(2)"); // Trả về mảng NodeList
// console.log(byTagName);
// console.log(document.forms["form1-1"]);
// console.log(document.anchors); // thẻ  lấy mảng chứa thẻ a
// console.log(document.images);
// var box = document.querySelectorAll(".box");


// var box2 = box[1];
// console.log(box2.getElementsByTagName("h1")[0]);

// console.log(box.getElementsByTagName("h1")[0]);

// DOM attribute


// h1.title = "nam";
// h1.id = "son";
// h1.className = "red";
// h1.href = "nam";
// console.log(h1);
// h1.innerHTML = "<h1>hanh phuc</h1>  <h1>hello world 1</h1>";
// console.log(h1);
// var box2 = h1[1];
// var h1s = box2.getElementsByTagName("h1")[0];
// h1.className = "son";
// h1.id = "hello";
// h1.title = "hello";
// var heading = document.getElementsByClassName('heading')[0];
// console.log(heading);
// heading.className = "red";
// heading.href = "red";
// console.log(h1s);
// h1.id = "oke";
// h1.className = "name";
// h1.title= "hello"; // Với các attribute không hợp lệ sẽ ko được
// h1.href = "href";
// heading.setAttribute('class','hung');
// heading.setAttribute('href','hung');
// heading.setAttribute('data','hung');
// console.log(heading);
// Với các attribute không hợp lệ vẫn được
// console.log(h1.getAttribute('id'));

// DOM Text

// var h1 = document.querySelectorAll(".box h1:nth-child(3)")[1];
// console.log(h1);
// h1.innerText = "hanhphuc";
// h1.innerHTML = "<h1>duan</h1> <span></span>";
// console.log(h1.innerText);
// console.log(h1.innerText);
// console.log(h1.innerText);
/**
 * Thêm element
 *  - innerHTML (Thêm element vào thẻ cha)
 *  - outerHTML (Thay đổi thẻ cha)
 *  */

// var add = document.querySelector(".box");
// console.log(add);
// add.innerHTML = "<h1 class='duan'>${user.id}</h1>";
// add.outerHTML = "<h1 class='duan'>duan</h1>"; // Lấy ra trong bộ nhớ
// console.log(add.innerHTML);
// console.log(document.querySelector('.duan'));

// var than = document.querySelector(".box span");
// than.setAttribute ("class","span");
// console.log(than);

// var thanh = document.querySelectorAll('.box h2')[2];
//  thanh.innerText = 'thanh';
// console.log(thanh)
// var lai = document.querySelectorAll('.box p') [0];
// lai.innerText = 'toi la thanh';
// console.log (lai);
//  var head = document.getElementById("heading");
//  head.innerHTML = `<h1>toi da thay doi</h1>
//  <h1>toi da thay doi</h1>
//  <h1>toi da thay doi</h1>`;
// var kiem = document.querySelectorAll('.box span') [0];
// kiem.innerHTML = '<h1>hello world 1</h1>';
// console.log(kiem);
// var n = 16;
// var a = Math.sqrt(n);
// var b = parseInt(a);
// console.log(b);
// if(a == b) {
//   console.log("true");
// }else {
//   console.log("false");
// }

// function run(n){
//   var a = Math.sqrt(n);
//   var b = parseInt(a);
//    if(a == b) {
//       console.log("true");
//    }else {
//        console.log("false");
//    }
// }
// run(4);

// const array = [
//   {
//     id: 1,
//     name:"very",
//     status:false
//   },
//   {
//     id: 2,
//     name:"very",
//     status:true
//   },
//   {
//     id: 3,
//     name:"very",
//     status:false
//   },
//   {
//     id: 4,
//     name:"very",
//     status:true
//   },
// ]
// const viet = document.querySelector(".viet");

// array.map((element,index) => {
//   const img = element.status ? `./img/dadatban.png`:`./img/chuadatban.png`;
//   const text = element.status ? `order` : `booking`;
//   const demo = document.createElement("div");
//     demo.classList.add("box");
//    demo.innerHTML = `
//       <img src=${img} alt="">
//       <h1>${element.name}</h1>
//       <button>${text}</button>
//    `;
//    viet.appendChild(demo);
// });
