class SBHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.createStyle();
    this.createFade();
  }

  createFade() {
    const fadeElement = dom("div");
    $(`sb-hero img`)!.insertAdjacentElement("afterend", fadeElement);
    fadeElement.classList.add("fade");
    fadeElement.setAttribute("aria-hidden", "true");
  }

  async createStyle() {
    const requestCSS = await fetch("../styles/sb-hero.css");
    const responseCSS = await requestCSS.text();

    const heroStyle = dom("style");
    this.insertAdjacentElement("afterbegin", heroStyle);

    heroStyle.innerHTML = responseCSS;
  }
}

customElements.define("sb-hero", SBHero);
