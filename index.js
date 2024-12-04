
const readButtons = document.querySelectorAll('.read-btn');


readButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const counter = button.nextElementSibling; 
        let currentCount = parseInt(counter.textContent);
       
        if(currentCount>0){
            counter.textContent = currentCount - 1;
        }
        else {
            button.disabled = true;
        }
    });
});
