
const select = document.querySelector("#myInput");
const total = document.querySelector("#price");
const clickOne = document.querySelector("button");
const quantity = document.querySelector("#quantity");
const changeColor = document.querySelector("#change-color");
const touchColor =document.querySelector("#touch");
clickOne.addEventListener("click" , function() {
    let text = "$"+400000*select.value;
    total.innerHTML = "Total : " + text;
    let textQuantity = select.value;
    quantity.innerHTML = "Cantidad :" + textQuantity;
    let nameColor = touchColor.value;
    console.log(nameColor);
    changeColor.style.backgroundColor= nameColor ;

})






