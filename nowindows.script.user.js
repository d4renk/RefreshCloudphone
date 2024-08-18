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

    const refreshPage = () => location.reload(true);
    const twelveHours = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
    setTimeout(refreshPage, twelveHours);

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
