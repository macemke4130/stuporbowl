"use strict";
const environmentHost = "http://localhost:3004";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const dom = (element) => document.createElement(element);
const oneRem = Number(getComputedStyle(document.documentElement).fontSize.split("px")[0]);
const api = async (uri, method, body) => {
    try {
        const headers = { "Content-Type": "application/json", Accept: "application/json" };
        const request = await fetch(`${environmentHost}/api/${uri}`, {
            method,
            headers,
            body: JSON.stringify(body),
        });
        const response = await request.json();
        return response;
    }
    catch (error) {
        console.error(error);
    }
};
