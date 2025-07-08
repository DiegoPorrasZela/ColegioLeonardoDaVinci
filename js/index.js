document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        const dropdowns = document.querySelectorAll('.nav-item.dropdown');

        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector('.dropdown-menu');
            const toggle = dropdown.querySelector('.dropdown-toggle');

            // Evita que el clic cierre el menú
            toggle.removeAttribute('data-bs-toggle');

            // Muestra el dropdown directamente
            menu.classList.add('show');
        });
    }
});

