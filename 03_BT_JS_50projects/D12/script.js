const toggleBtns = document.querySelectorAll('.faq-toggle')

toggleBtns.forEach(btn => {
    
    btn.addEventListener('click', () => {
        const test = btn.parentNode;
        test.classList.toggle('active');
        console.log(test)

    });


});