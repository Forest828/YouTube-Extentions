// ==UserScript==
// @name         YouTube Favicon Changer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Changes the favicon on YouTube
// @author       Forest828
// @match        https://www.youtube.com/*
// @icon         https://i.pinimg.com/originals/89/80/5b/89805b03acb7f48df8c30450bdef02fd.gif
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        if (!!findFavicon()) {
            const favicon = findFavicon();
            favicon.href = "https://i.pinimg.com/originals/89/80/5b/89805b03acb7f48df8c30450bdef02fd.gif";
        }
    }, 1000);
})();

const findFavicon = () => {
    return document.querySelector("link[rel='icon']");
}
