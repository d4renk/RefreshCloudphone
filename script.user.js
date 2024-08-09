// ==UserScript==
// @name         Auto Refresh Cloudphone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refresh the page every 9 to 11 minutes with a centered countdown timer
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
    let timeLeft = refreshInterval / 1000; // convert to seconds

    // Create a centered floating timer element
    const timerDiv = document.createElement('div');
    timerDiv.style.position = 'fixed';
    timerDiv.style.top = '50%';
    timerDiv.style.left = '50%';
    timerDiv.style.transform = 'translate(-50%, -50%)';
    timerDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    timerDiv.style.color = 'white';
    timerDiv.style.padding = '20px';
    timerDiv.style.borderRadius = '10px';
    timerDiv.style.zIndex = '1000';
    timerDiv.style.fontSize = '20px';
    timerDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    document.body.appendChild(timerDiv);

    // Update the timer every second
    const updateTimer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = Math.floor(timeLeft % 60);
        timerDiv.textContent = `Page refreshes in: ${minutes}m ${seconds}s`;

        if (timeLeft <= 0) {
            clearInterval(updateTimer);
            location.reload();
        }
    }, 1000);
})();
