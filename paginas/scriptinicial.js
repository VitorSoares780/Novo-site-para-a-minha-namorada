document.querySelector('.dropdown').addEventListener('click', function() {
    const menu = this.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});