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
    const activeView = document.querySelector('.view-section.active');
    if (activeView) activeView.classList.remove('active');

    // Show detail
    if (views.detail) views.detail.classList.add('active');
}

window.showSoilDetail = function () {
    alert('Tính năng chi tiết đất đang được phát triển!');
}

// Back to Home
window.goBackToHome = function () {
    if (views.detail) views.detail.classList.remove('active');
    if (views.alerts) views.alerts.classList.remove('active');

    if (views.app) views.app.classList.add('active');

    // Reset nav to Home
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelector('.bottom-nav .nav-item:first-child').classList.add('active');
}

window.showSettings = function () {
    // Navigate to alerts view
    const activeView = document.querySelector('.view-section.active');
    if (activeView) activeView.classList.remove('active');

    if (views.alerts) views.alerts.classList.add('active');

    // Highlight Notification Tab (4th item)
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    // Note: nth-child is 1-based. Notification is 4th.
    const notifNav = document.querySelector('.bottom-nav .nav-item:nth-child(4)');
    if (notifNav) notifNav.classList.add('active');
}

console.log('Mobile App Initialized - Market View Updated');

// Internal Market Tab Logic
window.switchMarketTab = function (tabName) {
    const pricesTab = document.getElementById('tab-prices');
    const newsTab = document.getElementById('tab-news');
    const btnPrices = document.getElementById('btn-tab-prices');
    const btnNews = document.getElementById('btn-tab-news');

    if (tabName === 'prices') {
        pricesTab.style.display = 'block';
        newsTab.style.display = 'none';

        btnPrices.classList.add('active');
        btnNews.classList.remove('active');
    } else {
        pricesTab.style.display = 'none';
        newsTab.style.display = 'block';

        btnNews.classList.add('active');
        btnPrices.classList.remove('active');
    }
}
