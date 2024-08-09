// ==UserScript==
// @name         Auto Refresh with Timer for Cloudphone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refresh the page every 1 minute with a visible countdown timer
// @author       
// @match        https://cloudphoneh5.buy.139.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1 minute in milliseconds
    const refreshInterval = 1 * 60 * 1000;
    let timeLeft = refreshInterval / 1000;

    // Create a timer element
    const timerDiv = document.createElement('div');
    timerDiv.style.position = 'fixed';
    timerDiv.style.top = '10px';
    timerDiv.style.right = '10px';
    timerDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    timerDiv.style.color = 'white';
    timerDiv.style.padding = '10px';
    timerDiv.style.borderRadius = '5px';
    timerDiv.style.zIndex = '1000';
    document.body.appendChild(timerDiv);

    // Update the timer every second
    const updateTimer = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Page refreshes in: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(updateTimer);
            location.reload();
        }
    }, 1000);
})();
