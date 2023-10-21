// ==UserScript==
// @name         YouTube Video Side Ad Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the ad on the side of a YouTube video
// @author       Forest828
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        if (!!findAd()) {
            const ad = findAd();
            ad.remove();
        }
    }, 1000);
})();

const findAd = () => {
    return document.querySelector("div#companion");
}