// ==UserScript==
// @name            Gmail hide right panel
// @description     Hides the right panel where the senders name appears.
// @icon            https://raw.githubusercontent.com/henrylawson/gmail-hide-right-panel/master/gmail-hide-right-panel.jpg
//
// @author          Henry Lawson
// @namespace       https://github.com/henrylawson/gmail-hide-right-panel
// @downloadURL     https://github.com/henrylawson/gmail-hide-right-panel/raw/master/gmail-hide-right-panel.js
//
// @match           https://mail.google.com/*
// @match           http://mail.google.com/*
//
// @version         1.0
// @updateURL       https://github.com/henrylawson/gmail-hide-right-panel/raw/master/gmail-hide-right-panel.js
// ==/UserScript==

/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('td.Bu.y3 {display: none;}');
