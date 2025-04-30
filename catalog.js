document.addEventListener('DOMContentLoaded', function () {
    const applyFiltersButton = document.querySelector('.filter-button');
    const sortSelect = document.getElementById('sort-select'); // Ваш <select> элемент

    // Обработчик фильтрации
    applyFiltersButton.addEventListener('click', function (e) {
        e.preventDefault();

        const container = document.querySelector('.product-grid');
        const products = Array.from(container.querySelectorAll('.product-card'));

        const priceMin = parseFloat(document.querySelector('.price-filter input[placeholder="от"]').value) || 0;
        const priceMax = parseFloat(document.querySelector('.price-filter input[placeholder="до"]').value) || Infinity;

        const checkboxGroups = document.querySelectorAll('.checkbox-filter');
        const inStockChecked = checkboxGroups[0].querySelectorAll('input')[0].checked;
        const byOrderChecked = checkboxGroups[0].querySelectorAll('input')[1].checked;
        const domesticChecked = checkboxGroups[1].querySelectorAll('input')[0].checked;
        const importedChecked = checkboxGroups[1].querySelectorAll('input')[1].checked;
        const prescriptionChecked = checkboxGroups[2].querySelectorAll('input')[0].checked;
        const nonPrescriptionChecked = checkboxGroups[2].querySelectorAll('input')[1].checked;

        // Отдельно собираем подходящие и остальные
        const matched = [];
        const unmatched = [];

        products.forEach(product => {
            const price = parseFloat(product.dataset.price);
            const availability = product.dataset.availability;
            const producer = product.dataset.producer;
            const prescription = product.dataset.prescription;

            let match = true;

            if (price < priceMin || price > priceMax) match = false;
            if (inStockChecked && availability !== "В наличии") match = false;
            if (byOrderChecked && availability !== "Под заказ") match = false;
            if (domesticChecked && producer !== "Отечественный") match = false;
            if (importedChecked && producer !== "Импортный") match = false;
            if (prescriptionChecked && prescription !== "По рецепту") match = false;
            if (nonPrescriptionChecked && prescription !== "Без рецепта") match = false;

            if (match) {
                matched.push(product);
            } else {
                unmatched.push(product);
            }
        });

        // Обновляем порядок карточек
        container.innerHTML = '';
        [...matched, ...unmatched].forEach(product => {
            container.appendChild(product);
            product.style.display = "block"; // показываем все карточки
        });
    });

    // Обработчик изменения выбора сортировки
    sortSelect.addEventListener('change', function () {
        const sortType = sortSelect.value;
        sortProducts(sortType);
    });

    // Функция сортировки товаров
    function sortProducts(sortType) {
        const container = document.querySelector('.product-grid');
        const products = Array.from(container.querySelectorAll('.product-card'));
        let sortedProducts = [];

        if (sortType === 'price-asc') {
            sortedProducts = products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        } else if (sortType === 'price-desc') {
            sortedProducts = products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        }

        // Обновляем порядок карточек
        sortedProducts.forEach(product => {
            container.appendChild(product);
            product.style.display = "block"; // показываем все карточки
        });
    }
});


