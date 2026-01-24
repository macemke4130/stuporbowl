class SBHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.createStyle();
    this.createImage();
    this.createFade();
  }

  async createStyle() {
    const requestCSS = await fetch("../styles/sb-hero.css");
    const responseCSS = await requestCSS.text();

    const heroStyle = dom("style");
    this.insertAdjacentElement("afterbegin", heroStyle);

    heroStyle.innerHTML = responseCSS;
  }

  createFade() {
    const fadeElement = dom("div");
    this.querySelector(`img`)!.insertAdjacentElement("afterend", fadeElement);
    fadeElement.classList.add("fade");
    fadeElement.setAttribute("aria-hidden", "true");
  }

  createImage() {
    const desktopSource = this.getAttribute("desktop-src");
    const mobileSource = this.getAttribute("mobile-src");

    if (!desktopSource && !mobileSource) {
      console.error("One image source is required.");
      return;
    }

    const imgElement = dom("img") as HTMLImageElement;
    imgElement.setAttribute("src", desktopSource || mobileSource || "");
    this.insertAdjacentElement("afterbegin", imgElement);
  }
}

customElements.define("sb-hero", SBHero);
