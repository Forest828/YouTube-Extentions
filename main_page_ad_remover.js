// ==UserScript==
// @name         YouTube Main Page Ad Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the ad on the YouTube main page
// @author       Forest828
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        if (!!findAd()) {
            const ad = findAd();
            ad.parentElement.parentElement.parentElement.parentElement.remove();
        }
    }, 1000);
})();

const findAd = () => {
    return document.querySelector("div#primary > ytd-rich-grid-renderer > div#contents > ytd-rich-grid-row > div#contents > ytd-rich-item-renderer > div#content > ytd-ad-slot-renderer");
}