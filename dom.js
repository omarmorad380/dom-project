var price = document.getElementById('sub-total').innerHTML;
var priceAsNumber = parseInt(price, 10);
var quantity = document.getElementById('quantity').innerHTML;
var quantityAsNumber = parseInt(quantity, 10);
var total = document.getElementById('product-line-price');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var removeElement =document.getElementById('remove-product');
    
function calculateTotal (){
    var totalPrice = priceAsNumber * quantityAsNumber;
    document.getElementById('product-line-price').innerHTML = totalPrice;
}

plus.addEventListener("click",()=>{  
    quantityAsNumber++;
    document.getElementById('quantity').innerHTML = quantityAsNumber;
    calculateTotal();       
})

minus.addEventListener("click",()=>{
    quantityAsNumber--;
    document.getElementById('quantity').innerHTML = quantityAsNumber;
    calculateTotal();       
})

removeElement.addEventListener("click", ()=>{
    document.getElementById("shopping-cart").remove();
})