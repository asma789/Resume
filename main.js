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
  education(data.edu);
  technicalskills(data.tech);
  //console.log(data.co);
});
var right=document.getElementById('right');
function careerobj(career) {
var careerobj=document.createElement('h4');
careerobj.textContent="Career Object :";
careerobj.appendChild(document.createElement("hr"));
  var cop=document.createElement("p");
  cop.textContent=career;
  right.appendChild(careerobj);
  right.appendChild(cop);
}

//Education Qualifications
function education(edu){
var educational=document.createElement("h4");
educational.textContent="Educational Qualifications :";
educational.appendChild(document.createElement("hr"));
right.appendChild(educational);
var para1=document.createElement("p");
var li="";
for(i in edu){
  li+=edu[i].name+edu[i].institute+"<br>";
}
para1.innerHTML=li;
right.appendChild(para1);
}
function technicalskills(tec){
  var technical=document.createElement("h4");
  technical.textcontent="Technical skills :";
  technical.appendChild(document.createElement("hr"));
  right.appendChild(technical);
  var para2=document.createElement("p");
  var l2="";
  for(j in tec){
    l2+=tec[j].name+tec[j].value+"<br>";
  }
  para2.innerHTML=l2;
  right.appendChild(para2);
}
function achievements(achieve){
  var ach=document.createElement("h4");
  ach.textcontent="Achievements :";
  ach.appendChild(document.createElement("hr"));
  right.appendChild(ach);
  var para3=document.createElement("p");
  var l3="";
  for(k in ach){
    l3+=ach[k].name+ach[k].details+"<br>";
  }
  para3.innerHTML=l3;
  right.appendChild(para3);
}
