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
