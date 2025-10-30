// Регистрируем обработчики событий для всех наборов вкладок на странице
document.addEventListener('DOMContentLoaded', function() {
    // Находим все контейнеры с вкладками на странице
    const tabsNavigations = document.querySelectorAll('.tab__navigation');
    
    // Для каждого набора вкладок регистрируем обработчики
    tabsNavigations.forEach(navigation => {
        // Получаем все вкладки в текущей навигации
        const tabs = Array.from(navigation.querySelectorAll('.tab'));
        
        // Находим соответствующий контейнер с содержимым
        // Предполагаем, что он следует сразу после навигации
        const contentsContainer = navigation.nextElementSibling;
        const contents = Array.from(contentsContainer.querySelectorAll('.tab__content'));
        
        // Регистрируем обработчики клика для каждой вкладки
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', function() {
                // Снимаем активные классы со всех вкладок и содержимого в ЭТОМ наборе
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active'));
                
                // Устанавливаем активные классы на выбранную вкладку и соответствующее содержимое
                this.classList.add('tab_active');
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});
