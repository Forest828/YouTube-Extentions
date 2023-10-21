// ==UserScript==
// @name         YouTube Video Ad Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the ad on a YouTube video
// @author       Forest828
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        if (!!findAd()) {
            const video = document.querySelector("video");
            if (!!video) {
                video.currentTime = video.duration;
            }
        }
    }, 500);
})();

const findAd = () => {
    return document.querySelector("div.ad-showing");
}