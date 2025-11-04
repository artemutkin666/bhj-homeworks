document.addEventListener('DOMContentLoaded', function() {
    // Находим элементы управления и читалку
    const fontSizeControl = document.querySelector('.book__control_font-size');
    const bookElement = document.getElementById('book');
    const fontSizeButtons = fontSizeControl.querySelectorAll('.font-size');
    
    // Обработчик клика на кнопки размера шрифта
    fontSizeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            
            // Убираем активный класс со всех кнопок
            fontSizeButtons.forEach(btn => {
                btn.classList.remove('font-size_active');
            });
            
            // Добавляем активный класс на нажатую кнопку
            this.classList.add('font-size_active');
            
            // Получаем размер из data-атрибута
            const size = this.dataset.size;
            
            // Убираем все классы размера шрифта у книги
            bookElement.classList.remove('book_fs-small', 'book_fs-big');
            
            // Добавляем соответствующий класс в зависимости от выбранного размера
            if (size === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (size === 'big') {
                bookElement.classList.add('book_fs-big');
            }
            // Если size undefined (средний размер), оставляем без дополнительных классов
        });
    });
});
