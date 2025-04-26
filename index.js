document.addEventListener("DOMContentLoaded", () => {
    // Обработка формы поиска
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchForm.querySelector("input").value.trim();
        if (query) {
            console.log(`Поиск по запросу: ${query}`);
            alert(`Вы ищете: ${query}`);
        } else {
            alert("Введите текст для поиска.");
        }
    });

    // Обработка формы местоположения
    const locationForm = document.querySelector(".location-form");
    locationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const address = locationForm.querySelector("input").value.trim();
        if (address) {
            alert(`Поиск аптек рядом с: ${address}`);
        } else {
            alert("Пожалуйста, введите ваш адрес.");
        }
    });

    // Подсказка при наведении на "Подробнее"
    const detailLinks = document.querySelectorAll('.medicine-info a');
    detailLinks.forEach(link => {
        link.title = "Нажмите, чтобы узнать больше о препарате";
    });

    // Плавный скролл к разделу "pharmacy-finder"
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.textContent.includes("Аптеки")) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelector('.pharmacy-finder').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });
});