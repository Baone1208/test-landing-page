const views = {
    landing: document.getElementById('landing-view'),
    app: document.getElementById('app-view'),
    detail: document.getElementById('detail-view'),
    market: document.getElementById('market-view'),
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
    ['app-view', 'market-view', 'alerts-view'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    // Hide detail View if active
    if (views.detail) views.detail.classList.remove('active');

    // Show target
    const target = document.getElementById(targetId);
    if (target) target.classList.add('active');

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
}

// Back to Home
window.goBackToHome = function () {
    views.detail.classList.remove('active');
    views.app.classList.add('active');

    // Reset nav to Home
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelector('.bottom-nav .nav-item:first-child').classList.add('active');
}

window.showSettings = function () {
    // Navigate to alerts view
    views.detail.classList.remove('active');
    views.alerts.classList.add('active');

    // Highlight Notification Tab (4th item)
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelector('.bottom-nav .nav-item:nth-child(4)').classList.add('active');
}

console.log('Mobile App Initialized - Market View Updated');
