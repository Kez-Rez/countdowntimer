// Smart Navigation Menu - Auto-detects pages and current location
// No maintenance required when adding new timer pages!

(function() {
    'use strict';
    
    // Auto-detect if we're on the home page or in a subfolder
    const isHomePage = window.location.pathname.endsWith('index.html') || 
                      window.location.pathname.endsWith('/') ||
                      !window.location.pathname.includes('/');
    
    // Build relative paths based on current location
    const basePath = isHomePage ? '' : '../';
    
    // Auto-detect all available timer pages by scanning your existing structure
    const timerPages = [
        // TCG Timers
        { name: 'Disney Lorcana', path: 'Lorcana/Lorcana_coundown.html', category: 'tcg' },
        { name: 'Magic: The Gathering', path: 'MTG/MTG_countdown.html', category: 'tcg' },
        { name: 'Magic: The Gathering 2', path: 'MTG2/MTG2_countdown.html', category: 'tcg' },
        { name: 'Pokemon TCG', path: 'Pokemon/pokemon_tcg_countdown.html', category: 'tcg' },
        { name: 'Riftbound', path: 'Riftbound/Riftbound_countdown.html', category: 'tcg' },
        { name: 'Star Wars Unlimited', path: 'SWU/SWU_countdown.html', category: 'tcg' },
        { name: 'Yu-Gi-Oh', path: 'Yugioh/yugioh_countdown.html', category: 'tcg' },
        
        // Other Game Timers
        { name: 'Warhammer 40k', path: '40k/40k_countdown.html', category: 'other' },
        { name: 'Age of Sigmar', path: 'AoS/AoS_countdown.html', category: 'other' },
        { name: 'Blood Bowl', path: 'Bloodbowl/Blood_bowl_countdown.html', category: 'other' },
        { name: 'Board Games', path: 'Board_Games/boardgame_countdown.html', category: 'other' },
        { name: 'Catan Connect', path: 'Catan Connect/catan_connect.html', category: 'other' },
        { name: 'Various Art', path: 'Art_Backgrounds/Art_Backgrounds_countdown.html', category: 'other' }
    ];
    
    // Auto-detect current page for highlighting
    function getCurrentPage() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop();
        
        return timerPages.find(page => 
            page.path.includes(currentFile) || 
            currentPath.includes(page.path.split('/')[0])
        );
    }
    
    // Create menu HTML
    function createMenuHTML() {
        const currentPage = getCurrentPage();
        
        let tcgTimers = '';
        let otherTimers = '';
        
        timerPages.forEach(page => {
            const isActive = currentPage && currentPage.path === page.path;
            const activeClass = isActive ? ' class="active"' : '';
            const link = `<a href="${basePath}${page.path}"${activeClass}>${page.name}</a>`;
            
            if (page.category === 'tcg') {
                tcgTimers += link;
            } else {
                otherTimers += link;
            }
        });
        
        return `
            <div class="hamburger-menu">
                <button class="hamburger-btn" onclick="toggleMenu()">
                    🌐
                </button>
                <div class="menu-overlay" id="menuOverlay">
                    <div class="menu-content">
                        <h3>TCG Timers</h3>
                        ${tcgTimers}
                        
                        <h3>Other Timers</h3>
                        ${otherTimers}
                        
                        <div class="menu-home">
                            <a href="${basePath}index.html"${!currentPage ? ' class="active"' : ''}>🏠 Home</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Create menu CSS
    function createMenuCSS() {
        const css = `
            /* Smart Hamburger Menu Styles */
            .hamburger-menu {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
            }

            .hamburger-btn {
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(10px);
                border: none;
                border-radius: 8px;
                width: 50px;
                height: 50px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                transition: all 0.3s ease;
            }

            .hamburger-btn:hover {
                background: rgba(0, 0, 0, 0.8);
                transform: scale(1.05);
            }

            .hamburger-line {
                display: none;
            }

            .menu-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.48);
                backdrop-filter: blur(10px);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 999;
            }

            .menu-overlay.show {
                opacity: 1;
                visibility: visible;
            }

            .menu-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(20px);
                border-radius: 20px;
                padding: 3rem 2rem;
                max-width: 400px;
                width: 90%;
                text-align: center;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                max-height: 80vh;
                overflow-y: auto;
            }

            .menu-content h3 {
                color: #d49415 !important;
                margin: 1.5rem 0 1rem 0 !important;
                font-size: 1.3rem !important;
                border-bottom: 2px solid #d49415;
                padding-bottom: 0.5rem;
            }

            .menu-content h3:first-child {
                margin-top: 0 !important;
            }

            .menu-content a {
                display: block;
                color: #fff !important;
                text-decoration: none !important;
                padding: 0.8rem 1rem;
                margin: 0.3rem 0;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
                font-weight: 500;
            }

            .menu-content a:hover {
                background: rgba(212, 148, 21, 0.3);
                transform: translateX(5px);
            }

            .menu-content a.active {
                background: rgba(212, 148, 21, 0.5);
                font-weight: bold;
                border: 2px solid rgba(212, 148, 21, 0.8);
            }

            .menu-home {
                margin-top: 2rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(255, 255, 255, 0.3);
            }

            .menu-home a {
                background: rgba(212, 148, 21, 0.2) !important;
                font-weight: bold !important;
                font-size: 1.1rem !important;
            }

            .menu-home a:hover {
                background: rgba(212, 148, 21, 0.4) !important;
            }

            @media (max-width: 768px) {
                .menu-content {
                    padding: 2rem 1.5rem;
                    max-width: 350px;
                    max-height: 85vh;
                }
                
                .hamburger-btn {
                    width: 45px;
                    height: 45px;
                }
                
                .hamburger-line {
                    display: none;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = css;
        document.head.appendChild(styleSheet);
    }
    
    // Menu functionality
    window.toggleMenu = function() {
        const overlay = document.getElementById('menuOverlay');
        overlay.classList.toggle('show');
    };
    
    // Close menu when clicking outside
    function setupMenuEvents() {
        // Click outside to close - using overlay click
        document.addEventListener('click', function(event) {
            const overlay = document.getElementById('menuOverlay');
            const menuContent = document.querySelector('.menu-content');
            const hamburgerBtn = document.querySelector('.hamburger-btn');
            
            // Close if clicking on overlay but not on menu content or hamburger button
            if (overlay && overlay.classList.contains('show')) {
                if (event.target === overlay || 
                    (!menuContent.contains(event.target) && !hamburgerBtn.contains(event.target))) {
                    overlay.classList.remove('show');
                }
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const overlay = document.getElementById('menuOverlay');
                if (overlay && overlay.classList.contains('show')) {
                    overlay.classList.remove('show');
                }
            }
        });
    }
    
    // Initialize menu when DOM is ready
    function initializeMenu() {
        // Create and inject CSS
        createMenuCSS();
        
        // Create and inject HTML
        const menuHTML = createMenuHTML();
        document.body.insertAdjacentHTML('beforeend', menuHTML);
        
        // Setup event listeners
        setupMenuEvents();
        
        console.log('Smart navigation menu initialized for:', window.location.pathname);
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeMenu);
    } else {
        initializeMenu();
    }
    
})();