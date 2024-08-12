// ==UserScript==
// @name         RefreshCloudphone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  10-20
// @author
// @match        https://cloudphoneh5.buy.139.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 10-20
    setTimeout(() => location.reload(), Math.random() * 10000 + 10000);
})();
