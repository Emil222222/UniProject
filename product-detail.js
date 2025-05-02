document.addEventListener('DOMContentLoaded', function() {
    // Функциональность переключения вкладок
    // Найти все кнопки вкладок
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // Добавить обработчик событий для каждой кнопки
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Получить идентификатор вкладки, который нужно показать
            const tabId = this.getAttribute('data-tab');
            
            // Скрыть все содержимое вкладок
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Удалить класс active со всех кнопок
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Добавить класс active к нажатой кнопке
            this.classList.add('active');
            
            // Показать соответствующее содержимое вкладки
            const activeTabContent = document.getElementById(tabId);
            if (activeTabContent) {
                activeTabContent.classList.add('active');
            }
        });
    });
    
    // Функциональность переключения изображений в галерее
    // Найти все миниатюры
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Добавить обработчик событий для каждой миниатюры
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Найти главное изображение
            const mainImage = document.querySelector('.main-image img');
            
            // Найти изображение в текущей миниатюре
            const thumbnailImage = this.querySelector('img');
            
            // Заменить src главного изображения на src выбранной миниатюры
            if (mainImage && thumbnailImage) {
                mainImage.src = thumbnailImage.src;
                mainImage.alt = thumbnailImage.alt;
            }
            
            // Удалить класс active со всех миниатюр
            thumbnails.forEach(thumb => {
                thumb.classList.remove('active');
            });
            
            // Добавить класс active к выбранной миниатюре
            this.classList.add('active');
        });
    });
});