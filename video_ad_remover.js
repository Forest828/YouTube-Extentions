// ==UserScript==
// @name         YouTube Video Ad Remover
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Removes the ad on a YouTube video
// @author       Forest828
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        let ad = false;
        if (!!findAd()) {
            const video = document.querySelector("video");
            if (!!video) {
                //video.currentTime = video.duration;
                video.playbackRate = 5;
                video.muted = true;
            }
            ad = true;
        } else if (ad) {
            const video = document.querySelector("video");
            video.muted = false;
            video.playbackRat = 1;
            ad = false;
        }
    }, 500);
})();

const findAd = () => {
    return document.querySelector("div.ad-showing");
}
