var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var num = document.getElementById('num') ;
var addToCart_btn = document.getElementById('addtocart');
var productName = document.getElementById('product_name').textContent;
var cartNum = document.getElementById('cart_num');
var x = 0 ;
var cart = [];

minus.addEventListener ('click' , function () {

    if (x > 0) {
        x--;
        num.innerHTML = x ;
    } 

} );


plus.addEventListener ('click' , function () {

    x++;
    num.innerHTML = x ;
} );

addToCart_btn.addEventListener('click' , function () {

    cart[productName] = x ;
    console.log(cart);
    cartNum.innerHTML = cart[productName]; 

});
