applyFiltersButton.addEventListener('click', function (e) {
    e.preventDefault();

    const priceMin = parseFloat(document.querySelector('.price-filter input[placeholder="от"]').value) || 0;
    const priceMax = parseFloat(document.querySelector('.price-filter input[placeholder="до"]').value) || Infinity;

    const inStockChecked = document.querySelectorAll('.checkbox-filter')[0].querySelectorAll('input')[0].checked;
    const byOrderChecked = document.querySelectorAll('.checkbox-filter')[0].querySelectorAll('input')[1].checked;

    const domesticChecked = document.querySelectorAll('.checkbox-filter')[1].querySelectorAll('input')[0].checked;
    const importedChecked = document.querySelectorAll('.checkbox-filter')[1].querySelectorAll('input')[1].checked;

    const prescriptionChecked = document.querySelectorAll('.checkbox-filter')[2].querySelectorAll('input')[0].checked;
    const nonPrescriptionChecked = document.querySelectorAll('.checkbox-filter')[2].querySelectorAll('input')[1].checked;

    products.forEach(product => {
        const price = parseFloat(product.dataset.price);
        const availability = product.dataset.availability;
        const producer = product.dataset.producer;
        const prescription = product.dataset.prescription;

        let show = true;

        if (price < priceMin || price > priceMax) show = false;

        if (inStockChecked && availability !== "В наличии") show = false;
        if (byOrderChecked && availability !== "Под заказ") show = false;

        if (domesticChecked && producer !== "Отечественный") show = false;
        if (importedChecked && producer !== "Импортный") show = false;

        if (prescriptionChecked && prescription !== "По рецепту") show = false;
        if (nonPrescriptionChecked && prescription !== "Без рецепта") show = false;

        product.style.display = show ? "block" : "none";
    });
});