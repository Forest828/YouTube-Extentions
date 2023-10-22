// ==UserScript==
// @name         YouTube Search Page Ad Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the ad on a YouTube search page
// @author       Forest828
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        if (!!findAd()) {
            const ad = findAd();
            ad.parentElement.remove();
        }
    }, 1000);
})();

const findAd = () => {
    return document.querySelector("ytd-in-feed-ad-layout-renderer");
}
