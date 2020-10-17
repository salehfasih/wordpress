// // chapter 38-42;
// // 1

// function power(a,b){

//     var pow=Math.pow(a,b);
//     document.write(pow);
// }
// power(2,3)
// // 2
// function leap_year(){

//     var year=prompt("enter your year");

//     if(year%2==0){
//         document.write("your hear  is  leap");
//     }
// }
// leap_year();

// // 3
//     var a=parseInt(2);
//     var b=parseInt(2);
//     var c=parseInt(2);


// function  area(){
//     function s(){
//     var s=(a+b+c)/2;
//     return s;
//     }
//     s();

//     var area2=s()*(s()-a)*(s()-b)*(s()-c);
//     document.write(area2);
    
        
//     }
// area();

// function result(){
//     var math=parseInt(prompt("enter your math marks:"));
//     var urdu=parseInt(prompt("enter your urdu marks:"));
//     var pst=parseInt(prompt("enter your pst marks:"));
//     var sum=math+urdu+pst;

//     function average(){
//         var average1=(math+urdu+pst)/3;
//         return average1;
//     }
//     average();
//     function percentage(){
//         var perc=parseInt(sum/parseInt(300)*parseInt(100));

//          return perc;
     
        

//     }

//     percentage();

//     document.write("The average number of the result is:"+average());
//     document.write("The percentage of the student is :"+percentage());
// }
// result();

// // 4
// document.write("<br>");
// function index_of(){
//     var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("welcome",0);
// document.write(n);
// }

// index_of();

// // vowel deleting 
// function vowel_delete(){
//     var strings = "My name is sualeh fasih and i am a full stack developer  .";                         
  
//      string = strings.replace( /[aeiou]/g, '' );              
  
//     document.write(string); 

// }
// vowel_delete();
// // 7 two vowels occurances;
// var string="Pleases read this application and give me gratuity ";
// var count=0;
// //  The distance between two cities (in km.) 
// var distance=prompt("enter distance in kilometer:");
// function meter(){

//     var metr=distance*1000;
//     document.write(metr);
// }
// meter();

// function feet(){

//     var feet=distance*3280.84;
//     document.write(feet);
// }
// feet();
// function inch(){
//     var inches=distance*39370.1;
//     document.write(inches);}
//     inch();
//     function cent_m(){

//         var centimetr=distance*100000;
//         document.write(centimetr);
//     }
//     cent_m();

//     // overtime pay of an employ;
//   function overtime(){
//     var rate=12;
//   var hours=40;
//   var overtime=rate*hours;
//   document.write(overtime);
//   }
//   document.write("<br>");
// //   10 currency notes denomation;

//  function currency(){
   
//     var Amount=parseFloat(prompt("enter your withdraw amount:"));
//     var count_100=parseInt(0);
//     var count_50=parseInt(0);
//     var count_10=parseInt(0);

//    while(Amount>=100){
      
//     count_100++;


//    Amount=Amount-100;

//    }


//      while(Amount>=50){
//         count_50++

//         Amount=Amount-100;

//      }

//      while(Amount>=10){
//          count_10++;
//          Amount=Amount-10;
//      }

//      document.write("You will have"+" "+count_100+""+"Hundred Notes"+" "+count_50+" "+"Fifty Notes"+""+count_10+""+"ten Notes");


//  } 
//  currency();
//  // chapter 43-48;
// // 2 delete element
// function del2(){
    
//     var a=document.getElementById("r2");
//     a.innerHTML="";
    
// }
// function del3(){

//     var a=document.getElementById("r3");
//     a.innerHTML="";
// }
// function del4(){

//     var a=document.getElementById("r4");
//     a.innerHTML="";
// }
// Display an image in browser. Change the picture on mouseover
// Show a counter in browser. Counter should increase on click on increase 
var c=parseInt(0);
function inc(){
    var e=document.getElementById("para");
    e.innerHTML=c++;
}
function dec(){
    var e=document.getElementById("para");
    e.innerHTML=c--;
}
// 49-52;
// signup form

function data(){
    var name=document.getElementById("name").value;
var password=document.getElementById("password").value;
var email=document.getElementById("email").value;
    document.write("Your data is received "+"<br>"+"name"+name+"<br>"+"password"+password+"<br>"+"email"+email);

    

}

// “Read more” button, full detail of that particular item will be displayed.  
function expand(){
    var para=document.getElementById("cattle");
    para.innerHTML="Cattle, or cows (female) and bulls (male), are the most common type of large domesticated ungulates. They are a prominent modern member of the subfamily Bovinae, are the most widespread species of the genus Bos, and are most commonly classified collectively as Bos taurus."
}

//  On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row. 
function submit(){
    var para=document.getElementById("cattle");
    para.innerHTML="Cattle, or cows (female) and bulls (male), are the most common type of large domesticated ungulates. They are a prominent modern member of the subfamily Bovinae, are the most widespread species of the genus Bos, and are most commonly classified collectively as Bos taurus."
}

//  On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row. 


function set(){
   
    var  first_name=document.getElementById("first_name").value;
    var last_name=document.getElementById("last_name").value;
    var number=document.getElementById("number2").value;
}



// 52-57
function showimage(e){
    var modal_image=document.getElementById("modal_image");
    modal_image.src=e.src;
}
// generate a data in  a table 
// var table =document.getElementById("table");

function set2(){
    var table =document.getElementById("table");
    var f_name=document.getElementById("first_name");
    var l_name=document.getElementById("last_name");
    var num=document.getElementById("number2");
    var row2=document.createElement("tr");
    var textrow=document.createTextNode(f_name.value);
    row2.appendChild(textrow);
console.log(row)
  table.appendChild(row);
// console.log(row);
  

}

// Assignment # 58-67JAVASCRIPT
// var ele_ment=document.getElementById("main-content");
// var p=ele_ment.childNodes[1];
// var content=p.innerHTML;

// console.log(content);

// Node type form content id;
var d = document.getElementById("form-content");
var pCounter = 0; 
var type;
  for(var i = 0; i < d.childNodes.length; i++) { 
     
    console.log(d.childNodes[i].nodeType);
        
        }
    
