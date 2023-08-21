
// Card 1
prod1.addEventListener('click', ()=>{

    const prod1 = document.getElementById('prod1');
    const cardName= prod1.querySelector('.card-title').textContent;
    const cardPriceString = prod1.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
})

// Card 2
prod2.addEventListener('click', ()=>{

    const prod2 = document.getElementById('prod2');
    const cardName= prod2.querySelector('.card-title').textContent;
    const cardPriceString = prod2.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
})

// card 3
prod3.addEventListener('click', ()=>{

    const prod3 = document.getElementById('prod3');
    const cardName= prod3.querySelector('.card-title').textContent;
    const cardPriceString = prod3.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
})

// card 4
prod4.addEventListener('click', ()=>{

    const prod4 = document.getElementById('prod4');
    const cardName= prod4.querySelector('.card-title').textContent;
    const cardPriceString = prod4.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
})

// card 5
prod5.addEventListener('click', ()=>{

    const prod5 = document.getElementById('prod5');
    const cardName= prod5.querySelector('.card-title').textContent;
    const cardPriceString = prod5.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
})

// card 6
prod6.addEventListener('click', ()=>{

    const prod6 = document.getElementById('prod6');
    const cardName= prod6.querySelector('.card-title').textContent;
    const cardPriceString = prod6.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
})

// card 7
prod7.addEventListener('click', ()=>{

    const prod7 = document.getElementById('prod7');
    const cardName= prod7.querySelector('.card-title').textContent;
    const cardPriceString = prod7.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
}) 

// card 8
prod8.addEventListener('click', ()=>{

    const prod8 = document.getElementById('prod8');
    const cardName= prod8.querySelector('.card-title').textContent;
    const cardPriceString = prod8.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
})

// card 9
prod9.addEventListener('click', ()=>{

    const prod9 = document.getElementById('prod9');
    const cardName= prod9.querySelector('.card-title').textContent;
    const cardPriceString = prod9.querySelector('.price').textContent;
    const cardPrice = parseInt(cardPriceString);

    purchesItems(cardName, cardPrice)
})

purchesItems = (cardName, cardPrice) => {
    console.log(cardName + " " + cardPrice);
    const productList = document.getElementById('product-list');
    const p = document.createElement('p');
    p.innerHTML = cardName;
    
    productList.appendChild(p);
    const totalPriceString = document.getElementById('total-price');


    const totalPrice = totalPriceString.innerText;
    const totalPriceNumber = parseInt(totalPrice);
    const value = totalPriceNumber + cardPrice;

    totalPriceString.innerText = value + " " + "TK";

    const payNow = document.getElementById('pay-now');
    payNow.innerText = value + " " + "TK";


    const makePurchase = document.getElementById('purchase');
    if(value > 0){
        makePurchase.disabled = false;
    }
    

    const applyBtn = document.getElementById('apply');
    const couponId = document.getElementById('coupon-id');
    if(value >= 200){
        applyBtn.disabled = false;
        couponId.disabled = false;
    }
    

    

    
}







// const totalPriceValue = document.getElementById('total-price');
// const totalNumber = parseInt(totalPriceValue.innerText)
// console.log(totalNumber)






const button = document.getElementById('apply');
button.addEventListener('click', ()=>{
const totalTakaString = document.getElementById('total-price');
const totalTaka = totalTakaString.innerText;
const totalValue = parseInt(totalTaka);

const coupon = document.getElementById('coupon-id').value;
const discountString = document.getElementById('discount');
const finalTotal = document.getElementById('pay-now');


if(coupon == 'SELL200'){
    discountString.innerText = (totalValue * 20) / 100 + " " + "Tk"
    const discountInt = parseInt(discountString.innerText);
    finalTotal.innerText = (totalValue - discountInt) + " " + "TK"
} 

})




function goHome(){
    location.reload();
}






