// ==UserScript==
// @name         RefreshCloudphone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refresh every 4-5 minutes
// @author
// @match        https://cloudphoneh5.buy.139.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Refresh every 4-5 minutes
    setTimeout(() => location.reload(), Math.random() * 60000 + 240000);
})();
