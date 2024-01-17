function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle-btn');

    sidebar.style.width = sidebar.style.width === '300px' ? '0' : '300px';
    toggleBtn.classList.toggle('open');
}
