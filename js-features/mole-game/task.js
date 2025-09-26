function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Получаем элементы счетчиков
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

// Функция для сброса игры
function resetGame(message) {
    alert(message);
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
}

// Регистрируем обработчики для всех лунок с помощью цикла
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.addEventListener('click', function() {
        // Проверяем наличие класса hole_has-mole
        if (hole.className.includes('hole_has-mole')) {
            // Увеличиваем счетчик убитых кротов
            let dead = parseInt(deadCounter.textContent) + 1;
            deadCounter.textContent = dead;
            
            // Проверяем выигрыш (10 убитых кротов)
            if (dead === 10) {
                resetGame('Поздравляем! Вы выиграли!');
            }
        } else {
            // Увеличиваем счетчик промахов
            let lost = parseInt(lostCounter.textContent) + 1;
            lostCounter.textContent = lost;
            
            // Проверяем проигрыш (5 промахов)
            if (lost === 5) {
                resetGame('К сожалению, вы проиграли!');
            }
        }
    });
}
