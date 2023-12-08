const quoteElement = document.getElementById("quote");
let currentQuoteIndex;

let quote = ["Одно дерево еще не лес.",
    "Красна весна цветами, осень - снопами.",
    "Весна да осень - на дню погод восемь.",
    "Весенний дождь растит, осенний гноит.",
    "Где в апреле река, там в июле лужица.",
    "Летняя неделя дороже зимней.",
    "Лето - припасиха, а зима - подбериха.",
    "Лето собирает, а зима подъедает.",
    "Осенью и воробей богат.",
    "Осенью скот жиреет, человек добреет.",
    "Сентябрь кафтан с плеч срывает, тулуп надевает.",
    "Октябрь ни колеса ни полоза не любит.",
    "В октябре с солнцем распрощайся, ближе к печке подбирайся.",
    "В ноябре зима с осенью борется.",
    "Ноябрь - сентябрев внук, октябрев сын, зиме родной брат."];

function generateNewQuote() {
    let newRandom = generateRandomNumber(quote.length);

    if (newRandom !== currentQuoteIndex) {
        currentQuoteIndex = newRandom;
        quoteElement.innerHTML = quote[currentQuoteIndex];
    }
    else generateNewQuote();
}