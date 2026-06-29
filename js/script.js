let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

cart.push({
name:name,
price:price
});

localStorage.setItem("cart",JSON.stringify(cart));

alert("✅ تمت إضافة المنتج إلى السلة");

}

function checkout(){

let message="السلام عليكم أريد شراء:%0A%0A";

let total=0;

cart.forEach((item,index)=>{

message+=`${index+1}- ${item.name} (${item.price} ريال)%0A`;

total+=item.price;

});

message+=`%0Aالإجمالي: ${total} ريال`;

window.open(`https://wa.me/966555439640?text=${message}`);

}

});

});
window.addEventListener("scroll",()=>{

document.querySelectorAll(".feature").forEach((card,index)=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});
function openMenu(){

document.getElementById("sidebar").style.right="0";

document.getElementById("overlay").style.display="block";

}

function closeMenu(){

document.getElementById("sidebar").style.right="-320px";

document.getElementById("overlay").style.display="none";

}
document.querySelectorAll(".stats h2").forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

let speed=Math.ceil(target/80);

let interval=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(interval);

}

counter.innerText=count+"+";

},20);

});
