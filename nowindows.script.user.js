// ==UserScript==
// @name         Auto Refresh Cloudphone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refresh the page every 9 to 11 minutes without a visible timer
// @author
// @match        https://cloudphoneh5.buy.139.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Random interval between 9 to 11 minutes in milliseconds
    const minInterval = 9 * 60 * 1000;
    const maxInterval = 11 * 60 * 1000;
    const refreshInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;

    // Refresh the page after the interval
    setTimeout(() => {
        location.reload();
    }, refreshInterval);
})();
