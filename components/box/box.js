class Box extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
    this.classList.add("card", "shadow-lg", "flex", "flex-col", "flex-1");
    const title = this.getAttribute('title');
    const date = this.getAttribute('date');
    const image = this.getAttribute("img");
    const href = this.getAttribute('href');
      this.innerHTML = `
        <a href="${href}" class="h-32 md:h-40 lg:h-56 xl:h-64 w-full overflow-hidden" style="min-width: 200px;">
          <img class="object-cover w-full h-full transition" src="/assets/images/${image}" alt="${title}">
        </a>
        <div class="font-medium text-sm sm:text-base p-2">
          ${title}
        </div>
        <div class="flex mt-auto gap-1 sm:gap-2 items-center text-xs sm:text-sm font-light mt-3 p-2">
          <img class="h-3 sm:h-auto" src="/assets/icons/clock-w.svg" alt="Clock">
          ${date}
        </div>
      `;
  }
}

customElements.define("box-component", Box);