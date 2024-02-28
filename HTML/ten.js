//let var const

//let


var a = [
    {
       ảnh: link,
        
    },
    {
        name: "name 1",
        age: 8
    }
];  //4


console.log(a)
let c = {
    name: 'Name',
    age: 8,
    c: true
}


function sum(a, b)
{
    
    return a+b;
}


var l = sum(5, 8);

console.log(l);

// var s = log(1, 6, 9);



// console.log(s)
var b = 'hello world';
// for(let i = 0; i < b.length ; i++){
//     console.log(i);
// }

// console.log()
//DOM

var divTag = document.getElementById('model');
var btn = document.getElementsByClassName('nut');
var h3 = document.getElementsByClassName('click');

//array: foreach, map
// array function// F8


// console.log(h3)
for(let i =0; i < btn.length; i++){
    btn[i].onclick = function(){
        divTag.style.display = 'flex';
    }

} 
var nuttat=document.getElementsByClassName('nut_2');
nuttat[0].onclick =function(){
    divTag.style.display='none';
}
var dauX = document.getElementsByClassName('xoa');
dauX[0].onclick=function(){
    divTag.style.display='none';
}
