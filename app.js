const accs = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');

accs.forEach((acc, index) => {
    acc.addEventListener('click', function() {
        this.classList.toggle("active");
        const panel = panels[index];
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});
