// ==UserScript==
// @name         Auto Refresh Cloudphone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refresh every 4-5 minutes with a countdown
// @author
// @match        https://cloudphoneh5.buy.139.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function refreshPage() {
        const refreshInterval = Math.random() * 60000 + 240000; // 240000ms to 300000ms (4-5 minutes)
        let timeLeft = Math.round(refreshInterval / 1000);

        const timerDiv = document.createElement('div');
        Object.assign(timerDiv.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            zIndex: '1000',
            fontSize: '20px',
            pointerEvents: 'none'
        });
        document.body.appendChild(timerDiv);

        const updateTimer = setInterval(() => {
            timerDiv.textContent = `Refreshing in ${timeLeft--} seconds`;
            if (timeLeft < 0) {
                clearInterval(updateTimer);
                location.reload();
            }
        }, 1000);
    }

    refreshPage();
})();
