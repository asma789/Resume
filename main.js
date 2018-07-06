function LoadJson(file,callback) {
  var a=new XMLHttpRequest();
  a.overrideMimeType("application/json");
  a.open("GET",file,true);
  a.onreadystatechange=function(){
    if(a.readyState===4 && a.status=="200") {
      callback(a.responseText);
    }
  }
  a.send();
}
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  careerobj(data.co);
  //console.log(data.co);
})
var right=document.getElementById('right');
var career=document.createElement('h4');
career.textContent="Career Object :";
career.appendChild(document.createElement("HR"));
function careerobj(asma) {
  var cop=document.createElement("P");
  cop.textContent=asma;
  career.appendChild(cop);
}
right.appendChild(career);

//Education Qualifications

var edu=document.createElement("H4");
edu.textContent="Educational Qualifications :";
edu.appendChild(document.createElement("HR"));


right.appendChild(edu);
