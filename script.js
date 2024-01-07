document.addEventListener("DOMContentLoaded", function () {
    const addToBasketButtons = document.querySelectorAll(".addToBasket");
    const basketList = document.getElementById("basketList");
    const totalAmount = document.getElementById("totalAmount");
    const checkoutButton = document.getElementById("checkoutButton");

    let basket = [];

    addToBasketButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.getAttribute("data-product");
            basket.push({ product });
            updateBasket();
        });
    });

    function updateBasket() {
        basketList.innerHTML = "";
        let total = 0;

        basket.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item.product;
            basketList.appendChild(listItem);

            // Adjust the total based on the product's price
            switch (item.product) {
                case "Basic":
                    total += 10;
                    break;
                case "Premium":
                    total += 20;
                    break;
                case "Pro":
                    total += 30;
                    break;
                default:
                    break;
            }
        });

        totalAmount.textContent = total.toFixed(2);
    }

    checkoutButton.addEventListener("click", function () {
        alert("Implement your checkout logic here!");
        // You may redirect the user to a checkout page or handle payments.
    });
});
