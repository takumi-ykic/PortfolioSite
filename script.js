function initializeScrolling() {
    const navItems = document.querySelectorAll('.nav-menu-list-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.target;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', initializeScrolling);