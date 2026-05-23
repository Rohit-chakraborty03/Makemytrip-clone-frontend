const elem1=document.getElementById("oneway");
const elem2=document.getElementById("roundtrip");
const elem3=document.getElementById("multicity");

elem1.addEventListener("click",()=>{
   elem1.style.backgroundColor="#ff8dddab";
    elem1.style.borderRadius="12px";
    elem2.style.backgroundColor="";
    elem3.style.backgroundColor="";
    elem3.style.opacity=0.5;
    elem2.style.opacity=0.5;
    elem1.style.opacity=1;
})

elem2.addEventListener("click",()=>{
    elem2.style.backgroundColor="#ff8dddab";
    elem2.style.borderRadius="12px";
    elem1.style.backgroundColor="";
    elem3.style.backgroundColor="";
    elem3.style.opacity=0.5;
    elem1.style.opacity=0.5;
    elem2.style.opacity=1;
})

elem3.addEventListener("click",()=>{
    elem3.style.backgroundColor="#ff8dddab";
    elem3.style.borderRadius="12px";
    elem1.style.backgroundColor="";
    elem2.style.backgroundColor="";
    elem1.style.opacity=0.5;
    elem2.style.opacity=0.5;
    elem3.style.opacity=1;
})