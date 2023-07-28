class BoxList extends HTMLElement {
  constructor() {
      super();
  }

  languageMap = {
    ru : {
      view_all: "посмотреть все",
    },
    kz : {
      view_all: "барлығын қараңыз",
    },
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const href = this.getAttribute("href");
    const id = this.getAttribute("id");
    const isLast = this.getAttribute("last");
    const hideLine = this.getAttribute("hide-line");
    const language = document.querySelector('html').getAttribute("lang");
    const map = this.languageMap[language];
    setTimeout(() => {
      this.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-6 ${title ? "" : "hidden"}" id="${id}">
          <a href="#${id}" class="flex gap-3 items-center text-lg font-secondary font-bold hover:text-blue active:text-[#69B6E0]">
            <img src="/assets/images/logo-small.png" alt="${id}">
            ${title}
          </a>
          <a class="hidden sm:flex items-center gap-2 group hover:text-blue hover:underline transition ${href ? "" : "hidden"}" href="${href}">
          ${map.view_all}
            <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="#0D0D0D" class="group-hover:fill-blue transition-all"/>
            </svg>              
          </a>
        </div>
        <div class="w-full flex justify-between gap-3 pb-5 overflow-x-scroll">
          ${this.innerHTML}
        </div>
        <a class="flex sm:hidden items-center my-3 justify-end gap-2 group hover:text-blue hover:underline transition ${href ? "" : "hidden"}" href="${href}">
          посмотреть все
          <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="#0D0D0D" class="group-hover:fill-blue transition-all"/>
          </svg>              
        </a>
        <div class="h-px w-full sm:w-2/5 ${hideLine === "true" ? "" : "bg-primary"} mt-16 mb-6 ${isLast === "true" ? "hidden" : ""}"></div>
      </div>
      `;
    })
  }
}

customElements.define("box-list-component", BoxList);