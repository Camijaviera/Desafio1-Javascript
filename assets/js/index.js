
const select = document.querySelector("#myInput");
const total = document.querySelector("#price");
const clickOne = document.querySelector("button");
const quantity = document.querySelector("#quantity");
const changeColor = document.querySelector("#change-color");
const touchColor =document.querySelector("#touch");
const oferta = document.querySelector("#oferta");
clickOne.addEventListener("click" , function() {
    let totalPrice = "$"+400000*select.value;
    total.innerHTML = "Total : " + totalPrice;
    let totalQuantity = select.value;
    quantity.innerHTML = "Cantidad :" + totalQuantity;
    oferta.innerHTML = "Precio Oferta: $400.000";
    let nameColor = touchColor.value;
    changeColor.style.backgroundColor= nameColor ;
   
     

})






