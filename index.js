
const readButtons = document.querySelectorAll('.read-btn');


readButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const counter = button.nextElementSibling; 
        let currentCount = parseInt(counter.textContent);
       
        if(currentCount>0){
            counter.textContent = currentCount - 1;
        }
        if (currentCount - 1 === 0) { 
            button.disabled = true;
            button.style.backgroundColor = 'white'; 
            button.style.color = 'black'; 
            button.textContent = "تم الانتهاء"; 
        }
        
    });
});
document.addEventListener('keydown', function(e) {
    
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')|| (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        alert('فحص الكود محظور!');
    }
});


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('فحص الكود محظور!');
});
let devToolsOpen = false;

const checkDevTools = setInterval(function() {
    if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        devToolsOpen = true;
        alert('أدوات الفحص مفتوحة!');
        clearInterval(checkDevTools);
    }
}, 1000);

document.addEventListener('keydown', function(e) {
    if (devToolsOpen) {
        e.preventDefault();
        alert('فحص الكود محظور!');
    }
});