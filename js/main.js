let classicItemEl = $(".classicData"),
    cartItemEl = $(".cartData");

let classicsData,
    cartData;

function init() {
    $.getJSON('json/classic.json', function(classic) { 
        classicsData = classic;
        displayClassic(classicsData.classic);
    });
}

function displayClassic(classic) {
    let htmlString = '';
    $.each(classic, function(i, classic) {
        htmlString = htmlString + getclassicItemHTML(classic);  
    });

    classicItemEl.html(htmlString);
    
}

function getclassicItemHTML(classic) {
    return `<div data-id="${classic.id}" class="${classic.class}">
                    <img src="${classic.image}">
                <div class="classic-text">
                    <h5>${classic.title}</h5>
                    <hr>
                    <h6>${classic.price}</h6>
                    <hr>
                    <p>${classic.description}</p>
                </div>
            </div>`;
}

init();