// ==UserScript==
// @name         Auto Refresh for Cloudphone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refresh the page every 1 minute on a specific domain
// @author      
// @match        https://cloudphoneh5.buy.139.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1 minute in milliseconds
    const refreshInterval = 1 * 60 * 1000;

    setTimeout(() => {
        location.reload();
    }, refreshInterval);
})();
