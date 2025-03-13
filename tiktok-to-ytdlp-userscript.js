// ==UserScript==
// @name         Lihuelworks's Tiktok - Get list of tiktok links (Updated!)
// @namespace    Violentmonkey Scripts
// @version      0.2
// @license CC-BY-NC-SA-4.0
// @run-at document-end
// @icon https://www.tiktok.com/favicon.ico
// @homepageURL https://github.com/lihuelworks/tiktok-to-ytdlp-userscript
// @description  Adds a button to TikTok to get a list of all tiktok video links (e.g from a tiktok profile) to use in yt-dlp (Scroll an list link download code is by Dinoosauro https://github.com/Dinoosauro/tiktok-to-ytdlp)
// @author       Lihuelworks (with code from Dinoosauro's https://github.com/Dinoosauro/tiktok-to-ytdlp)
// @match        https://www.tiktok.com/*
// @grant        GM_addStyle
// @downloadURL https://update.greasyfork.org/scripts/488295/Tiktok%20-%20Get%20list%20of%20tiktok%20links.user.js
// @updateURL https://update.greasyfork.org/scripts/488295/Tiktok%20-%20Get%20list%20of%20tiktok%20links.meta.js
// ==/UserScript==

(function () {
    'use strict';

    // Add custom styles including reset and Material Design
    GM_addStyle(`
        #lihuelworks-tiktok-links-download-button {
            border: none;
            margin: 0;
            padding: 0;
            width: auto;
            overflow: visible;
            background: transparent;
            color: inherit;
            font: inherit;
            line-height: normal;
            -webkit-font-smoothing: inherit;
            -moz-osx-font-smoothing: inherit;
            -webkit-appearance: none;
        }

        #lihuelworks-tiktok-links-download-button::-moz-focus-inner {
            border: 0;
            padding: 0;
        }

        /* Material Design styles */
        #lihuelworks-tiktok-links-download-button {
            padding: 12px 24px;
            background-color: #6200ea;
            color: white;
            font-size: 14px;
            font-weight: 500;
            border-radius: 4px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        #lihuelworks-tiktok-links-download-button:hover {
            background-color: #3700b3;
            transform: scale(1.05);
        }

        #lihuelworks-tiktok-links-download-button:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(98, 0, 234, 0.5);
        }

        #lihuelworks-tiktok-links-download-button:active {
            background-color: #03dac6;
        }
    `);

    // Function to create and append the download button
    function addDownloadButton() {
        // Create a button element
        let downloadButton = document.createElement('button');
        downloadButton.textContent = 'Get list of TikTok links';
        downloadButton.style.order = '-1';
        downloadButton.style.zIndex = '9999999';
        downloadButton.id = 'lihuelworks-tiktok-links-download-button';

        // Get the first element with a class that contains "DivSearchWrapper"
        let searchWrapper = document.querySelectorAll('[class*="DivSearchWrapper"]')[0];

        if (searchWrapper) {
            // Insert the button above the first element with class containing DivSearchWrapper
            searchWrapper.parentElement.insertBefore(downloadButton, searchWrapper);
            console.log("Button added!");
        } else {
            console.log("DivSearchWrapper not found!");
        }

        // Add click event listener to the button
        downloadButton.addEventListener('click', function () {
            // Call the function to start downloading TikTok videos
            tiktoktoytdlp();
        });
    }

    // Function to start downloading TikTok videos
    function tiktoktoytdlp() {
        // Script logic continues...
    }

    // Wait for the page to load and then add the button
    window.addEventListener('load', addDownloadButton);
})();
