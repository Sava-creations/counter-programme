// const decreasebtn=document.getElementById("de");
// const resetbtn=document.getElementById("re");
// const increasebtn=document.getElementById("inc");
// const countlabelbtn=document.getElementById("countlabel");

let count=0;

inc.onclick=function(){
    count++;
    countlabel.textContent=count; //replaces the existing content of the element with the new text value you provide.
}

de.onclick=function(){
    count--;
    countlabel.textContent=count; 
}

re.onclick=function(){
    count=0;
    countlabel.textContent=count; 
}