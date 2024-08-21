// ==UserScript==
// @name         RefreshCloudphone
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  
// @author
// @match        https://cloudphoneh5.buy.139.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const refreshInterval = Math.floor(Math.random() * (60 - 50 + 1) + 50) * 60 * 1000; // Random between 50-60 minutes

    const refreshPage = () => {
        if (window.location.href.includes('lockStatus=0')) {
            window.location.href = window.location.href.replace('lockStatus=0', 'lockStatus=1');
        } else {
            location.reload(true);
        }
    };

    setInterval(refreshPage, refreshInterval);

    // Use a low-bitrate silent audio to reduce memory usage
    const audio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIAfAAACABAAZGF0YQAAAAA=');
    audio.loop = true;
    audio.volume = 0; // Ensure it's completely silent
    audio.play().catch(() => {
        console.log('Audio playback failed.');
    });

    window.addEventListener('beforeunload', () => {
        let highestTimeoutId = setTimeout(() => {});
        while (highestTimeoutId--) clearTimeout(highestTimeoutId);
    });
})();
