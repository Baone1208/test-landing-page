const views = {
    landing: document.getElementById('landing-view'),
    app: document.getElementById('app-view'),
    detail: document.getElementById('detail-view'),
    search: document.getElementById('search-view'),
    alerts: document.getElementById('alerts-view')
};
const bottomNav = document.getElementById('main-nav');

// Initial Setup
document.getElementById('exploreBtn').addEventListener('click', () => {
    views.landing.style.display = 'none';
    views.app.classList.add('active');
    bottomNav.style.display = 'flex';
});

// Tab Switching Logic
window.switchTab = function (targetId, navEl) {
    // Hide all main tabs
    ['app-view', 'search-view', 'alerts-view'].forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
    // Hide detail View if active
    views.detail.classList.remove('active');

    // Show target
    document.getElementById(targetId).classList.add('active');

    // Update Nav State
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if (navEl) navEl.classList.add('active');
}

// Navigation to Product Detail
window.showProductDetail = function (productId) {
    // Hide current view
    document.querySelector('.view-section.active').classList.remove('active');

    // Show detail
    views.detail.classList.add('active');

    // Optional: Hide bottom nav in detail view if desired, 
    // but usually apps keep it or hide it. Let's keep it for now or hide if it overlaps.
    // bottomNav.style.display = 'none'; 
}

// Back to Home
window.goBackToHome = function () {
    views.detail.classList.remove('active');
    views.app.classList.add('active');
    // bottomNav.style.display = 'flex';
}

window.showSettings = function () {
    // Navigate to alerts view (mimicking "Set Alert" logic in the image flow)
    views.detail.classList.remove('active');
    views.alerts.classList.add('active');

    // Update nav to highlighting "Notifications" or just stay as is?
    // Let's highlight the Bell icon
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    // Assuming the 4th child is notifications
    document.querySelector('.bottom-nav .nav-item:nth-child(4)').classList.add('active');
}

console.log('Mobile App Initialized');
