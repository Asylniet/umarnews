class Header extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <header class="w-full p-2 bg-primary mb-20 sm:mb-0">
        <div class="wrapper flex items-center justify-between relative">
          <a href="/" class="logo w-32 sm:w-1/4 lg:w-1/5 2xl:w-1/6 flex 2xl:pl-8 xl:pl-6" style="min-width: 146px;">
            <img class="max-w-full" src="/assets/images/logo.png" alt="Umarovnews">
          </a>
          <div class="md:w-3/4 lg:w-4/5 2xl:w-5/6 flex items-center justify-end sm:justify-between px-2 md:px-4 left-1 gap-2">
            <div class="hidden sm:block text-xs md:text-base font-secondary font-bold">
              <div>новости</div>
              <div>интервью</div>
              <div>расследования</div>
            </div>
            <div class="sm:static absolute left-0 top-14 w-full sm:w-3/5">
              <div class="relative flex items-center gap-4 rounded-full bg-white py-1 px-4 h-14 border sm:border-none">
                <img class="h-6 aspect-square" src="/assets/icons/search.svg" alt="search">
                <input class="w-full focus:border-none focus:outline-none" type="text" placeholder="День столицы...">
              </div>
            </div>
            <div class="flex items-center gap-2">
              <img class="h-9" src="/assets/images/kazakh.png" alt="kazakh language">
              <span class="hidden md:inline">Қазақша</span>
            </div>
            <div class="flex md:hidden hamburger">
              <div></div>
            </div>
          </div>
        </div>
      </header>
      `;
  }
}

customElements.define("header-component", Header);