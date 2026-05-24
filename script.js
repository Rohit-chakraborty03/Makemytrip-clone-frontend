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

const from=document.getElementById("from");
const to=document.getElementById("to");
const departure=document.getElementById("departure");
const ret=document.getElementById("ret");
const travellers=document.getElementById("travellers");

const arr=[from,to,departure,ret,travellers];

for(let i =0;i<arr.length;i++)
{
    arr[i].addEventListener("mouseenter",handlenter);
    arr[i].addEventListener("mouseleave",handleleave);
    arr[i].addEventListener("click",handleclick);
}

function handlenter(event)
{
    const name= event.currentTarget.id;
    document.getElementById(name).style.backgroundColor="#f88ed891";
    document.getElementById(name).style.color="hsl(299, 59%, 27%)";
    document.getElementById(name).style.fontWeight="bold";


}

function handleleave(event)
{
     const name= event.currentTarget.id;
    document.getElementById(name).style.backgroundColor="white";
    document.getElementById(name).style.fontWeight="normal";
}

function handleclick(event)
{
    const name= event.currentTarget.id;
    document.getElementById(name).style.backgroundColor="#ffd4f292";
    document.getElementById(name).style.fontWeight="bold";
}

function getCurrDate()
{
    const date = new Date();
    const day = String(date.getDate()).padStart(2,"0");
    const month = String(date.getMonth()+1).padStart(2,"0");
    const year =String(date.getFullYear());
    return `${year}-${month}-${day}`;
}

document.getElementById("inp3").min=getCurrDate();
document.getElementById("inp3").value=getCurrDate();
document.getElementById("inp4").min=getCurrDate();
document.getElementById("inp4").value=getCurrDate();

function getFutureDate()
{
    const future= new Date();
    future.setMonth(future.getMonth()+6);
    const day = String(future.getDate()).padStart(2,"0");
    const month = String(future.getMonth()+1).padStart(2,"0");
    const year =String(future.getFullYear());
    return `${year}-${month}-${day}`;
}

document.getElementById("inp3").max=getFutureDate();
document.getElementById("inp4").max=getFutureDate();


const oneway = document.getElementById("oneway");
const roundtrip = document.getElementById("roundtrip");
const multicity = document.getElementById("multicity");

oneway.addEventListener("click",()=>{
    ret.style.opacity=0.5;
    ret.style.pointerEvents ="none";
})

roundtrip.addEventListener("click",()=>{
    ret.style.opacity=1;
    ret.style.pointerEvents ="auto";
})

const addpass=document.getElementById("addpass");
const popup=document.getElementById("popup");

addpass.addEventListener("click",()=>{
    if(popup.style.display==="block")
        popup.style.display="none";
    else
        popup.style.display="block";


})





