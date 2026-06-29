window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000);

}

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
