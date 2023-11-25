// ==UserScript==
// @name         YouTube Video Ad Skipper
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
        if (!!findButton()) {
            const button = findButton();
            button.click();
        }
    }, 500);
})();

const findButton = () => {
    return document.querySelector(".ytp-ad-skip-button-modern");
}
