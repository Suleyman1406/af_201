const ELON_MONEY = 187000000000;
const PRODUCTS = [
  {
    id: "1",
    img: "https://dadaspendelonmoney.netlify.app/images/big-mac.jpg",
    price: 2,
    name: "Big Mac",
  },
  {
    id: "2",
    img: "https://dadaspendelonmoney.netlify.app/images/big-mac.jpg",
    price: 10,
    name: "Big Mac",
  },
  {
    id: "3",
    img: "https://dadaspendelonmoney.netlify.app/images/big-mac.jpg",
    price: 20000,
    name: "Big Mac",
  },
  {
    id: "4",
    img: "https://dadaspendelonmoney.netlify.app/images/big-mac.jpg",
    price: 30000000,
    name: "Big Mac",
  },
];

const basket = [];

const cardContainer = document.querySelector(".card_container");

PRODUCTS.forEach((product) => {
  const cardDiv = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardNameP = document.createElement("p");
  const cardPriceP = document.createElement("p");
  const cardFooterContainer = document.createElement("div");
  const cardSellBtn = document.createElement("button");
  const cardBuyBtn = document.createElement("button");
  const cardCountInput = document.createElement("input");
  cardDiv.className = "card";
  cardImg.src = product.img;
  cardNameP.textContent = product.name;
  cardPriceP.textContent = product.price;
  cardCountInput.type = "number";
  cardBuyBtn.textContent = "Buy";
  cardSellBtn.textContent = "Sell";
  cardCountInput.value = 0;
  cardFooterContainer.append(cardSellBtn, cardCountInput, cardBuyBtn);
  cardDiv.append(cardImg, cardNameP, cardPriceP, cardFooterContainer);
  cardContainer.appendChild(cardDiv);

  cardBuyBtn.addEventListener("click", () => {
    let itemIndexInBasket = basket.findIndex(
      (item) => item.product.id === product.id
    );

    if (itemIndexInBasket === -1) {
      basket.push({
        product: product,
        count: 1,
      });
    } else {
      basket[itemIndexInBasket].count++;
    }
    cardCountInput.value++;
    updateUI();
  });

  cardSellBtn.addEventListener("click", () => {
    let itemIndexInBasket = basket.findIndex(
      (item) => item.product.id === product.id
    );

    if (itemIndexInBasket === -1) return;

    if (cardCountInput.value <= 1) {
      basket.splice(itemIndexInBasket, 1);
    } else if (cardCountInput.value > 1) {
      basket[itemIndexInBasket].count--;
    }

    cardCountInput.value--;
    updateUI();
  });

  cardCountInput.addEventListener("keyup", (event) => {
    if (event.target.value.startsWith("0")) {
      event.target.value = event.target.value.slice(1);
    }
    if (event.target.value === "") event.target.value = 0;

    let amount = calculateChange();

    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) amount += basketItem.count * product.price;

    if (amount < product.price * event.target.value) {
      event.target.value = (amount - (amount % product.price)) / product.price;
    }

    let basketItemIndex = basket.findIndex(
      (item) => item.product.id === product.id
    );
    if (basketItemIndex === -1) {
      basket.push({
        product: product,
        count: event.target.value,
      });
    } else if (event.target.value === 0) {
      basket.splice(basketItemIndex, 1);
    } else {
      basket[basketItemIndex].count = event.target.value;
    }
    updateUI();
  });
});

function updateUI() {
  writeAmountToDocument(convertToDolarFormat(calculateChange()));
}

function writeAmountToDocument(amount) {
  document.getElementById("money_container").textContent = amount;
}

function calculateChange() {
  let basketTotal = 0;
  basket.forEach((item) => {
    basketTotal += item.product.price * item.count;
  });
  let amount = ELON_MONEY - basketTotal;
  return amount;
}

function convertToDolarFormat(amount) {
  let myArr = amount.toString().split("").reverse();
  let newAmount = "";
  for (let i = 0; i < myArr.length; i++) {
    newAmount += myArr[i];
    if (i % 3 === 2 && i !== myArr.length - 1) newAmount += ",";
  }
  return "$" + newAmount.split("").reverse().join("");
}
