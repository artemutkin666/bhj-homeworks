  document.addEventListener('DOMContentLoaded', function() {
            // Находим все dropdown элементы на странице
            const dropdowns = document.querySelectorAll('.dropdown');
            
            // Для каждого dropdown добавляем обработчики событий
            dropdowns.forEach(dropdown => {
                const dropdownValue = dropdown.querySelector('.dropdown__value');
                const dropdownList = dropdown.querySelector('.dropdown__list');
                const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
                
                // Обработчик клика по значению dropdown (открытие/закрытие)
                dropdownValue.addEventListener('click', function(event) {
                    event.stopPropagation(); // Предотвращаем всплытие
                    
                    // Закрываем все остальные открытые dropdown
                    closeAllDropdownsExcept(dropdownList);
                    
                    // Переключаем видимость текущего dropdown
                    dropdownList.classList.toggle('dropdown__list_active');
                });
                
                // Обработчики клика по пунктам меню
                dropdownItems.forEach(item => {
                    item.addEventListener('click', function(event) {
                        event.preventDefault(); // Запрещаем переход по ссылке
                        
                        const link = this.querySelector('.dropdown__link');
                        const newValue = link.textContent.trim();
                        
                        // Устанавливаем новое значение
                        dropdownValue.textContent = newValue;
                        
                        // Закрываем список
                        dropdownList.classList.remove('dropdown__list_active');
                    });
                });
            });
            
            // Закрытие dropdown при клике вне области
            document.addEventListener('click', function() {
                closeAllDropdowns();
            });
            
            // Функция для закрытия всех dropdown
            function closeAllDropdowns() {
                const allDropdownLists = document.querySelectorAll('.dropdown__list');
                allDropdownLists.forEach(list => {
                    list.classList.remove('dropdown__list_active');
                });
            }
            
            // Функция для закрытия всех dropdown кроме указанного
            function closeAllDropdownsExcept(exceptList) {
                const allDropdownLists = document.querySelectorAll('.dropdown__list');
                allDropdownLists.forEach(list => {
                    if (list !== exceptList) {
                        list.classList.remove('dropdown__list_active');
                    }
                });
            }
        });
