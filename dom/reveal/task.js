const reveals = document.querySelectorAll('.reveal');

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    
    if (bottom < 0 || top > window.innerHeight) {
        el.classList.remove('reveal_active');
        return false;
    } else {
        el.classList.add('reveal_active');
        return true;
    }
}

setInterval(() => {
    reveals.forEach(reveal => {
        isVisible(reveal); 
    });
}, 1000);
