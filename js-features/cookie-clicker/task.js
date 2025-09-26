// Получаем элементы
const clickCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

// Исходный размер печеньки
const originalWidth = cookie.width || 200;
const originalHeight = cookie.height || 200;

// Обработчик клика по печеньке
cookie.addEventListener('click', function() {
    // Увеличиваем счетчик кликов
    let currentCount = parseInt(clickCounter.textContent);
    currentCount++;
    clickCounter.textContent = currentCount;
    
    // Увеличиваем печеньку
    cookie.style.width = (originalWidth * 1.1) + 'px';
    cookie.style.height = (originalHeight * 1.1) + 'px';
    
    // Через короткое время возвращаем исходный размер
    setTimeout(() => {
        cookie.style.width = originalWidth + 'px';
        cookie.style.height = originalHeight + 'px';
    }, 100);
});
