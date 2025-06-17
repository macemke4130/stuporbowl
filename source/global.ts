const environmentHost = "http://localhost:3004";

const $ = (selector: string) => document.querySelector(selector) as HTMLElement;
const $$ = (selector: string) => document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
const dom = (element: string) => document.createElement(element);

const oneRem = Number(getComputedStyle(document.documentElement).fontSize.split("px")[0]);

const api: (uri: string, method: "GET" | "POST", body: any) => any = async (uri: string, method: "GET" | "POST", body: any) => {
  try {
    const headers = { "Content-Type": "application/json", Accept: "application/json" };

    const request = await fetch(`${environmentHost}/api/${uri}`, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    const response = await request.json();

    return response;
  } catch (error) {
    console.error(error);
  }
};
