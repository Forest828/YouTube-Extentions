// ==UserScript==
// @name         YouTube Favicon Changer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Changes the favicon on YouTube
// @author       Forest828
// @match        https://www.youtube.com/*
// @icon         https://cdn3.emoji.gg/emojis/9109_Sad_Cat_Thumbs_Up.png
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        if (!!findFavicon()) {
            const favicon = findFavicon();
            favicon.href = "https://cdn3.emoji.gg/emojis/9109_Sad_Cat_Thumbs_Up.png";
        }
    }, 1000);
})();

const findFavicon = () => {
    return document.querySelector("link[rel='icon']");
}