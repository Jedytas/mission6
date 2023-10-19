document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");
    const productOptionSelect = document.getElementById("productOption");
    const productPropertyCheckbox = document.getElementById("productProperty");
    const quantityInput = document.getElementById("quantity");
    const optionsDiv = document.getElementById("options");
    const propertiesDiv = document.getElementById("properties");
    const resultParagraph = document.getElementById("result");

    function updateOptions() {
        const selectedProduct = parseInt(productSelect.value);

        optionsDiv.style.display = "none";
        propertiesDiv.style.display = "none";

        if (selectedProduct === 60) {
            optionsDiv.style.display = "block";
            propertiesDiv.style.display = "none";
            productPropertyCheckbox.checked = false;
        } else if (selectedProduct === 200) {
            optionsDiv.style.display = "none";
            propertiesDiv.style.display = "block";
            productOptionSelect.selectedIndex = 0;
        } else {
            optionsDiv.style.display = "none";
            propertiesDiv.style.display = "none";
            productPropertyCheckbox.checked = false;
            productOptionSelect.selectedIndex = 0;
        }
        calculateTotal();
    }

    function calculateTotal() {
        const productPrice = parseInt(productSelect.value);
        const quantity = parseInt(quantityInput.value);
        const productOptionPrice = parseInt(productOptionSelect.value);
        const productPropertyPrice = (
            productPropertyCheckbox.checked
            ? parseInt(productPropertyCheckbox.value)
            : 0
        );



        if (
            Number.isNaN(productPrice) ||
            Number.isNaN(quantity) ||
            quantity < 0
        ) {
            resultParagraph.textContent = "Введите корректные данные.";
        } else {
            const Sum = productPrice +
            productOptionPrice +
            productPropertyPrice;

            const totalPrice = Sum * quantity;
            const resultText = "Стоимость заказа: " + totalPrice + " рублей";
            resultParagraph.textContent = resultText;
        }
    }

    productSelect.addEventListener("input", updateOptions);
    productOptionSelect.addEventListener("input", calculateTotal);
    productPropertyCheckbox.addEventListener("input", calculateTotal);
    quantityInput.addEventListener("input", calculateTotal);

    updateOptions();
});