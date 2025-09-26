'use strict'

const timerElement = document.getElementById('timer');

// Читаем начальное значение из HTML (59 секунд)
let seconds = parseInt(timerElement.textContent);

// Запускаем таймер
const timerInterval = setInterval(function() {
    // Уменьшаем количество секунд на 1
    seconds--;
    
    // Обновляем отображение таймера
    timerElement.textContent = seconds;
    
    // Проверяем, не закончился ли отсчет
    if (seconds <= 0) {
        // Останавливаем таймер
        clearInterval(timerInterval);
        
        // Показываем сообщение о победе
        alert('Вы победили в конкурсе!');
    }
}, 1000); // 1000 мс = 1 секунда
