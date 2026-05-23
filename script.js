const elem1=document.getElementById("oneway");
const elem2=document.getElementById("roundtrip");
const elem3=document.getElementById("multicity");

elem1.addEventListener("click",()=>{
    elem1.style.backgroundColor="blue";
    elem1.style.borderRadius="20px";
})

elem2.addEventListener("click",()=>{
    elem2.style.backgroundColor="blue";
    elem2.style.borderRadius="20px";
})

elem3.addEventListener("click",()=>{
    elem3.style.backgroundColor="#99e6ff";
    elem3.style.borderRadius="20px";
})