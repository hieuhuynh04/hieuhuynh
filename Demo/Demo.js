// khai báo biến var , let , const 
// var f ; // Undefined
// var a = "hello world!";  // String
// var b = 1 ; // Number
// var c = true ; // Boolean
// var d = [1,2,3,4,5]; // Array
// var e = {
//     name : "Thanh",
//     age : 20
// }; // Object
// kiểm tra kiểu dữ liệu 
// alert(typeof b);
// if-else
// var a1 = "1";
// var a2 = 1;  
// bằng về giá trị nhưng khác về kiểu dữ liệu

// if(a1 === a2) {
//     console.log("true");
// }else {
//     console.log("false");
// }

/**
 * phạm vi hoạt động của biến và sự khác
 * nhau của var , let , const 
 *  var cho phép khai báo lại tên biến đó
 * const khai báo phải có giá trị
 * const không được gán lại giá trị
 */

// Hàm built-in.
//  alert("hàm");
// console.log("ham");
//  confirm("ham")
// var a = prompt("ban bao nhieu tuoi ?");
// console.log(a);
// Hàm tự đinh  nghĩa


 var a = 3; // biến toàn cục
function ham() {
  var c = 5; // Biến cục bộ
  console.log(a);
}
 {
    var r = 8; // Biến cục bộ
    console.log(r);
 }
ham();
document.write("<h1>hello</h1>");

// tạo một menu  món ăn cho khách hàng chon 

var a = prompt("1.ga rán 2.pizza 3.ca vien 4.muc 5.thoat");

switch(a) {
    case "1":
        alert("ga ran");
        break;
    case "2":
        alert("pizza");
        break;
    case "3":
        alert("ca vien");
        break;
    case "4":
        alert("muc");
        break;
    case "5":
        alert("thoat");
        break;
    default:
        alert("ban chon sai");
        break;
}