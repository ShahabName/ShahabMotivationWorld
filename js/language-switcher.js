// Copyright (c) 2025 shahabjini@gmail.com
// 
// All rights reserved. This software and associated documentation files
// are proprietary and confidential. Unauthorized copying, distribution,
// modification, uploading to code repositories (GitHub, GitLab, etc.),
// or sharing in any way is strictly prohibited.
// 
// For licensing Contact: shahabjini@gmail.com

// Language Switcher - Google Translate Integration

(function() {
    'use strict';

    // Language configuration
    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
        { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
        { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
        { code: 'zh-CN', name: 'Chinese', flag: '🇨🇳' },
        { code: 'zh-CN', name: 'Mandarin', flag: '🇨🇳', display: false }, // Same as Chinese, don't display separately
        { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
        { code: 'fr', name: 'French', flag: '🇫🇷' },
        { code: 'de', name: 'German', flag: '🇩🇪' },
        { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
        { code: 'bn', name: 'Bangla', flag: '🇧🇩' },
        { code: 'ta', name: 'Tamil', flag: '🇱🇰' }
    ];

    // Get current page URL
    function getCurrentPageURL() {
        // Check if we're already on a translated page
        if (window.location.hostname.includes('translate.goog')) {
            // Extract the original URL from the translated URL
            const pathParts = window.location.pathname.split('/');
            const originalPath = pathParts.slice(1).join('/');
            return `https://shahabname.github.io/${originalPath}`;
        }
        return window.location.href;
    }

    // Generate translation URL
    function getTranslationURL(langCode) {
        const originalURL = getCurrentPageURL();
        
        if (langCode === 'en') {
            // Return original URL for English
            return originalURL;
        }
        
        // Convert GitHub Pages URL to translate.goog format
        const translatedURL = originalURL
            .replace('https://shahabname.github.io/', 'https://shahabname-github-io.translate.goog/')
            + `?_x_tr_sl=en&_x_tr_tl=${langCode}&_x_tr_hl=en&_x_tr_pto=wapp`;
        
        return translatedURL;
    }

    // Create language switcher HTML
    function createLanguageSwitcher() {
        const container = document.createElement('div');
        container.id = 'language-switcher';
        container.className = 'language-switcher';
        
        let buttonsHTML = '<div class="language-buttons">';
        
        languages.forEach(lang => {
            if (lang.display !== false) {
                const url = getTranslationURL(lang.code);
                buttonsHTML += `
                    <a href="${url}" class="lang-btn" title="Translate to ${lang.name}">
                        <span class="flag">${lang.flag}</span>
                        <span class="lang-name">${lang.name}</span>
                    </a>
                `;
            }
        });
        
        buttonsHTML += '</div>';
        container.innerHTML = buttonsHTML;
        
        // Add CSS styles
        addStyles();
        
        // Insert at the beginning of body
        if (document.body.firstChild) {
            document.body.insertBefore(container, document.body.firstChild);
        } else {
            document.body.appendChild(container);
        }
    }

    // Add CSS styles for language switcher
    function addStyles() {
        if (document.getElementById('language-switcher-styles')) {
            return; // Styles already added
        }

        const style = document.createElement('style');
        style.id = 'language-switcher-styles';
        style.textContent = `
            .language-switcher {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 10px 20px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.15);
                position: sticky;
                top: 0;
                z-index: 9999;
                border-bottom: 3px solid rgba(255,255,255,0.3);
            }
            
            .language-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                justify-content: center;
                align-items: center;
                max-width: 1400px;
                margin: 0 auto;
            }
            
            .lang-btn {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 12px;
                background: rgba(255, 255, 255, 0.15);
                color: white;
                text-decoration: none;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
                border: 1px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(10px);
            }
            
            .lang-btn:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            
            .lang-btn .flag {
                font-size: 18px;
                line-height: 1;
            }
            
            .lang-btn .lang-name {
                font-size: 13px;
                white-space: nowrap;
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
                .language-switcher {
                    padding: 8px 10px;
                }
                
                .language-buttons {
                    gap: 6px;
                }
                
                .lang-btn {
                    padding: 5px 10px;
                    font-size: 12px;
                }
                
                .lang-btn .flag {
                    font-size: 16px;
                }
                
                .lang-btn .lang-name {
                    font-size: 11px;
                }
            }
            
            @media (max-width: 480px) {
                .lang-btn .lang-name {
                    display: none;
                }
                
                .lang-btn .flag {
                    font-size: 20px;
                }
                
                .lang-btn {
                    padding: 6px 10px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createLanguageSwitcher);
    } else {
        createLanguageSwitcher();
    }
})();
