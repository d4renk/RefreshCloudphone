// ==UserScript==
// @name         RefreshCloudphone
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Refresh every 4-5 minutes
// @author
// @match        https://cloudphoneh5.buy.139.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const refreshPage = () => location.reload(true);
    const refreshInterval = Math.random() * 60000 + 240000;
    setTimeout(refreshPage, refreshInterval);

    window.addEventListener('beforeunload', () => {
        let highestTimeoutId = setTimeout(() => {});
        while (highestTimeoutId--) clearTimeout(highestTimeoutId);
    });
})();
