
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
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert('فحص الكود محظور!');
    }
});