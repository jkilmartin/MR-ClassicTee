let classicItemEl = $(".classicData"),
    cartItemEl = $(".cartData"),
    miniCartItemEl = $(".miniCart");

let classicsData,
    cartData,
    miniCart;

function init() {
    $.getJSON('json/classic.json', function(classic) { 
        classicsData = classic;
        displayClassic(classicsData.classic);
    });

    $.getJSON('json/cart.json', function(cart) { 
        cartData = cart;
        displayCart(cartData.cart);
    });

    displayMiniCart()
}

function displayClassic(classic) {
    let htmlString = '';
    $.each(classic, function(i, classic) {
        htmlString = htmlString + getclassicItemHTML(classic);  
    });

    classicItemEl.html(htmlString);
    
}

function getclassicItemHTML(classic) {
    return `<div data-id="${classic.id}" class="classic-text">
                    <h5>${classic.title}</h5>
                    <hr>
                    <h6>${classic.price}</h6>
                    <hr>
                    <p>${classic.description}</p>
            </div>`;
}

function displayCart(cart) {
    let htmlString = '';
    $.each(cart, function(i, cart) {
        htmlString = htmlString + getcartItemHTML(cart);  
    });

    cartItemEl.html(htmlString);
    
}

function getcartItemHTML(cart) {
    return `<div class="${cart.class}">
                    <h6>${cart.title}<span class="req">*</span></h6>
                <div class="cart-sizes">
                    <p>${cart.small}</p>
                    <p>${cart.medium}</p>
                    <p>${cart.large}</p>
                </div>
                    <p class="btn">${cart.button}</p>
            </div>`;
}

function displayMiniCart() {
    miniCartItemEl.on('click', function() {
        console.log("hello");
    });
}

init();