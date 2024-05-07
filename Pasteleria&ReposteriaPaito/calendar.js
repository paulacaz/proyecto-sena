document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');

    days.forEach(day => {
        day.addEventListener('click', function() {
            alert('Día seleccionado: ' + this.textContent);
        });
    });
});