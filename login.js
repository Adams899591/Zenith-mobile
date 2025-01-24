document.getElementById("accnom");
document.getElementById("accpss");
document.getElementById("signin");
// document.getElementById("");

let accnom = "214578963528";
let accpss = "899591";

document.getElementById("signin").onclick = function validateLogin () {

 xx    =     document.getElementById("accnom").value ;
 yy    =      document.getElementById("accpss").value ;

 if ( xx  === accnom &&  yy  === accpss  ) {
  alert("login surcessfull pls click on the OK BUTTON ")
  window.location.href = "home.html" ;
  
 }else if (xx  === accnom  ||  yy  === accpss  === "") { 
  alert("your ACCOUNT NUMBER or PASSWORD can not be empty ")
  
 }
  else {
  alert (" pls fill in ACCOUNT NUMBER or PASSWORD")
  
 }



  
}









