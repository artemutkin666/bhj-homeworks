function initRotators() {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(rotator => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let activeIndex = 0;
        
        
        cases.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('rotator__case_active');
            } else {
                item.classList.remove('rotator__case_active');
            }
        });
        
        const intervalId = setInterval(() => {
            
            cases[activeIndex].classList.remove('rotator__case_active');
            
            
            activeIndex = (activeIndex + 1) % cases.length;
            
            cases[activeIndex].classList.add('rotator__case_active');
        }, 1000);
        
    });
}


document.addEventListener('DOMContentLoaded', initRotators);
